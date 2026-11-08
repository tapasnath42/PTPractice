import { test, expect } from "@playwright/test";

test("", async ({ page }) => {

    await page.getByRole('button', { name: 'signin' }).filter({ hasText: 'text' }).click();

    await page.getByLabel("").waitFor({ state: 'visible' });

    (await page.getByLabel("").inputValue()).includes("");

    // Filter has : has, hasnot, hastext, hasnottext, visible.

    const texts: string[] = await page.getByTitle("").allTextContents();
    console.log(texts);

    page.locator("").getAttribute("");
    page.locator("").getAttribute("");

    // 1. Define your locator
    const button = page.locator('#submit-button');

    // 2. Evaluate the computed style of the element
    const backgroundColor = await button.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    console.log(backgroundColor);


});