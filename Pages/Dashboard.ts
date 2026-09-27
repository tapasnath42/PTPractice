import {Locator, Page, test} from "@playwright/test";
import { BasePage } from "./BasePage";

export class Dashboard extends BasePage{

    private readonly loc1 : Locator;
    private readonly loc2 : Locator;
    private readonly loc3 : Locator;

    constructor(page:Page){
        super(page);
        this.loc1 = page.locator("");
        this.loc2 = page.locator("");
        this.loc3 = page.locator("");
    }

    async DashboardMethod(){

        this.takeAutoScreenshot("fdf", testinfo);
        
    }

}