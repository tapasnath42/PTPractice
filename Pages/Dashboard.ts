import { Locator, Page, TestInfo } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Dashboard extends BasePage {

    private readonly loc1: Locator;
    private readonly loc2: Locator;
    private readonly loc3: Locator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.loc1 = page.locator("");
        this.loc2 = page.locator("");
        this.loc3 = page.locator("");
    }

    async DashboardMethod(): Promise<void> {
        await this.takeAutoScreenshot("dashboard");
    }

}