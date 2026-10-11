import {Page, Locator, TestInfo} from "@playwright/test";

export class BasePage {

    protected readonly page:Page;
    protected readonly testInfo:TestInfo;
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

    async click(selector: string | Locator): Promise<void> {
        const element = typeof selector === "string" ? this.page.locator(selector) : selector;
        await element.click();
    }

}

