import {test, expect} from "../Fixtures/Fixtures";

import {LoginPage} from "../Pages/Login";
//import dotenv from "dotenv";
//dotenv.config({path: 'ENV/.env'});


test("Login", async ({page, loginPage}) => {
    //const login = new LoginPage(page);
    await console.log(process.env.environment as string);
    await page.goto(process.env.url as string);
    await loginPage.loginToApplication(process.env.username as string, process.env.password as string);
    await page.waitForTimeout(3000);
});