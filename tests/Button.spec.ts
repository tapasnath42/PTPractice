import {test, expect} from "@playwright/test";

test("", async({page})=>{

    //Button1 
    if(!await page.locator("").isDisabled()){

    }

    //Button2
    if(!await page.locator("").isDisabled()){
        
    }

    //Button3
    if(!await page.locator("").isDisabled()){
        
    }

    if(await page.locator("").isEnabled()){
        
    }

    await page.locator("").waitFor({state:'visible', timeout:2000});
    await page.locator("").click({timeout:2000});

    await expect(page.locator("")).toBeEnabled();
    await expect(page.locator("")).toBeDisabled();

    await expect(page.locator("")).toBeVisible();
    await expect(page.locator("")).toBeEmpty();

        

});