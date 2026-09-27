import {Page, TestInfo} from "@playwright/test";


export class BasePage {

    private readonly page:Page;
    private readonly testInfo:TestInfo;
    private actionCounter = 0;

    constructor(page:Page, testInfo:TestInfo){
        this.page=page;
        this.testInfo=testInfo;
    }

    async takeAutoScreenshot(actionName: string): Promise<void> {
        this.actionCounter++;
        const screenshot = await this.page.screenshot({fullPage: false});
        await this.testInfo.attach(`${this.actionCounter}-${actionName}`, {
            body: screenshot,
            contentType: "image/png",
        });
    }
}

