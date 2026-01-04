// PostWind - Real-time CSS Generator Core
import { CONFIG, createDefaultConfig } from './config.js';
import { processClass, expandClass } from './styler.js';
import { addShortcut, isShortcut, CLASS_NAME_PATTERN } from './shortcuts.js';
import { debounce, safeWrapper, clearMemoCache, escapeSelector } from './utils.js';
import { splitContainerQueryClasses, updateContainerQueries, cleanupContainerQueriesForTree } from './container-query.js';
import { generateDoc } from './gen-doc.js';

// ============================================================================
// STATE
// ============================================================================
const processedClasses = new Set();
let utilityStyleElement = null;
let shortcutStyleElement = null;
let debugMode = false;
let bodyClassMode = false;
let currentBodyClass = null;
let resizeObserver = null;
let visibilityObserver = null;
const elementsWithVisiblePseudo = new WeakMap();
const processedScrollXElements = new WeakSet();
const scrollXStyleCache = new Map();
const SCROLL_X_CLASS_PATTERN = /^scroll-x:(\d+(?:\.\d+)?)$/;
const SCROLL_X_DUPLICATE_ROUNDS = 3;

// ============================================================================
// CONFIGURATION
// ============================================================================
export function getConfig() {
  return CONFIG;
}

export function setConfig(newConfig) {
  Object.assign(CONFIG, newConfig);
}

function formatKeywordStyle(styleDefinition) {
  if (typeof styleDefinition === 'string') {
    return styleDefinition.trim();
  }

  if (styleDefinition && typeof styleDefinition === 'object' && !Array.isArray(styleDefinition)) {
    return Object.entries(styleDefinition)
      .map(([prop, value]) => `${prop}: ${value}`)
      .join('; ')
      .trim();
  }

  return '';
}

function looksLikeCssDeclaration(styleString) {
  if (!styleString || typeof styleString !== 'string') {
    return false;
  }

  return styleString.includes(':') && styleString.includes(';');
}

function normalizeKeywordKey(key) {
  const expanded = expandClass(key);
  return Array.isArray(expanded) && expanded.length === 1 ? expanded[0] : key
}

export function defineKeyword(nameOrEntries, style) {
  if (!nameOrEntries) {
    console.warn('PostWind.define requires a name or object map.');
    return false;
  }

  if (!CONFIG.keywords) {
    CONFIG.keywords = {};
  }

  const entries = (typeof nameOrEntries === 'object' && !Array.isArray(nameOrEntries))
    ? Object.entries(nameOrEntries)
    : [[nameOrEntries, style]];

  let updated = false;
  const keywordsToReprocess = new Set();

  entries.forEach(([key, value]) => {
    if (!key || value == null) {
      console.warn(`PostWind.define skipped invalid definition for "${key}"`);
      return;
    }

    if (CONFIG.shortcuts?.[key]) {
      console.warn(`PostWind.define: keyword "${key}" overrides existing shortcut definition.`);
    }

    if (typeof value === 'string') {
      const trimmedValue = value.trim();

      if (!looksLikeCssDeclaration(trimmedValue)) {
        // Treat as shortcut definition
        if (CONFIG.keywords?.[key]) {
          delete CONFIG.keywords[key];
        }
        const shortcutRegistered = registerShortcut(key, trimmedValue);
        if (shortcutRegistered) {
          updated = true;
        }
        return;
      }
    }

    const cssString = formatKeywordStyle(value);
    if (!cssString) {
      console.warn(`PostWind.define: Unable to parse style for "${key}"`);
      return;
    }

    const normalizedKey = normalizeKeywordKey(key);
    const keywordTargets = new Set([key]);
    if (normalizedKey !== key) {
      keywordTargets.add(normalizedKey);
    }

    keywordTargets.forEach(keywordKey => {
      CONFIG.keywords[keywordKey] = cssString;
      processedClasses.delete(keywordKey);
      keywordsToReprocess.add(keywordKey);
    });
    updated = true;
  });

  if (keywordsToReprocess.size > 0) {
    clearMemoCache();
    if (typeof document !== 'undefined') {
      keywordsToReprocess.forEach(keywordKey => {
        generateCSSForClass(keywordKey);
      });
    }
  }

  return updated;
}

// ============================================================================
// CORE: Single function processes each class
// ============================================================================

/**
 * Main handler - processes an element and all its classes
 * This is called for every element with a class attribute
 */
const processElement = safeWrapper(function(element) {
  const originalClassString = element.getAttribute('class');
  if (!originalClassString || !originalClassString.trim()) return;

  const originalClasses = originalClassString.split(/\s+/).filter(Boolean);
  const transformedClasses = [];

  // Process each class through our single decision point
  originalClasses.forEach(className => {
    const result = handleClass(className, element);
    if (result) {
      transformedClasses.push(...result);
    }
  });

  // Update element if classes were transformed
  const newClassString = transformedClasses.join(' ');
  if (newClassString !== originalClassString) {
    element.setAttribute('class', newClassString);
    if (debugMode) {
      element.setAttribute('data-dw-original', originalClassString);
    }
  }

  // Handle special features that need element references
  handleVisibilityTracking(element, transformedClasses);
  handleScrollXFeature(element, transformedClasses);
}, 'processElement');

/**
 * SINGLE DECISION POINT: Every class goes through here
 * Determines what type of class it is and how to handle it
 * Returns array of class names to keep in the DOM (or null to remove)
 */
function handleClass(className, element) {
  // 1. ONLOAD: Special filter that schedules class addition
  if (className.startsWith('onload:')) {
    const targetClass = className.slice('onload:'.length);
    setTimeout(() => element?.classList.add(targetClass), 100);
    return null; // Remove from DOM
  }

  // 2. EXPANSION: Handle pipe notation (p-10|20), @notation (p-10@m), brackets
  const expandedClasses = expandClass(className);
  if (expandedClasses.length > 1) {
    // Recursively handle each expanded class
    const results = [];
    expandedClasses.forEach(expanded => {
      const result = handleClass(expanded, element);
      if (result) results.push(...result);
    });
    return results;
  }

  // Use the single expanded/cleaned class name
  const cleanedClass = expandedClasses[0] || className;

  // 3. CONTAINER QUERIES: Handle @container syntax
  const { regularClasses, containerQueries } = splitContainerQueryClasses([cleanedClass]);
  if (containerQueries.length > 0) {
    containerQueries.forEach(query => {
      generateCSSForClass(query.payload);
    });
    updateContainerQueries(element, containerQueries);
  }

  // 4. GENERATE CSS: For shortcuts, keywords, and utility classes
  if (isPostwindClass(cleanedClass)) {
    generateCSSForClass(cleanedClass);
  }

  // Return the cleaned class to keep in DOM
  return [cleanedClass];
}

/**
 * Check if this is a PostWind class (shortcut, keyword, or utility)
 */
function isPostwindClass(className) {
  // Shortcuts are always PostWind classes
  if (isShortcut(className)) return true;

  // Keywords are PostWind classes
  const baseClass = className.split(':').pop();
  if (CONFIG.keywords?.[baseClass]) return true;

  // Utility classes match patterns like: property-value
  return isUtilityPattern(className);
}

/**
 * Check if className matches utility class pattern
 */
function isUtilityPattern(className) {
  // Remove modifiers (hover:, m:, etc.) to get base class
  const baseClass = className.split(':').pop();

  // Match patterns: property-value
  // Examples: p-10, bg-red-500, w-[200px], text-lg
  return /^-?[a-z-]+-[a-z0-9-[\]./]+$/i.test(baseClass);
}

/**
 * Generate and inject CSS for a class (only once per class)
 */
const generateCSSForClass = safeWrapper(function(className) {
  if (processedClasses.has(className)) return;
  processedClasses.add(className);

  const cssRules = processClass(className);
  const targetBucket = isShortcut(className) ? 'shortcut' : 'utility';

  cssRules.forEach(rule => {
    if (rule) {
      injectCSS(rule, targetBucket);
    }
  });
}, 'generateCSSForClass');

/**
 * Handle visibility tracking for elements with visible: pseudo-classes
 */
function handleVisibilityTracking(element, classes) {
  const hasVisiblePseudo = classes.some(cls => cls.includes('visible:'));
  if (hasVisiblePseudo) {
    setupVisibilityObserver();
    elementsWithVisiblePseudo.set(element, classes.filter(cls => cls.includes('visible:')));
    visibilityObserver.observe(element);
  }
}

/**
 * Handle scroll-x animation feature
 */
function handleScrollXFeature(element, classes) {
  const scrollClass = classes.find(cls => SCROLL_X_CLASS_PATTERN.test(cls));
  if (!scrollClass) return;

  const durationMatch = scrollClass.match(SCROLL_X_CLASS_PATTERN);
  const duration = durationMatch ? parseFloat(durationMatch[1]) : null;
  if (!duration || Number.isNaN(duration)) return;

  ensureScrollXCSS(scrollClass, duration);
  duplicateScrollXChildren(element);
}

function processNodeTree(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  processElement(node);

  const elementsWithClasses = node.querySelectorAll('[class]');
  elementsWithClasses.forEach(processElement);
}

// ============================================================================
// CSS INJECTION
// ============================================================================
function injectCSS(css, target = 'utility') {
  if (!css) return;

  if (target === 'shortcut') {
    ensureShortcutStyleElement();
    shortcutStyleElement.textContent += css + '\n';
    return;
  }

  ensureUtilityStyleElement();
  utilityStyleElement.textContent += css + '\n';
}

function ensureUtilityStyleElement() {
  if (utilityStyleElement || typeof document === 'undefined') return;

  utilityStyleElement = document.getElementById('postwind');
  if (!utilityStyleElement) {
    utilityStyleElement = document.createElement('style');
    utilityStyleElement.id = 'postwind';
    document.head.appendChild(utilityStyleElement);
    utilityStyleElement.textContent = getAnimationKeyframes();
  }
}

function ensureShortcutStyleElement() {
  if (shortcutStyleElement || typeof document === 'undefined') return;

  shortcutStyleElement = document.getElementById('postwind-shortcuts');
  if (!shortcutStyleElement) {
    shortcutStyleElement = document.createElement('style');
    shortcutStyleElement.id = 'postwind-shortcuts';
    document.head.appendChild(shortcutStyleElement);
  }
}

function getAnimationKeyframes() {
  return `@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes pulse {
  50% { opacity: 0.5; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
@keyframes pw-scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;
}


// ============================================================================
// SCROLL-X FEATURE
// ============================================================================
function ensureScrollXCSS(className, durationSeconds) {
  const cachedDuration = scrollXStyleCache.get(className);
  if (cachedDuration === durationSeconds) {
    return;
  }

  scrollXStyleCache.set(className, durationSeconds);

  const escaped = escapeSelector(className);
  const rule = `.${escaped} { display: inline-flex; animation: pw-scroll-x ${durationSeconds}s linear infinite; will-change: transform; }`;
  const childRule = `.${escaped} > * { flex: 0 0 auto; }`;
  injectCSS(`${rule}
${childRule}`);
}

function duplicateScrollXChildren(element) {
  if (processedScrollXElements.has(element)) {
    return;
  }

  const originalChildren = Array.from(element.children);
  if (!originalChildren.length) {
    return;
  }

  processedScrollXElements.add(element);
  element.setAttribute('data-pw-scroll-x', 'ready');

  for (let round = 0; round < SCROLL_X_DUPLICATE_ROUNDS; round += 1) {
    originalChildren.forEach(child => {
      element.appendChild(child.cloneNode(true));
    });
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================
export function init(options = {}) {
  // Check if DOM is ready
  if (typeof document !== 'undefined' && document.readyState === 'loading') {
    // DOM is not ready, defer execution
    document.addEventListener('DOMContentLoaded', () => {
      init(options);
    });
    return;
  }

  const settings = parseInitOptions(options);

  if (settings.breakpoints) {
    applyBreakpointOverrides(settings.breakpoints);
  }

  debugMode = settings.debug;

  if (typeof window !== 'undefined') {
    window.PostWindDebug = debugMode;
  }

  if (settings.clearCache) {
    processedClasses.clear();
  }

  if (settings.reset) {
    resetCSS();
  }

  if (settings.define) {
    applyInitDefinitions(settings.define);
  }

  if (settings.preload) {
    preload(settings.preload);
  }

  const elementsWithClasses = document.querySelectorAll('[class]');
  elementsWithClasses.forEach(processElement);

  // Setup dark mode auto-detection
  setupDarkModeAuto();

  setupMutationObserver();

  if (settings.body) {
    setupBodyClassManagement();
  }

  // Setup visibility observer for existing elements with visible: pseudo
  const elementsWithVisible = document.querySelectorAll('[class*="visible:"]');
  if (elementsWithVisible.length > 0) {
    setupVisibilityObserver();
  }
}

function parseInitOptions(options) {
  return {
    debug: options.debug !== undefined ? options.debug : (typeof window !== 'undefined' && window.location.port > 2000),
    reset: options.reset !== undefined ? options.reset : true,
    body: options.body !== undefined ? options.body : false,
    clearCache: true,
    ...options
  };
}

function applyBreakpointOverrides(breakpointMap) {
  if (!isPlainObject(breakpointMap)) {
    console.warn('PostWind: init breakpoints must be provided as an object map.');
    return;
  }

  const normalized = {};
  Object.entries(breakpointMap).forEach(([key, value]) => {
    if (typeof value === 'string' && value.trim()) {
      normalized[key] = value.trim();
    } else {
      console.warn(`PostWind: breakpoint "${key}" must be a non-empty string media query.`);
    }
  });

  if (!Object.keys(normalized).length) {
    return;
  }

  const existing = CONFIG.breakpoints || {};
  const orderedEntries = [...Object.entries(normalized)];

  Object.entries(existing).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(normalized, key)) {
      orderedEntries.push([key, value]);
    }
  });

  CONFIG.breakpoints = Object.fromEntries(orderedEntries);
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

// ============================================================================
// OBSERVERS
// ============================================================================
function setupMutationObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        processNodeTree(node);
      });

      mutation.removedNodes.forEach(node => {
        cleanupContainerQueriesForTree(node);
      });

      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        processElement(mutation.target);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });
}

function setupVisibilityObserver() {
  if (visibilityObserver) return;

  visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const element = entry.target;
      const visibleClasses = elementsWithVisiblePseudo.get(element);

      if (!visibleClasses) return;

      if (entry.isIntersecting) {
        element.classList.add('dw-visible');
      } else {
        element.classList.remove('dw-visible');
      }
    });
  }, {
    threshold: 0.7, // Trigger when 70% visible
    rootMargin: '0px'
  });
}

// ============================================================================
// PUBLIC API
// ============================================================================
export function resetCSS() {
  const resetRules = `*,*::before,*::after{box-sizing:border-box}
*{margin:0}
html,body{height:100%}
body{line-height:1.5;-webkit-font-smoothing:antialiased}
img,picture,video,canvas,svg{display:block;max-width:100%}
input,button,textarea,select{font:inherit}
p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}
#root,#__next{isolation:isolate}
ul,ol{list-style:none;padding:0}
a{color:inherit;text-decoration:none}
button{background:none;border:none;cursor:pointer}
table{border-collapse:collapse;border-spacing:0}
fieldset{border:none;padding:0}
legend{padding:0}
textarea{resize:vertical}
details summary{cursor:pointer}`;

  let resetElement = document.querySelector('[data-postwind-reset]');
  if (!resetElement) {
    resetElement = document.createElement('style');
    resetElement.setAttribute('data-postwind-reset', 'true');
    document.head.insertBefore(resetElement, document.head.firstChild);
  }

  resetElement.textContent = resetRules;
}
 
export function loadClass(className) {
  if (!className) return;
  
  const normalizedEntries = Array.isArray(className)
    ? className
    : [className];
  
  normalizedEntries
    .filter(entry => typeof entry === 'string' && entry.trim())
    .flatMap(entry => expandClass(entry))
    .flat()
    .filter(Boolean)
    .forEach(cls => generateCSSForClass(cls));
}

export function preload(classList) {
  if (!classList) return;

  const normalizedEntries = Array.isArray(classList)
    ? classList
    : [classList];

  normalizedEntries
    .filter(entry => typeof entry === 'string' && entry.trim())
    .flatMap(entry => expandClass(entry))
    .flat()
    .filter(Boolean)
    .forEach(cls => generateCSSForClass(cls));
}

function applyInitDefinitions(definitionOption) {
  if (!definitionOption) return;

  const entries = Array.isArray(definitionOption) ? definitionOption : [definitionOption];

  entries.forEach(entry => {
    if (!entry) return;

    if (Array.isArray(entry)) {
      const [name, style] = entry;
      if (!name) {
        console.warn('PostWind: init.define entry missing name.');
        return;
      }
      defineKeyword(name, style);
      return;
    }

    if (typeof entry === 'object') {
      defineKeyword(entry);
      return;
    }

    console.warn('PostWind: init.define entries must be objects or [name, style] pairs.');
  });
}

function getProcessableShortcutName(shortcutName) {
  if (typeof shortcutName !== 'string') {
    return shortcutName;
  }

  const trimmedName = shortcutName.trim();

  if (trimmedName.startsWith('.') && CLASS_NAME_PATTERN.test(trimmedName.slice(1))) {
    return trimmedName.slice(1);
  }

  return trimmedName;
}

function registerShortcut(shortcutName, shortcutClasses) {
  const normalizedName = typeof shortcutName === 'string' ? shortcutName.trim() : shortcutName;
  const existingDefinition = CONFIG.shortcuts?.[normalizedName];
  if (existingDefinition === shortcutClasses) {
    return true; // Nothing changed, skip reprocessing
  }

  const success = addShortcut(normalizedName, shortcutClasses);
  if (!success) {
    return false;
  }

  // Allow regenerated CSS for this class
  const processableName = getProcessableShortcutName(normalizedName);
  if (processableName) {
    processedClasses.delete(processableName);
  }

  // Immediately inject CSS for shortcuts that may already exist in the DOM
  if (typeof document !== 'undefined') {
    const targetName = processableName || normalizedName;
    generateCSSForClass(targetName);
  }

  return true;
}

export function shortcut(nameOrMap, classes) {
  if (nameOrMap && typeof nameOrMap === 'object' && !Array.isArray(nameOrMap)) {
    return Object.entries(nameOrMap).every(([shortcutName, shortcutClasses]) => {
      return registerShortcut(shortcutName, shortcutClasses);
    });
  }

  return registerShortcut(nameOrMap, classes);
}

// ============================================================================
// DARK MODE MANAGEMENT
// ============================================================================
function setupDarkModeAuto() {
  if (typeof document === 'undefined') return;

  const body = document.body;
  if (!body || !body.classList || typeof body.classList.contains !== 'function') return;

  // If .dark is already present, skip auto-detection
  if (body.classList.contains('dark')) {
    if (debugMode) {
      console.log('PostWind: Dark mode already set, skipping auto-detection');
    }
    return;
  }

  // Check if dark-auto class is present
  if (body.classList.contains('dark-auto')) {
    // Check OS preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        body.classList.add('dark');
        if (debugMode) {
          console.log('PostWind: Dark mode enabled from OS preference');
        }
      } else {
        if (debugMode) {
          console.log('PostWind: Light mode from OS preference');
        }
      }
    }
  }
}

// ============================================================================
// BODY CLASS MANAGEMENT
// ============================================================================
function setupBodyClassManagement() {
  bodyClassMode = true;

  // Set initial body class
  updateBodyClass();

  // Create debounced update function using utils
  const debouncedUpdate = debounce(updateBodyClass, 100);

  // Setup resize observer
  if (typeof window !== 'undefined' && window.ResizeObserver) {
    resizeObserver = new ResizeObserver(debouncedUpdate);
    resizeObserver.observe(document.body);
  } else {
    // Fallback to resize event
    window.addEventListener('resize', debouncedUpdate);
  }
}

function updateBodyClass() {
  if (!bodyClassMode || typeof window === 'undefined') return;

  const currentBreakpoint = getCurrentBreakpoint();
  const friendlyName = mapBreakpointToFriendlyName(currentBreakpoint);

  if (debugMode) {
    console.log('PostWind: Breakpoint check - current:', currentBreakpoint, 'friendly:', friendlyName, 'width:', window.innerWidth);
  }

  if (currentBodyClass !== friendlyName) {
    // Remove old body class
    if (currentBodyClass) {
      document.body.classList.remove(currentBodyClass);
    }

    // Add new body class
    if (friendlyName) {
      document.body.classList.add(friendlyName);
    }

    currentBodyClass = friendlyName;
  }
}

function getCurrentBreakpoint() {
  const breakpoints = CONFIG.breakpoints;
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    const matching = [];

    for (const [breakpointName, mediaQuery] of Object.entries(breakpoints)) {
      try {
        if (window.matchMedia(mediaQuery).matches) {
          matching.push([breakpointName, mediaQuery]);
        }
      } catch (error) {
        if (debugMode) {
          console.warn('PostWind: invalid breakpoint media query', mediaQuery, error);
        }
      }
    }

    if (matching.length > 0) {
      matching.sort((a, b) => getBreakpointWeight(b[1]) - getBreakpointWeight(a[1]));
      return matching[0][0];
    }
  }

  // Default fallback based on width if no media query matches
  if (width <= 768) {
    return 'm';
  }
  return 'd';
}

function mapBreakpointToFriendlyName(breakpointName) {
  if (!breakpointName) return null;

  const mapping = {
    'm': 'mobile',
    'd': 'desktop',
    't': 'tablet'
  };

  return mapping[breakpointName] || breakpointName;
}

function getBreakpointWeight(mediaQuery) {
  if (!mediaQuery || typeof mediaQuery !== 'string') return 0;

  const minMatch = mediaQuery.match(/min-width\s*:\s*(\d+)px/i);
  if (minMatch) {
    return parseInt(minMatch[1], 10);
  }

  const maxMatch = mediaQuery.match(/max-width\s*:\s*(\d+)px/i);
  if (maxMatch) {
    // Negative so min-widths always outrank max-widths when both match
    return -parseInt(maxMatch[1], 10);
  }

  return 0;
}

export { CONFIG };

// Auto-setup global when in browser
if (typeof window !== 'undefined') {
  const PostWind = {
    init,
    resetCSS,
    loadClass,
    shortcut,
    getConfig,
    setConfig,
    generateDoc,
    get config() { return getConfig(); },
    set config(newConfig) { setConfig(newConfig); },
    // Debug access
    get processedClasses() { return processedClasses; }
  };

  window.PostWind = PostWind;
}
