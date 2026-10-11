import {test, expect} from "@playwright/test";
import {LoginPage} from "../Pages/Login";

import dotenv from "dotenv";
dotenv.config({path: 'ENV/.env.QA'});

test("Access ", async({page}, TestInfo)=>{

    const loginobj = new LoginPage(page, TestInfo);

    await page.goto("https://qaplayground.com/bank/login");
    await loginobj.loginToApplication(process.env.loginsusername as string, process.env.loginpassword as string);
    await expect(page.locator("")).toBeChecked();
    await expect(page.locator("")).not.toBeChecked();

    await expect(page.locator("")).toBeVisible();
    await expect(page.locator("")).not.toBeVisible();
    

    
});