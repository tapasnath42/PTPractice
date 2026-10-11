import type {Page} from "@playwright/test";
import {test as base, expect} from "./Fixtures";

type ApplicationFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<ApplicationFixtures>({
    loggedInPage: async ({page, loginPage}, use) => {
        const url = process.env.url;
        const username = process.env.USERNAME;
        const password = process.env.PASSWORD;

        if (!url || !username || !password) {
            throw new Error("Login requires url, USERNAME, and PASSWORD environment variables.");
        }

        await page.goto(url);
        await loginPage.loginToApplication(username, password);
        await use(page);
    },
});

export {expect};
