import {test, expect} from "../Fixtures/dailogfixture"


test("Dailog box", async({context, page, dailogfixtureObj}) => {

    //await page.goto("https://qaplayground.com/practice/alerts-dialogs");
    
    page.on('dialog', async dailog => {
        await page.getByRole('button', {name: 'Open Info Dialog'}).click();
        const bb = await dailog.message();
        console.log(dailog.type());
        expect(dailog.message()).toContain("Your session will expire in 30 minutes.");
    });

    // Dailog box.
    page.on('dialog', async dailog => {
        await page.locator("").click();
        await dailog.accept();
        console.log(await dailog.type());
    });

    // New page/ window
    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("").click(),
    ]);

    newpage.bringToFront();
    expect(newpage).toHaveTitle("");
    expect (newpage).toHaveURL("");


    // Handling Pop Up
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click(""),
    ]);

    

});