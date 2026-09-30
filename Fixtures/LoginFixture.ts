import type {Page} from "@playwright/test";
import {test as base, expect} from "./Fixtures";

type LoginFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<LoginFixtures>({
    loggedInPage: async ({page, loginPage}, use) => {
        const url = process.env.url;
        const username = process.env.loginsusername;
        const password = process.env.loginpassword;

        if (!url || !username || !password) {
            throw new Error("Login requires url, loginsusername, and loginpassword environment variables.");
        }

        await page.goto(url);
        await loginPage.loginToApplication(username, password);
        await use(page);
    },
});

export {expect};