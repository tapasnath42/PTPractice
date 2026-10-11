import {test, expect} from "../Fixtures/Fixtures";

test("Handling Multiple Elements", async({page})=> {

    await page.goto('https://qaplayground.com/practice/dropdowns');
    const locators = await page.locator("//select[@id='countrySelect']/option").all();

    // for(let i=0; i<locators.length; i++){
    //     const str =  await locators[i].innerText();
        
    // }

    const locators1 = await page.locator("//select[@id='countrySelect']/option");
    const loccount = await locators1.count();
    for(let i=0; i<loccount; i++){
        console.log(await locators1.nth(i).innerText());
    }

    await page.getByRole('combobox', {name: 'country'}).selectOption({label:"Argentina"});
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', {name: 'country'}).selectOption({value:"india"});
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', {name: 'country'}).selectOption({index:3});
    await page.waitForTimeout(2000);
    /*
    page.locator("").inputValue();

    await expect(page.locator("").inputValue()).toBe("");
    await expect(page.locator("").inputValue()).toContain("");
    await expect(page.locator("")).toContainText("");

    await expect(page).toHaveTitle("");
    await expect(page).toHaveURL("");

    await expect(page.locator("").inputValue()).toContain("");
    await expect(page.locator("")).toHaveValue("");
    */
    await expect(locators1).toHaveValues(['Select Country','Argentina','India','Japan','United States']);
    
    await page.getByLabel("").contentFrame();
    await page.getByLabel("").frameLocator("").frameLocator("");
    
    

});