import {test, expect} from "@playwright/test";
import {LoginPage} from "../Pages/Login";

import dotenv from "dotenv";
dotenv.config({path: 'ENV/.env.QA'});

test("Access ", async({page}, TestInfo)=>{

    const loginobj = new LoginPage(page, TestInfo);
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    if (!username || !password) {
        throw new Error("Login requires USERNAME and PASSWORD environment variables.");
    }

    await page.goto("https://qaplayground.com/bank/login");
    await loginobj.loginToApplication(username, password);
    await expect(page.locator("")).toBeChecked();
    await expect(page.locator("")).not.toBeChecked();

    await expect(page.locator("")).toBeVisible();
    await expect(page.locator("")).not.toBeVisible();
    

    
});