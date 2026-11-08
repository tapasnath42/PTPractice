// 

import {test, expect} from "@playwright/test";

test("test 1", async({page})=>{

    await page.getByTestId("").click();
    await page.getByTestId("").dblclick();

    // click with control.
    await page.getByRole('textbox',{name: ''}).click({modifiers:["Control"]});

    // Right Click
    await page.getByAltText("").click({button: 'right'});
    


});