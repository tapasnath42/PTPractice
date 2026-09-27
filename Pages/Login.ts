import {test, expect, Page, Locator} from "@playwright/test";

export class LoginPage{

    private readonly page : Page;
    private readonly username : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;

    constructor(page:Page){
        this.page=page;
        this.username = page.getByPlaceholder("Enter username");
        this.password = page.getByTestId("login-password-input");
        this.loginButton = page.getByRole('button', {name: 'Sign In'});
    }

    /**
     * This method will login into the application.
     * @param username : Username
     * @param password : Password
     */
    async loginToApplication(username:string, password:string):Promise<void>{
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }



}