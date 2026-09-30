import {test, expect} from "../Fixtures/LoginFixture";

test("successful login hides the login form", async ({loggedInPage}) => {
    await expect(loggedInPage.getByPlaceholder("Enter username")).toBeHidden();
});