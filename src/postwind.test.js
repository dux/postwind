// Runs the inline browser tests from example/index.html via Playwright.
// Tests are defined once in the demo page — this file reads the results.

import { test, expect, beforeAll, afterAll } from 'bun:test';
import { chromium } from 'playwright';

let browser, page, server, testResults;

beforeAll(async () => {
  server = Bun.serve({
    port: 8222,
    async fetch(req) {
      const url = new URL(req.url);
      let path = url.pathname === '/' ? '/example/index.html' : url.pathname;
      const file = Bun.file(import.meta.dir + '/..' + path);
      if (await file.exists()) return new Response(file);
      return new Response('Not found', { status: 404 });
    }
  });

  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  await page.goto('http://localhost:8222/example/index.html', { waitUntil: 'domcontentloaded' });

  // wait for inline tests to finish
  await page.waitForFunction(() => window.__TEST_RESULTS?.done === true, null, { timeout: 15000 });
  testResults = await page.evaluate(() => window.__TEST_RESULTS);
});

afterAll(async () => {
  await browser?.close();
  server?.stop();
});

test('inline browser tests all pass', () => {
  expect(testResults.done).toBe(true);
  expect(testResults.total).toBeGreaterThan(0);

  const failures = testResults.tests.filter(t => !t.pass);
  if (failures.length) {
    const lines = failures.map(f => `  FAIL: ${f.name}${f.detail ? ' (' + f.detail + ')' : ''}`);
    throw new Error(`${failures.length}/${testResults.total} failed:\n${lines.join('\n')}`);
  }

  expect(testResults.passed).toBe(testResults.total);
  console.log(`  ${testResults.passed}/${testResults.total} browser tests passed`);
  for (const t of testResults.tests) {
    console.log(`    ${t.pass ? 'PASS' : 'FAIL'} ${t.name}`);
  }
});

test('no JS errors on page load', async () => {
  const freshPage = await browser.newPage();
  const errors = [];
  freshPage.on('pageerror', err => errors.push(err.message));
  await freshPage.goto('http://localhost:8222/example/index.html', { waitUntil: 'domcontentloaded' });
  await freshPage.waitForFunction(() => window.__TEST_RESULTS?.done === true, null, { timeout: 15000 });
  await freshPage.close();
  expect(errors).toEqual([]);
});
