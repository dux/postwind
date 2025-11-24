import { describe, test, expect, beforeEach } from 'bun:test';

class MockResizeObserver {
  static instances = [];

  constructor(callback) {
    this.callback = callback;
    MockResizeObserver.instances.push(this);
  }

  observe(element) {
    this.element = element;
  }

  unobserve() {}
  disconnect() {}

  fire(width) {
    if (this.callback) {
      this.callback([{ target: this.element, contentRect: { width } }]);
    }
  }
}

global.ResizeObserver = MockResizeObserver;

import { splitContainerQueryClasses, updateContainerQueries, teardownContainerQueries } from './container-query.js';

beforeEach(() => {
  MockResizeObserver.instances = [];
});

function createTestElement() {
  const tokens = new Set();
  return {
    classList: {
      add(cls) { tokens.add(cls); },
      remove(cls) { tokens.delete(cls); },
      contains(cls) { return tokens.has(cls); }
    },
    __getClasses() {
      return Array.from(tokens);
    }
  };
}

describe('Container query helpers', () => {
  test('splitContainerQueryClasses isolates inline query tokens', () => {
    const { regularClasses, containerQueries } = splitContainerQueryClasses(['p-4', 'max-320:flex', 'text-lg']);

    expect(regularClasses).toEqual(['p-4', 'text-lg']);
    expect(containerQueries).toHaveLength(1);
    expect(containerQueries[0]).toMatchObject({
      token: 'max-320:flex',
      mode: 'max',
      threshold: 320,
      payload: 'flex'
    });
  });

  test('updateContainerQueries toggles payload class based on width', () => {
    const element = createTestElement();
    const queries = [{ token: 'max-320:flex', mode: 'max', threshold: 320, payload: 'flex' }];

    const originalNow = Date.now;
    let fakeNow = 1000;
    Date.now = () => fakeNow;

    try {
      updateContainerQueries(element, queries);
      const observer = MockResizeObserver.instances.at(-1);
      expect(observer).toBeDefined();

      observer.fire(300);
      expect(element.__getClasses()).toContain('flex');

      fakeNow += 400;
      observer.fire(400);
      expect(element.__getClasses()).not.toContain('flex');
    } finally {
      Date.now = originalNow;
      teardownContainerQueries(element);
    }
  });

  test('resize observer evaluations are throttled to 300ms', () => {
    const element = createTestElement();
    const queries = [{ token: 'max-320:flex', mode: 'max', threshold: 320, payload: 'flex' }];

    const originalNow = Date.now;
    let fakeNow = 0;
    Date.now = () => fakeNow;

    const originalSetTimeout = global.setTimeout;
    const originalClearTimeout = global.clearTimeout;
    const timers = [];

    global.setTimeout = (fn, delay) => {
      const timer = { fn, delay, cleared: false };
      timers.push(timer);
      return timer;
    };
    global.clearTimeout = handle => {
      if (handle) {
        handle.cleared = true;
      }
    };

    try {
      updateContainerQueries(element, queries);
      const observer = MockResizeObserver.instances.at(-1);

      observer.fire(300);
      expect(element.__getClasses()).toContain('flex');

      fakeNow = 100;
      observer.fire(400);
      expect(element.__getClasses()).toContain('flex');
      expect(timers).toHaveLength(1);
      expect(timers[0].delay).toBe(200);

      fakeNow = 350;
      timers[0].fn();
      expect(element.__getClasses()).not.toContain('flex');
    } finally {
      Date.now = originalNow;
      global.setTimeout = originalSetTimeout;
      global.clearTimeout = originalClearTimeout;
      teardownContainerQueries(element);
    }
  });
});
