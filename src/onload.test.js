import { describe, test, expect, beforeEach } from 'bun:test';

const CSS_STORE_KEY = '__postwindCSSStore';
const cssStore = global[CSS_STORE_KEY] || { value: '' };
global[CSS_STORE_KEY] = cssStore;

let PostWind = null;
let currentElement = null;

function createMockElement(initialClass = '') {
  const tokenSet = new Set(initialClass.split(/\s+/).filter(Boolean));
  let classAttr = Array.from(tokenSet).join(' ');

  return {
    nodeType: 1,
    children: [],
    appendChild(child) {
      this.children.push(child);
    },
    classList: {
      add(...classes) {
        classes.filter(Boolean).forEach(cls => tokenSet.add(cls));
        classAttr = Array.from(tokenSet).join(' ');
      },
      remove(cls) {
        tokenSet.delete(cls);
        classAttr = Array.from(tokenSet).join(' ');
      },
      contains(cls) {
        return tokenSet.has(cls);
      }
    },
    getAttribute(name) {
      if (name === 'class') return classAttr;
      return null;
    },
    setAttribute(name, value) {
      if (name !== 'class') return;
      classAttr = value || '';
      tokenSet.clear();
      classAttr.split(/\s+/).filter(Boolean).forEach(cls => tokenSet.add(cls));
    },
    querySelectorAll: () => []
  };
}

function setupDOM() {
  currentElement = null;

  global.window = {
    innerWidth: 1024,
    PostWind: null,
    PostWindDebug: false,
    location: { port: 3000 }
  };

  global.requestAnimationFrame = (cb) => cb();

  global.MutationObserver = class MutationObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {}
    disconnect() {}
  };

  global.ResizeObserver = class ResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  global.Node = { ELEMENT_NODE: 1 };

  global.document = {
    readyState: 'complete',
    head: {
      appendChild: () => {},
      insertBefore: () => {},
      firstChild: null
    },
    body: {
      classList: { add() {}, remove() {} },
      appendChild: () => {},
      querySelectorAll: () => []
    },
    createElement: () => ({
      setAttribute: () => {},
      get textContent() { return cssStore.value; },
      set textContent(value) { cssStore.value += value; },
      appendChild: () => {}
    }),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: (selector) => {
      if (selector === '[class]' && currentElement) {
        return [currentElement];
      }
      if (selector === '[class*="visible:"]' && currentElement?.getAttribute('class')?.includes('visible:')) {
        return [currentElement];
      }
      return [];
    },
    addEventListener: () => {}
  };
}

beforeEach(async () => {
  setupDOM();
  cssStore.value = '';

  if (!PostWind) {
    const mod = await import('../src/lib.js');
    PostWind = mod.default;
  }

  PostWind.loadDefaultConfig();
});

describe('onload: filter', () => {
  test('defers class application to the next tick', async () => {
    const element = createMockElement('dialog onload:d:opened');
    currentElement = element;

    PostWind.init({ debug: false, clearCache: true });

    expect(element.getAttribute('class')).toBe('dialog');
    expect(element.classList.contains('d:opened')).toBe(false);

    await new Promise(resolve => setTimeout(resolve, 200));

    expect(element.classList.contains('d:opened')).toBe(true);
    expect(element.getAttribute('class').split(/\s+/)).toContain('d:opened');
  });
});
