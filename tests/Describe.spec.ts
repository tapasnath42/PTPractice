import {test, expect} from "../Fixtures/Fixtures";

// we can also mention the tag in the describe block as well.
// As this will consider all the tests under smoke. 
test.describe("", {tag: '@smoke'}, () => {

    test.beforeEach("This is before each", async({page})=>{
            console.log("This is before each.");
    });

    // we can also mention the tag in particular test case.
    test("test1", {tag: '@smoke'}, ({page})=> {
        console.log("this is test 1");
    });

    test("test2", ({page})=> {
        console.log("this is test 2");

        page.on('dialog', async dailog => {
            await dailog.accept();
            const res:boolean = await dailog.message().includes("");
            await expect(res).toBeTruthy();
        });
    });

    test.afterEach("This is before each", async({page})=>{
            console.log("This is after each.");
    });

    // CLI command to run the using grep [--grep (Global Regular Expression Print):]
    // npx playwright test --grep @smoke

    


});