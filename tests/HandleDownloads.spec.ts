import {test, expect} from "../Fixtures/Fixtures";

test("Handle File Download", async ({page})=> {

    await page.goto("https://qaplayground.com/practice/file-upload");

    // Using SetInputFiles for File Upload 
    await page.setInputFiles("//input[@id='fu-single-input']", "data/login-test-data.xlsx");
    await page.waitForTimeout(3000);


    // Using Download Event for download.
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("").click(),
    ]);
    await download.saveAs("path of the location.");    
    await download.saveAs("")+download.suggestedFilename();
    

});
