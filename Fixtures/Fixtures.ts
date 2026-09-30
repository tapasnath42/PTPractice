import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/Login";
import {Dashboard} from "../Pages/Dashboard";

type myfixtures = {
    loginPage : LoginPage;
    dashboard : Dashboard;
}

export const test = base.extend<myfixtures>({

    page: async ({page, browserName}, use) => {
        if (browserName === "chromium") {
            const session = await page.context().newCDPSession(page);
            try {
                const {windowId} = await session.send("Browser.getWindowForTarget");
                await session.send("Browser.setWindowBounds", {
                    windowId,
                    bounds: {windowState: "fullscreen"},
                });
            } finally {
                await session.detach();
            }
        }
        await use(page);
    },

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
