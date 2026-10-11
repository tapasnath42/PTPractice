import type {Page} from "@playwright/test";
import {test as base, expect} from "./Fixtures";

type iframeFixture= {
    iframe : Page;
}

export const test = base.extend<iframeFixture>({

    iframe:async ({page}, use)=>{
        await page.goto("https://qaplayground.com/practice/iframes");
        await use(page);
    },
});

export {expect};