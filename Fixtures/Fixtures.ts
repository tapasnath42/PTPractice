import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/Login";
import {Dashboard} from "../Pages/Dashboard";

type myfixtures = {
    loginPage : LoginPage;
    dashboard : Dashboard;
}

export const test = base.extend<myfixtures>({

    loginPage:async({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboard: async({page}, use) => {
        const dashboard = new Dashboard(page);
        await use(dashboard);
    },

});

export {expect} from "@playwright/test";
