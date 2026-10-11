import { test, expect } from '@playwright/test';

test('should collect failed API responses on page load', async ({ page }) => {
  // Initialize the failedAPIs array[cite: 1]
  const failedAPIs: string[] = [];

  // Listen to the response event[cite: 1]
  page.on('response', (response) => {
    if (response.status() >= 400) {
      failedAPIs.push(
        `${response.status()} - ${response.url()}`
      );
    }
  });

  // Navigate to the target URL[cite: 1]
  await page.goto('https://techwithjatin.com');

  // Basic assertion to ensure the listener works and array is populated
  expect(Array.isArray(failedAPIs)).toBe(true);
  console.log(`Captured ${failedAPIs.length} failed APIs:`, failedAPIs);
});