import type {Page} from "@playwright/test";
import {test as base, expect} from "./Fixtures";

type dailogfixture = {
    dailogfixtureObj : Page;
}

export const test = base.extend<dailogfixture>({

    dailogfixtureObj:async ({page}, use)=>{
        await page.goto("https://qaplayground.com/practice/alerts-dialogs");
        await use(page);
    }

});

export {expect};
