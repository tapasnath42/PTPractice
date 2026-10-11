import {test, expect} from "@playwright/test";

test("api test", async ({request})=>{

    const response = await request.post("");
    const jsonresponse = JSON.parse(await response.text());
    

});