import { test } from '@playwright/test';
test.describe('Product search', () => {
 test.describe.configure({ mode: 'parallel' }); // tests may spread across workers
 test('search by name', async ({ page }) => { /* ... */ });
 test('search by category', async ({ page }) => { /* ... */ });
});
test.describe('Checkout flow', () => {
 test.describe.configure({ mode: 'serial' }); // run in order, in one worker
 test('add to cart', async ({ page }) => { /* ... */ });
 test('pay', async ({ page }) => { /* ... */ });
 test('verify order', async ({ page }) => { /* ... */ });
});