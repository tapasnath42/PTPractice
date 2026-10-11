import { test as base } from '@playwright/test';

// Define the shape of your data fixture (Optional: for TypeScript users)
type DataFixtures = {
  userPayload: { username: string; role: string };
  searchQueries: string[];
};

// Extend the base test to create your custom fixtures
export const test = base.extend<DataFixtures>({
  // Define a fixture that returns an object
  userPayload: async ({}, use) => {
    const data = { username: 'test_admin', role: 'Administrator' };
    await use(data); // Pass the data to the test
  },

  // Define a fixture that returns an array
  searchQueries: async ({}, use) => {
    const list = ['playwright', 'automation', 'fixtures'];
    await use(list);
  }
});

export { expect } from '@playwright/test';
