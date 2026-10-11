import {test, expect} from "@playwright/test";

test.describe("This is the test description.", async () =>{

    test.describe.configure({mode:'default'});

    test("handle test", async ({page})=>{
        await page.on('dialog', async dailog=>{
            await dailog.accept();
            await dailog.message();
        });
    });

    test("handle frame", async({page})=>{
        await page.locator("").contentFrame();
        await page.locator("").frameLocator("");
        await page.frame("");
    });

    test("handle new page", async({page, context})=>{
        const [newpage] = await Promise.all([
            context.waitForEvent('page'),
            await page.locator("").click(),
        ]);
        await newpage.waitForLoadState();
        await newpage.bringToFront();        
    });

    test("Handling multiple locators.", async({page})=>{
            const loc = page.locator("");
        for(let i=0; i<await loc.count(); i++){
                loc.nth(i).innerText();
        }

        const ele = await page.locator("").all();
        for(let i=0; i<ele.length; i++){
            let text = await ele[i].innerText();
        }

    });




});