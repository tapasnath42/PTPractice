// Import your custom test object
import { test, expect } from '../Fixtures/DataFixtures';

test('Login with user payload from fixture', async ({ page, userPayload }) => {
  // Use the fixture data in your test steps
  await page.goto('https://example.com');
  await page.getByLabel('Username').fill(userPayload.username);
  
  console.log(`Logging in as a user with the role: ${userPayload.role}`);
});

test('Search using array data from fixture', async ({ page, searchQueries, context }) => {
  await page.goto('https://example.com');
  
  // Access items from the array fixture
  await page.getByRole('searchbox').fill(searchQueries[0]); 
  await page.keyboard.press('Enter');

  const [newPage] = await Promise.all([
 context.waitForEvent('page'),
 page.click('#open-new-tab'),
]);
await newPage.waitForLoadState();
newPage.bringToFront();


});
