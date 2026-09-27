import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/Login";
import {Dashboard} from "../Pages/Dashboard";

type myfixtures = {
    loginPage : LoginPage;
    dashboard : Dashboard;
}

export const test = base.extend<myfixtures>({

    loginPage:async({page}, use, testInfo) => {
        const loginPage = new LoginPage(page, testInfo);
        await use(loginPage);
    },

    dashboard: async({page}, use, testInfo) => {
        const dashboard = new Dashboard(page, testInfo);
        await use(dashboard);
    },

});

export {expect} from "@playwright/test";
