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
  const styleStore = {};
  return {
    style: {},
    classList: {
      add(cls) {},
      remove(cls) {},
      contains(cls) { return false; }
    },
    __getStyles() {
      return { ...this.style };
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

  test('updateContainerQueries toggles payload styles based on width', () => {
    const element = createTestElement();
    const queries = [{ token: 'max-320:flex', mode: 'max', threshold: 320, payload: 'flex' }];

    try {
      updateContainerQueries(element, queries);
      const observer = MockResizeObserver.instances.at(-1);
      expect(observer).toBeDefined();

      observer.fire(300);
      expect(element.__getStyles()).toHaveProperty('display', 'flex');

      observer.fire(400);
      expect(element.__getStyles().display).toBe('');
    } finally {
      teardownContainerQueries(element);
    }
  });

  test('resize observer evaluations happen immediately', () => {
    const element = createTestElement();
    const queries = [{ token: 'max-320:flex', mode: 'max', threshold: 320, payload: 'flex' }];

    const originalSetTimeout = global.setTimeout;
    const timers = [];

    global.setTimeout = (fn, delay) => {
      const timer = { fn, delay, cleared: false };
      timers.push(timer);
      return timer;
    };

    try {
      updateContainerQueries(element, queries);
      const observer = MockResizeObserver.instances.at(-1);

      observer.fire(300);
      expect(element.__getStyles()).toHaveProperty('display', 'flex');

      observer.fire(400);
      expect(element.__getStyles().display).toBe('');

      // Should not have any throttling timers
      expect(timers).toHaveLength(0);
    } finally {
      global.setTimeout = originalSetTimeout;
      teardownContainerQueries(element);
    }
  });
});
