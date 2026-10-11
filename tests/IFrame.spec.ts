
import {test, expect} from "../Fixtures/iframeFixture";


test.skip("IFR_001", async({page, iframe})=>{

   // await page.goto("https://qaplayground.com/practice/iframes");
    const frame = await page.frameLocator("iframe[title='Basic Iframe']");
    await frame.getByPlaceholder("Enter your name").fill("Tapas");
    await frame.getByRole("button", {name: 'Submit'}).click();

    await expect(page.locator("//span[@id='result-s01']")).toContainText("Submitted");
    await expect(page.locator("//iframe[@title='Basic Iframe']/../../following-sibling::div")).toContainText("Submitted");
});

test("IFR_002", async ({page, iframe})=> {
    const frame = await page.frameLocator("iframe[data-testid='iframe-form']");
    await frame.getByRole('combobox', {name:'language'}).selectOption("JavaScript");
    await frame.getByRole('checkbox', {name:'agree'}).check();
    await frame.getByRole('button', {name: 'Save Preferences'}).click();
    await expect(frame.locator("[id='result']")).toContainText("javascript + terms accepted");
});



