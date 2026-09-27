import {Locator, Page, test} from "@playwright/test";

export class Dashboard{

    private readonly loc1 : Locator;
    private readonly loc2 : Locator;
    private readonly loc3 : Locator;

    constructor(page:Page){
        this.loc1 = page.locator("");
        this.loc2 = page.locator("");
        this.loc3 = page.locator("");
    }

    async DashboardMethod(){
        
    }

}