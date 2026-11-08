import {test, expect} from "../Fixtures/Fixtures";

test("Login", async ({page, loginPage}) => {
    const url = process.env.url;
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!url || !username || !password) {
        throw new Error("Login requires url, USERNAME, and PASSWORD environment variables.");
    }

    await page.goto(url);
    await loginPage.loginToApplication(username, password);
    await page.waitForTimeout(3000);
});