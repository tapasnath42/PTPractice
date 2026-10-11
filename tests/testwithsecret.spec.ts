import {test, expect} from "../Fixtures/Fixtures";

import {LoginPage} from "../Pages/Login";
//import dotenv from "dotenv";
//dotenv.config({path: 'ENV/.env'});


test("Login", async ({page, loginPage}) => {
    //const login = new LoginPage(page);
    console.log(process.env.environment as string);
    console.log(process.env.url as string);
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!username || !password) {
        throw new Error("Login requires USERNAME and PASSWORD environment variables.");
    }

    await page.goto(process.env.url as string);
    await loginPage.loginToApplication(username, password);
    await page.waitForTimeout(3000);
});