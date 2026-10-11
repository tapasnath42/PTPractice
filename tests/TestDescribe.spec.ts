import {test, expect} from "@playwright/test";


test.describe("This is the test description.", ()=>{

    test.describe.configure({mode:'default', retries:2});

    test("", async ({page, context})=>{

        // New Window.
        const [newapage] =  await Promise.all([
            context.waitForEvent('page'),
            page.locator("").click(),
        ]);
        newapage.bringToFront();

        // New Alert / Dailog box.

        page.on('dialog', async dailog => {
            dailog.accept();
        });

        // New Frame.
        page.locator("").contentFrame();
        page.frameLocator("").frameLocator("").locator("").click();
        page.frame("")?.locator("").click();

    });

    test("API", async ({request})=>{
        const response = await request.get("uri", ({
            headers:{

            },
            params:{

            },
            data:{

            }
        }));

        const jsonresponsebody = await JSON.parse(await response.text());
        await expect(response.status).toBe(200);
        await expect(response.statusText).toBe("OK");

    });

});