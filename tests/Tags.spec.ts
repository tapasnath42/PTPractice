import { test, expect } from '@playwright/test';

// Single tag on an individual test
test('login page functionality', { tag: '@smoke' }, async ({ page }) => {
  // Test code here
});

// Multiple tags on an individual test
test('checkout process', { tag: ['@regression', '@critical'] }, async ({ page }) => {
  // Test code here
});

// Tagging an entire suite (applies to all tests inside the group)
test.describe('billing module', { tag: '@billing' }, () => {
  test('invoice generation', async ({ page }) => {
    // Inherits @billing tag
  });
});
