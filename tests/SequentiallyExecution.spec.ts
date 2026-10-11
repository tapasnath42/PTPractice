import { test, expect } from '@playwright/test';

// Option A: "default" mode runs tests in order. If one fails, the rest still run.
test.describe.configure({ mode: 'default' });

// Option B: "serial" mode runs tests in order, but if one fails, all subsequent tests are skipped.
// test.describe.configure({ mode: 'serial' });

test('runs first', async ({ page }) => {
  // ...
});

test('runs second', async ({ page }) => {

    
  // ...
});
