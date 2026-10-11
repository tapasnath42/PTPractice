import {test, expect} from '@playwright/test';

test('Mock API' , async ({page})=>{

    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route => {

        const json = [{name: 'PlaywrightByDeepk' , id: 555},
                      {name: 'TypeScriptByDeepk' , id: 556},
                      {name: 'APITestingByDeepk' , id: 557},
        ];
        await route.fulfill({json});
    })
    
    await page.goto('https://demo.playwright.dev/api-mocking/');
    await page.waitForTimeout(6000);
});