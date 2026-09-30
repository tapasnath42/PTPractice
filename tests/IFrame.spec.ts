import {test, expect} from "../Fixtures/Fixtures";
import {IFrame} from "../Pages/iFramePage";

test("iFrame test 1", async({page})=>{

    await page.goto("https://qaplayground.com/practice/iframes");
    const frame = await page.frameLocator("iframe[title='Basic Iframe']");

    const frame1 = new IFrame(page);
    frame1.sum("", "");
    

});