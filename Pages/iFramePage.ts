import { test, expect, Page, Locator, Selectors } from "@playwright/test";

export class IFrame {

    private readonly page: Page;
    private readonly loc1: Locator;


    constructor(page: Page) {

        this.page = page;
        this.loc1 = page.getByAltText("", { exact: true });


    }

    async switchFrame() {
        this.loc1.frameLocator("");
    }

    async sum(a: number, b: number): Promise<number>;
    async sum(a: string, b: string): Promise<string>;
    async sum(a: any, b: any): Promise<any> {
        return a + b;
    }
}

