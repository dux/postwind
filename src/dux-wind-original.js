// Real-time Tailwind-like CSS generator
const DuxWind = (function() {
  // Default configuration
  let config = {
    breakpoints: {
      'm': '(max-width: 640px)',
      't': '(max-width: 768px)',
      'd': '(min-width: 1024px)',
      'lg': '(min-width: 1280px)',
      'xl': '(min-width: 1536px)'
    },
    pixelMultiplier: 4,
    properties: {},
    keywords: {},
    shortcuts: {}
  };

  // Get current configuration
  function getConfig() {
    return config;
  }

  // Set to track processed classes
  const processedClasses = new Set();

  // Style element for injecting CSS
  let styleElement;

  // Clean up arbitrary value syntax and @ notation
  function cleanArbitraryValue(className) {
    // First handle @ notation: p-10@m -> m:p-10
    let cleanedClass = className.replace(/^([^@]+)@([a-z]+)$/, '$2:$1');

    // Then handle bracket syntax
    return cleanedClass.replace(/\[([^\]]+)\]/g, (match, value) => {
      // If it has px, keep px but remove brackets: w-[200px] -> w-200px
      if (value.endsWith('px')) {
        return value; // Keep the full value including px
      }
      // If it has #, keep the hash: bg-[#ff6b6b] -> bg-#ff6b6b
      if (value.startsWith('#')) {
        return value; // Keep the full value including #
      }
      // For other values (like calc, %, etc), keep as is
      return value;
    });
  }

  // Main class processing pipeline
  function loadClass(className) {
    if (processedClasses.has(className)) return;
    processedClasses.add(className);

    // Step 1: Process shortcuts
    const config = getConfig();
    if (config.shortcuts?.[className]) {
      const shortcutClasses = config.shortcuts[className].split(/\s+/).filter(Boolean);
      shortcutClasses.forEach(cls => loadClass(cls));
      return;
    }

    // Step 2: Parse CSS (pipe notation should be handled by expandClass)
    const cssRule = parseAndGenerateCSS(className);
    if (cssRule) {
      injectCSS(cssRule);
    }
  }

  // Process an element's classes
  function processElement(element) {
    if (!element.classList?.length) return;

    let classes = element.className.split(/\s+/).filter(Boolean);
    let hasExpansions = false;
    const expandedClasses = [];
    const originalClasses = [...classes]; // Keep track of original classes

    // First pass: expand all classes and collect results
    classes.forEach(className => {
      const expanded = expandClass(className);
      expandedClasses.push(...expanded);
      if (expanded.length > 1 || expanded[0] !== className) {
        hasExpansions = true;
      }
    });

    // Update element's classes if we had expansions
    if (hasExpansions) {
      element.className = expandedClasses.join(' ');

      // Add debug attribute if debug mode is enabled
      if (window.DuxWindDebug) {
        element.setAttribute('data-dw-class', originalClasses.join(' '));
      }
    }

    // Second pass: process all classes (original + expanded) for CSS generation
    expandedClasses.forEach(className => loadClass(className));
  }

  // Expand a single class (shortcuts and pipe notation)
  function expandClass(className) {
    // Clean brackets FIRST for all operations
    const cleanClass = cleanArbitraryValue(className);
    const config = getConfig();

    // Step 1: Expand shortcuts (use original for lookup, but return cleaned)
    if (config.shortcuts?.[className]) {
      const shortcutClasses = config.shortcuts[className].split(/\s+/).filter(Boolean);
      // Recursively expand each shortcut class
      const allExpanded = [];
      shortcutClasses.forEach(cls => {
        allExpanded.push(...expandClass(cls));
      });
      return allExpanded;
    }

    // Step 2: Expand pipe notation (use cleaned class)
    if (cleanClass.includes('|')) {
      return expandPipeNotation(cleanClass);
    }

    // Step 3: Return cleaned class
    return [cleanClass];
  }

  // Expand pipe notation to breakpoint-specific classes
  function expandPipeNotation(className) {
    // Check for hover modifier first (e.g., "hover:p-10|20")
    let hoverPrefix = '';
    let actualClassName = className;

    if (className.startsWith('hover:')) {
      hoverPrefix = 'hover:';
      actualClassName = className.substring(6);
    }

    // Extract the base class and values (e.g., "p-10|20" -> base: "p", values: ["10", "20"])
    // Handle negative values too (e.g., "-m-10|20")
    const match = actualClassName.match(/^(-?)([a-z-]+)-(.+)$/);
    if (!match) {
      return [className];
    }

    const [, negative, base, valuesStr] = match;
    if (!valuesStr.includes('|')) {
      return [className];
    }

    // Clean brackets from values: "10|[200px]" -> "10|200px"
    const cleanValuesStr = valuesStr.replace(/\[([^\]]+)\]/g, '$1');
    const values = cleanValuesStr.split('|');
    const breakpointKeys = Object.keys(getConfig().breakpoints);

    // If values count doesn't match breakpoints count, return original
    if (values.length !== breakpointKeys.length) {
      return [className];
    }

    // Generate breakpoint-specific classes
    const expandedClasses = [];
    breakpointKeys.forEach((breakpoint, index) => {
      // Combine breakpoint, hover modifier if present, and property
      if (hoverPrefix) {
        expandedClasses.push(`${breakpoint}:${hoverPrefix}${negative}${base}-${values[index]}`);
      } else {
        expandedClasses.push(`${breakpoint}:${negative}${base}-${values[index]}`);
      }
    });

    return expandedClasses;
  }

  // Generate CSS rule with modifiers and breakpoints
  function generateCSSRule(className, cssProperty, cssValue, modifiers, breakpoint) {
    let selector = `.${className.replace(/:/g, '\\:').replace(/\./g, '\\.')}`;

    // Add pseudo-class modifiers
    modifiers.forEach(modifier => {
      if (modifier === 'focus-within') {
        selector += ':focus-within';
      } else if (modifier === 'focus-visible') {
        selector += ':focus-visible';
      } else {
        selector += ':' + modifier;
      }
    });

    let cssRule = '';
    if (cssProperty === 'KEYWORD') {
      // Handle keyword classes that already have CSS rule
      cssRule = `${selector} { ${cssValue} }`;
    } else if (Array.isArray(cssProperty)) {
      const declarations = cssProperty.map(prop => `${prop}: ${cssValue}`).join('; ');
      cssRule = `${selector} { ${declarations}; }`;
    } else {
      cssRule = `${selector} { ${cssProperty}: ${cssValue}; }`;
    }

    // Wrap in media query if needed
    if (breakpoint) {
      cssRule = `@media ${getConfig().breakpoints[breakpoint]} { ${cssRule} }`;
    }

    return cssRule;
  }

  // Function to process all elements in a node tree
  function processNodeTree(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      processElement(node);
      // Process all child elements
      const children = node.querySelectorAll('[class]');
      children.forEach(processElement);
    }
  }

  // Parse class name and generate CSS rule
  function parseAndGenerateCSS(className) {
    // Check if class has modifiers (breakpoint or state like hover)
    const parts = className.split(':');
    let breakpoint = null;
    let modifiers = [];
    let actualClass = className;

    // All supported pseudo-states
    const pseudoStates = ['hover', 'focus', 'active', 'disabled', 'visited', 'focus-within', 'focus-visible'];

    // Parse modifiers from left to right
    let classIndex = 0;
    for (let i = 0; i < parts.length - 1; i++) {
      if (getConfig().breakpoints[parts[i]]) {
        breakpoint = parts[i];
        classIndex = i + 1;
      } else if (pseudoStates.includes(parts[i])) {
        modifiers.push(parts[i]);
        classIndex = i + 1;
      } else {
        break;
      }
    }

    // The last part is the actual class
    actualClass = parts.slice(classIndex).join(':');

    // Check for keyword classes FIRST (e.g., flex, hidden, block, text-white)
    if (getConfig().keywords && getConfig().keywords[actualClass]) {
      const rule = getConfig().keywords[actualClass];
      return generateCSSRule(className, 'KEYWORD', rule, modifiers, breakpoint);
    }

    // Try to parse numeric class (e.g., p-10, m-4px, -m-4, opacity-50, etc.)
    const numericMatch = actualClass.match(/^(-?)([a-z-]+)-(\d+)(px|%)?$/);
    if (numericMatch) {
      const [, negative, property, value, unit] = numericMatch;

      // Handle different units and special cases
      let cssValue;
      if (property === 'opacity') {
        // opacity-50 = 0.5, opacity-100 = 1
        cssValue = parseInt(value) / 100;
      } else if (unit === '%') {
        cssValue = `${parseInt(value) * (negative ? -1 : 1)}%`;
      } else if (unit === 'px') {
        cssValue = `${parseInt(value) * (negative ? -1 : 1)}px`;
      } else {
        // Default: multiply by pixelMultiplier
        cssValue = `${parseInt(value) * getConfig().pixelMultiplier * (negative ? -1 : 1)}px`;
      }

      // Get CSS property from config
      const cssProperty = getConfig().properties[property];
      if (!cssProperty) return null;

      return generateCSSRule(className, cssProperty, cssValue, modifiers, breakpoint);
    }

    // Try to parse arbitrary values (e.g., w-200px, bg-#123, etc.)
    const arbitraryMatch = actualClass.match(/^([a-z-]+)-(.+)$/);
    if (arbitraryMatch) {
      const [, property, value] = arbitraryMatch;
      const cssProperty = getConfig().properties[property];

      if (cssProperty) {
        return generateCSSRule(className, cssProperty, value, modifiers, breakpoint);
      }
    }

    return null;
  }


  // Inject CSS into the document
  function injectCSS(css) {
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.setAttribute('data-duxwind', 'true');
      document.head.appendChild(styleElement);

      // Add keyframes for animations
      const keyframes = `@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes pulse {
  50% { opacity: .5; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
`;
      styleElement.textContent = keyframes;
    }

    styleElement.textContent += css + '\n';
  }

  // Initialize - process existing elements and start watching
  function init(options = {}) {
    // Handle legacy clearCache parameter
    if (typeof options === 'boolean') {
      options = { clearCache: options };
    }

    // Default options
    const config = {
      clearCache: true,
      debug: options.debug !== undefined ? options.debug : (window.location.port > 2000),
      ...options
    };

    // Store debug setting globally
    window.DuxWindDebug = config.debug;

    // Always clear cache by default to ensure clean reprocessing
    if (config.clearCache) {
      processedClasses.clear();
    }

    // Process all existing elements with classes
    const elementsWithClasses = document.querySelectorAll('[class]');
    elementsWithClasses.forEach(processElement);

    // Set up MutationObserver to watch for new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        // Handle added nodes
        mutation.addedNodes.forEach(node => {
          processNodeTree(node);
        });

        // Handle class attribute changes
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          processElement(mutation.target);
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // No automatic initialization - must be called manually

  // Generate documentation
  function generateDoc() {
    const doc = [];

    // Header
    doc.push('<div class="duxwind-doc">');
    doc.push('<h2>DuxWind CSS Generator Documentation</h2>');

    // Breakpoints
    doc.push('<h3>Breakpoints</h3>');
    doc.push('<table class="doc-table">');
    doc.push('<tr><th>Prefix</th><th>Media Query</th><th>Example</th></tr>');
    Object.entries(getConfig().breakpoints).forEach(([key, value]) => {
      doc.push(`<tr><td><code>${key}:</code></td><td><code>${value}</code></td><td><code>${key}:p-4</code></td></tr>`);
    });
    doc.push('</table>');

    // Numeric Properties
    doc.push('<h3>Numeric Properties (multiply by 4px)</h3>');
    doc.push('<table class="doc-table">');
    doc.push('<tr><th>Class</th><th>CSS Property</th><th>Example</th><th>Result</th></tr>');
    Object.entries(getConfig().properties).forEach(([key, value]) => {
      const cssProps = Array.isArray(value) ? value.join(', ') : value;
      const example = `${key}-4`;
      const result = Array.isArray(value)
        ? value.map(v => `${v}: 16px`).join('; ')
        : `${value}: 16px`;
      doc.push(`<tr><td><code>${key}-[n]</code></td><td>${cssProps}</td><td><code>${example}</code></td><td><code>${result}</code></td></tr>`);
    });
    doc.push('</table>');

    // Keyword Classes
    doc.push('<h3>Keyword Classes</h3>');
    doc.push('<table class="doc-table">');
    doc.push('<tr><th>Class</th><th>CSS</th></tr>');
    Object.entries(getConfig().keywords).forEach(([key, value]) => {
      doc.push(`<tr><td><code>${key}</code></td><td><code>${value}</code></td></tr>`);
    });
    doc.push('</table>');

    // Shortcuts
    if (getConfig().shortcuts) {
      doc.push('<h3>Shortcut Classes</h3>');
      doc.push('<table class="doc-table">');
      doc.push('<tr><th>Shortcut</th><th>Expands To</th></tr>');
      Object.entries(getConfig().shortcuts).forEach(([key, value]) => {
        doc.push(`<tr><td><code>${key}</code></td><td><code>${value}</code></td></tr>`);
      });
      doc.push('</table>');
    }

    // Special Features
    doc.push('<h3>Special Features</h3>');
    doc.push('<ul>');
    doc.push('<li><strong>Negative values:</strong> Use <code>-</code> prefix (e.g., <code>-mt-4</code> → <code>margin-top: -16px</code>)</li>');
    doc.push('<li><strong>Pixel values:</strong> Use <code>px</code> suffix (e.g., <code>p-20px</code> → <code>padding: 20px</code>)</li>');
    doc.push('<li><strong>Arbitrary values:</strong> Use <code>[value]</code> syntax (e.g., <code>w-[250px]</code>, <code>bg-[#ff6b6b]</code>)</li>');
    doc.push('<li><strong>Opacity utilities:</strong> <code>opacity-1</code> through <code>opacity-100</code> (e.g., <code>opacity-50</code> → <code>opacity: 0.5</code>)</li>');
    doc.push('<li><strong>CSS Grid:</strong> <code>grid</code>, <code>grid-cols-*</code>, <code>col-span-*</code>, <code>row-span-*</code></li>');
    doc.push('<li><strong>Animations:</strong> <code>animate-spin</code>, <code>animate-pulse</code>, <code>animate-bounce</code>, <code>animate-ping</code></li>');
    doc.push('<li><strong>Transitions:</strong> <code>transition</code>, <code>duration-*</code>, <code>ease-*</code> utilities</li>');
    doc.push('<li><strong>All pseudo-states:</strong> <code>hover:</code>, <code>focus:</code>, <code>active:</code>, <code>disabled:</code>, <code>visited:</code>, <code>focus-within:</code>, <code>focus-visible:</code></li>');
    doc.push('<li><strong>Shortcut classes:</strong> Predefined combinations (e.g., <code>btn-primary</code> → multiple classes)</li>');
    doc.push('<li><strong>Pipe notation:</strong> Use <code>|</code> for responsive (e.g., <code>p-10|20</code> → <code>m:p-10 d:p-20</code>)</li>');
    doc.push('<li><strong>Stackable modifiers:</strong> Combine states (e.g., <code>m:hover:focus:p-4</code>, <code>hover:p-4|8</code>)</li>');
    doc.push('<li><strong>Custom properties:</strong> <code>DuxWind.config.properties.fs = \'font-size\'</code></li>');
    doc.push('<li><strong>Custom shortcuts:</strong> <code>DuxWind.config.shortcuts.myBtn = \'p-4 bg-red-500\'</code></li>');
    doc.push('</ul>');

    // Examples
    doc.push('<h3>Examples</h3>');
    doc.push('<pre class="doc-code">');
    doc.push('// Basic utilities');
    doc.push('&lt;div class="p-4"&gt;                    → padding: 16px;');
    doc.push('&lt;div class="opacity-50"&gt;             → opacity: 0.5;');
    doc.push('&lt;div class="flex gap-4"&gt;             → display: flex; gap: 16px;');
    doc.push('');
    doc.push('// Arbitrary values');
    doc.push('&lt;div class="w-[250px]"&gt;             → width: 250px;');
    doc.push('&lt;div class="bg-[#ff6b6b]"&gt;          → background-color: #ff6b6b;');
    doc.push('&lt;div class="h-[calc(100vh-4rem)]"&gt; → height: calc(100vh-4rem);');
    doc.push('');
    doc.push('// CSS Grid');
    doc.push('&lt;div class="grid grid-cols-3"&gt;     → CSS Grid with 3 columns');
    doc.push('&lt;div class="col-span-2"&gt;           → span 2 columns');
    doc.push('');
    doc.push('// Animations &amp; Transitions');
    doc.push('&lt;div class="animate-spin"&gt;          → spinning animation');
    doc.push('&lt;div class="transition duration-300"&gt; → smooth transitions');
    doc.push('');
    doc.push('// Pseudo-states');
    doc.push('&lt;button class="hover:bg-blue-600 focus:ring-2 active:scale-95"&gt;');
    doc.push('&lt;input class="focus:border-blue-500 disabled:opacity-50"&gt;');
    doc.push('');
    doc.push('// Responsive &amp; Shortcuts');
    doc.push('&lt;div class="p-10|20"&gt;               → mobile: 40px, desktop: 80px padding');
    doc.push('&lt;button class="btn-primary"&gt;        → expands to multiple utilities');
    doc.push('&lt;div class="m:hover:p-4 d:focus:p-8"&gt; → stacked responsive + pseudo-states');
    doc.push('</pre>');

    // CSS for documentation
    doc.push('<style>');
    doc.push('.duxwind-doc { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; }');
    doc.push('.duxwind-doc h2 { color: #111; border-bottom: 2px solid #e5e5e5; padding-bottom: 0.5em; }');
    doc.push('.duxwind-doc h3 { color: #333; margin-top: 1.5em; }');
    doc.push('.doc-table { width: 100%; border-collapse: collapse; margin: 1em 0; }');
    doc.push('.doc-table th, .doc-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
    doc.push('.doc-table th { background: #f5f5f5; font-weight: bold; }');
    doc.push('.doc-table tr:nth-child(even) { background: #f9f9f9; }');
    doc.push('.doc-table code { background: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-size: 0.9em; }');
    doc.push('.duxwind-doc code { background: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-family: monospace; }');
    doc.push('.doc-code { background: #f5f5f5; padding: 1em; border-radius: 4px; overflow-x: auto; }');
    doc.push('.duxwind-doc ul { margin: 1em 0; padding-left: 1.5em; }');
    doc.push('.duxwind-doc li { margin: 0.5em 0; }');
    doc.push('</style>');

    doc.push('</div>');

    return doc.join('\n');
  }

  function resetCss() {
    const resetCssRules = `*,*::before,*::after{box-sizing:border-box}
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
details summary{cursor:pointer}
:focus-visible{outline:2px solid #2563eb;outline-offset:2px}
@media (prefers-color-scheme:dark){:root{color-scheme:dark}}`;

    // Create or get reset style element
    let resetStyleElement = document.querySelector('[data-duxwind-reset]');
    if (!resetStyleElement) {
      resetStyleElement = document.createElement('style');
      resetStyleElement.setAttribute('data-duxwind-reset', 'true');
      // Insert before other styles
      document.head.insertBefore(resetStyleElement, document.head.firstChild);
    }

    resetStyleElement.textContent = resetCssRules;
    console.log('DuxWind CSS reset applied');
  }

  // Load default configuration
  function loadDefaultConfig() {
    config = {
      breakpoints: {
        'm': '(max-width: 767px)',
        'd': '(min-width: 768px)'
      },
      pixelMultiplier: 4,
      properties: {
        // Spacing - Padding
        'p': 'padding',
        'pt': 'padding-top',
        'pr': 'padding-right',
        'pb': 'padding-bottom',
        'pl': 'padding-left',
        'px': ['padding-left', 'padding-right'],
        'py': ['padding-top', 'padding-bottom'],
        'ps': 'padding-inline-start',
        'pe': 'padding-inline-end',

        // Spacing - Margin
        'm': 'margin',
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
        'mx': ['margin-left', 'margin-right'],
        'my': ['margin-top', 'margin-bottom'],
        'ms': 'margin-inline-start',
        'me': 'margin-inline-end',

        // Sizing
        'w': 'width',
        'h': 'height',
        'min-w': 'min-width',
        'min-h': 'min-height',
        'max-w': 'max-width',
        'max-h': 'max-height',
        'size': ['width', 'height'],

        // Typography
        'text': 'font-size',
        'leading': 'line-height',
        'tracking': 'letter-spacing',
        'indent': 'text-indent',

        // Flexbox & Grid
        'gap': 'gap',
        'gap-x': 'column-gap',
        'gap-y': 'row-gap',
        'space-x': 'margin-left',
        'space-y': 'margin-top',

        // Layout
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
        'inset': ['top', 'right', 'bottom', 'left'],
        'inset-x': ['left', 'right'],
        'inset-y': ['top', 'bottom'],
        'start': 'inset-inline-start',
        'end': 'inset-inline-end',

        // Borders
        'border': 'border-width',
        'border-t': 'border-top-width',
        'border-r': 'border-right-width',
        'border-b': 'border-bottom-width',
        'border-l': 'border-left-width',
        'border-x': ['border-left-width', 'border-right-width'],
        'border-y': ['border-top-width', 'border-bottom-width'],
        'border-s': 'border-inline-start-width',
        'border-e': 'border-inline-end-width',

        // Border Radius
        'rounded': 'border-radius',
        'rounded-t': ['border-top-left-radius', 'border-top-right-radius'],
        'rounded-r': ['border-top-right-radius', 'border-bottom-right-radius'],
        'rounded-b': ['border-bottom-right-radius', 'border-bottom-left-radius'],
        'rounded-l': ['border-top-left-radius', 'border-bottom-left-radius'],
        'rounded-tl': 'border-top-left-radius',
        'rounded-tr': 'border-top-right-radius',
        'rounded-br': 'border-bottom-right-radius',
        'rounded-bl': 'border-bottom-left-radius',
        'rounded-s': ['border-start-start-radius', 'border-start-end-radius'],
        'rounded-e': ['border-end-start-radius', 'border-end-end-radius'],
        'rounded-ss': 'border-start-start-radius',
        'rounded-se': 'border-start-end-radius',
        'rounded-ee': 'border-end-end-radius',
        'rounded-es': 'border-end-start-radius',

        // Effects
        'ring': 'box-shadow',
        'ring-offset': 'box-shadow',
        'shadow': 'box-shadow',
        'opacity': 'opacity',
        'blur': 'filter',
        'brightness': 'filter',
        'contrast': 'filter',
        'grayscale': 'filter',
        'hue-rotate': 'filter',
        'invert': 'filter',
        'saturate': 'filter',
        'sepia': 'filter',
        'backdrop-blur': 'backdrop-filter',
        'backdrop-brightness': 'backdrop-filter',
        'backdrop-contrast': 'backdrop-filter',
        'backdrop-grayscale': 'backdrop-filter',
        'backdrop-hue-rotate': 'backdrop-filter',
        'backdrop-invert': 'backdrop-filter',
        'backdrop-opacity': 'backdrop-filter',
        'backdrop-saturate': 'backdrop-filter',
        'backdrop-sepia': 'backdrop-filter',

        // Transform
        'scale': 'transform',
        'scale-x': 'transform',
        'scale-y': 'transform',
        'rotate': 'transform',
        'translate-x': 'transform',
        'translate-y': 'transform',
        'skew-x': 'transform',
        'skew-y': 'transform',

        // Transition & Animation
        'duration': 'transition-duration',
        'delay': 'transition-delay',

        // CSS Grid
        'grid-cols': 'grid-template-columns',
        'grid-rows': 'grid-template-rows',
        'col': 'grid-column',
        'col-span': 'grid-column',
        'col-start': 'grid-column-start',
        'col-end': 'grid-column-end',
        'row': 'grid-row',
        'row-span': 'grid-row',
        'row-start': 'grid-row-start',
        'row-end': 'grid-row-end',

        // Animation & Transition
        'animate': 'animation',
        'ease': 'transition-timing-function',

        // Others
        'z': 'z-index',
        'order': 'order',
        'scroll-m': 'scroll-margin',
        'scroll-mt': 'scroll-margin-top',
        'scroll-mr': 'scroll-margin-right',
        'scroll-mb': 'scroll-margin-bottom',
        'scroll-ml': 'scroll-margin-left',
        'scroll-mx': ['scroll-margin-left', 'scroll-margin-right'],
        'scroll-my': ['scroll-margin-top', 'scroll-margin-bottom'],
        'scroll-p': 'scroll-padding',
        'scroll-pt': 'scroll-padding-top',
        'scroll-pr': 'scroll-padding-right',
        'scroll-pb': 'scroll-padding-bottom',
        'scroll-pl': 'scroll-padding-left',
        'scroll-px': ['scroll-padding-left', 'scroll-padding-right'],
        'scroll-py': ['scroll-padding-top', 'scroll-padding-bottom']
      },
      keywords: {
        // Display
        'block': 'display: block',
        'inline-block': 'display: inline-block',
        'inline': 'display: inline',
        'flex': 'display: flex',
        'inline-flex': 'display: inline-flex',
        'grid': 'display: grid',
        'inline-grid': 'display: inline-grid',
        'hidden': 'display: none',
        'table': 'display: table',
        'table-cell': 'display: table-cell',
        'table-row': 'display: table-row',

        // Position
        'static': 'position: static',
        'fixed': 'position: fixed',
        'absolute': 'position: absolute',
        'relative': 'position: relative',
        'sticky': 'position: sticky',

        // Visibility
        'visible': 'visibility: visible',
        'invisible': 'visibility: hidden',

        // Flex direction
        'flex-row': 'flex-direction: row',
        'flex-row-reverse': 'flex-direction: row-reverse',
        'flex-col': 'flex-direction: column',
        'flex-col-reverse': 'flex-direction: column-reverse',

        // Flex wrap
        'flex-wrap': 'flex-wrap: wrap',
        'flex-wrap-reverse': 'flex-wrap: wrap-reverse',
        'flex-nowrap': 'flex-wrap: nowrap',

        // Justify content
        'justify-start': 'justify-content: flex-start',
        'justify-end': 'justify-content: flex-end',
        'justify-center': 'justify-content: center',
        'justify-between': 'justify-content: space-between',
        'justify-around': 'justify-content: space-around',
        'justify-evenly': 'justify-content: space-evenly',

        // Align items
        'items-start': 'align-items: flex-start',
        'items-end': 'align-items: flex-end',
        'items-center': 'align-items: center',
        'items-baseline': 'align-items: baseline',
        'items-stretch': 'align-items: stretch',

        // Align self
        'self-auto': 'align-self: auto',
        'self-start': 'align-self: flex-start',
        'self-end': 'align-self: flex-end',
        'self-center': 'align-self: center',
        'self-stretch': 'align-self: stretch',
        'self-baseline': 'align-self: baseline',

        // Overflow
        'overflow-auto': 'overflow: auto',
        'overflow-hidden': 'overflow: hidden',
        'overflow-visible': 'overflow: visible',
        'overflow-scroll': 'overflow: scroll',
        'overflow-x-auto': 'overflow-x: auto',
        'overflow-y-auto': 'overflow-y: auto',

        // Text alignment
        'text-left': 'text-align: left',
        'text-center': 'text-align: center',
        'text-right': 'text-align: right',
        'text-justify': 'text-align: justify',

        // Font weight
        'font-thin': 'font-weight: 100',
        'font-extralight': 'font-weight: 200',
        'font-light': 'font-weight: 300',
        'font-normal': 'font-weight: 400',
        'font-medium': 'font-weight: 500',
        'font-semibold': 'font-weight: 600',
        'font-bold': 'font-weight: 700',
        'font-extrabold': 'font-weight: 800',
        'font-black': 'font-weight: 900',

        // Text decoration
        'underline': 'text-decoration: underline',
        'line-through': 'text-decoration: line-through',
        'no-underline': 'text-decoration: none',

        // Text transform
        'uppercase': 'text-transform: uppercase',
        'lowercase': 'text-transform: lowercase',
        'capitalize': 'text-transform: capitalize',
        'normal-case': 'text-transform: none',

        // Pointer events
        'pointer-events-none': 'pointer-events: none',
        'pointer-events-auto': 'pointer-events: auto',

        // Cursor
        'cursor-auto': 'cursor: auto',
        'cursor-default': 'cursor: default',
        'cursor-pointer': 'cursor: pointer',
        'cursor-wait': 'cursor: wait',
        'cursor-text': 'cursor: text',
        'cursor-move': 'cursor: move',
        'cursor-not-allowed': 'cursor: not-allowed',

        // Select
        'select-none': 'user-select: none',
        'select-text': 'user-select: text',
        'select-all': 'user-select: all',
        'select-auto': 'user-select: auto',

        // Background colors
        'bg-blue-50': 'background-color: #eff6ff',
        'bg-blue-100': 'background-color: #dbeafe',
        'bg-blue-200': 'background-color: #bfdbfe',
        'bg-blue-500': 'background-color: #3b82f6',
        'bg-blue-600': 'background-color: #2563eb',
        'bg-blue-700': 'background-color: #1d4ed8',
        'bg-blue-800': 'background-color: #1e40af',
        'bg-gray-50': 'background-color: #f9fafb',
        'bg-gray-100': 'background-color: #f3f4f6',
        'bg-gray-600': 'background-color: #4b5563',
        'bg-red-100': 'background-color: #fee2e2',
        'bg-red-500': 'background-color: #ef4444',
        'bg-green-100': 'background-color: #dcfce7',
        'bg-green-200': 'background-color: #bbf7d0',
        'bg-green-300': 'background-color: #86efac',
        'bg-green-500': 'background-color: #22c55e',
        'bg-yellow-500': 'background-color: #eab308',
        'bg-purple-100': 'background-color: #f3e8ff',
        'bg-purple-500': 'background-color: #a855f7',
        'bg-indigo-500': 'background-color: #6366f1',
        'bg-white': 'background-color: #ffffff',
        'bg-transparent': 'background-color: transparent',

        // Text colors
        'text-white': 'color: #ffffff',
        'text-black': 'color: #000000',
        'text-gray-600': 'color: #4b5563',
        'text-blue-500': 'color: #3b82f6',

        // Border utilities
        'border': 'border-width: 1px; border-style: solid; border-color: #d1d5db',
        'border-b': 'border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #d1d5db',
        'border-blue-500': 'border-color: #3b82f6',

        // Ring utilities
        'ring-2': 'box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5)',

        // CSS Grid values
        'grid-cols-1': 'grid-template-columns: repeat(1, minmax(0, 1fr))',
        'grid-cols-2': 'grid-template-columns: repeat(2, minmax(0, 1fr))',
        'grid-cols-3': 'grid-template-columns: repeat(3, minmax(0, 1fr))',
        'grid-cols-4': 'grid-template-columns: repeat(4, minmax(0, 1fr))',
        'grid-cols-6': 'grid-template-columns: repeat(6, minmax(0, 1fr))',
        'grid-cols-12': 'grid-template-columns: repeat(12, minmax(0, 1fr))',
        'grid-rows-1': 'grid-template-rows: repeat(1, minmax(0, 1fr))',
        'grid-rows-2': 'grid-template-rows: repeat(2, minmax(0, 1fr))',
        'grid-rows-3': 'grid-template-rows: repeat(3, minmax(0, 1fr))',
        'col-span-1': 'grid-column: span 1 / span 1',
        'col-span-2': 'grid-column: span 2 / span 2',
        'col-span-3': 'grid-column: span 3 / span 3',
        'col-span-4': 'grid-column: span 4 / span 4',
        'col-span-6': 'grid-column: span 6 / span 6',
        'col-span-full': 'grid-column: 1 / -1',
        'row-span-1': 'grid-row: span 1 / span 1',
        'row-span-2': 'grid-row: span 2 / span 2',
        'row-span-3': 'grid-row: span 3 / span 3',
        'row-span-full': 'grid-row: 1 / -1',

        // Animations
        'animate-none': 'animation: none',
        'animate-spin': 'animation: spin 1s linear infinite',
        'animate-ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'animate-pulse': 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'animate-bounce': 'animation: bounce 1s infinite',

        // Transitions
        'transition': 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        'transition-none': 'transition-property: none',
        'transition-all': 'transition-property: all',
        'transition-colors': 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke',
        'transition-opacity': 'transition-property: opacity',
        'transition-shadow': 'transition-property: box-shadow',
        'transition-transform': 'transition-property: transform',

        // Duration
        'duration-75': 'transition-duration: 75ms',
        'duration-100': 'transition-duration: 100ms',
        'duration-150': 'transition-duration: 150ms',
        'duration-200': 'transition-duration: 200ms',
        'duration-300': 'transition-duration: 300ms',
        'duration-500': 'transition-duration: 500ms',
        'duration-700': 'transition-duration: 700ms',
        'duration-1000': 'transition-duration: 1000ms',

        // Easing
        'ease-linear': 'transition-timing-function: linear',
        'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',

        // Line height
        'leading-tight': 'line-height: 1.25',
        'leading-normal': 'line-height: 1.5',
        'leading-relaxed': 'line-height: 1.625',

        // Spacing utilities
        'space-y-1': 'margin-top: 0.25rem',
        'space-y-2': 'margin-top: 0.5rem',
        'space-y-4': 'margin-top: 1rem',
        'space-y-6': 'margin-top: 1.5rem',

        // Text sizing
        'text-sm': 'font-size: 0.875rem',
        'text-4xl': 'font-size: 2.25rem',

        // Width utilities
        'w-full': 'width: 100%',
        'w-12': 'width: 3rem',
        'max-w-6xl': 'max-width: 72rem',
        'max-w-1200px': 'max-width: 1200px',

        // Height utilities
        'h-12': 'height: 3rem',
        'h-24': 'height: 6rem',
        'min-h-screen': 'min-height: 100vh',

        // Shadow
        'shadow-sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)',

        // Border radius
        'rounded': 'border-radius: 0.25rem',
        'rounded-lg': 'border-radius: 0.5rem',

        // Custom
        'box': 'border: 2px solid #aaa'
      },
      shortcuts: {}
    };
  }

  // Public API
  return {
    loadClass: loadClass,
    generateDoc: generateDoc,
    loadDefaultConfig: loadDefaultConfig,
    resetCss: resetCss,
    init: init,
    get config() {
      return config;
    },
    set config(newConfig) {
      config = newConfig;
    }
  };
})();

// Expose DuxWind globally
window.DuxWind = DuxWind;
