import {test, expect, Locator} from "../Fixtures/Fixtures";
import {LoginPage} from "../Pages/Login";

test("Handle Dynamic Waits1", async({page, loginPage}, testInfo)=>{

    await page.goto("https://qaplayground.com/practice/dynamic-waits");
    await page.getByRole('button', {name: '▶ Trigger Delay', exact:true}).click({timeout:3000});

    const loc:string = "//div[@data-testid='dw-delayed-result']";
    const delayedResult = page.locator(loc);
    await delayedResult.waitFor({state: 'visible', timeout: 3000});
    await expect(delayedResult).toContainText("I appeared after a 2-second delay");
    await page.waitForSelector("[data-testid='dw-delayed-result']", {state:'visible', timeout:3000});
    
    /*
    const log = new LoginPage(page, testInfo);
    log.loginToApplication("", "");
    loginPage.loginToApplication("", "");
    */

});