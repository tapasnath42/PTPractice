import {Page, TestInfo} from "@playwright/test";


export class BasePage {

    private readonly page:Page;
    private actionCounter = 0;

    constructor(page:Page){
        this.page=page;
    }

    async takeAutoScreenshotOriginal(actionName: string, testInfo: TestInfo): Promise<void> {
        this.actionCounter++;
        const screenshot = await this.page.screenshot({ fullPage: false });
        await testInfo.attach(`${this.actionCounter}-${actionName}`, {
            body: screenshot,
            contentType: 'image/png',
        });
    }


     async takeAutoScreenshot(actionName: string): Promise<void> {
        this.actionCounter++;
        const screenshot = await this.page.screenshot({ fullPage: false });
        await TestInfo.attach(`${this.actionCounter}-${actionName}`, {
            body: screenshot,
            contentType: 'image/png',
        });
    }

}

