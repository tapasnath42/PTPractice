import {Page, Locator, TestInfo} from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    private readonly username : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;

    constructor(page:Page, testInfo:TestInfo){
        super(page, testInfo);
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
        await this.takeAutoScreenshot("username-filled");
        await this.password.fill(password);
        await this.takeAutoScreenshot("password-filled");
        await this.loginButton.click();
        await this.takeAutoScreenshot("login-submitted");
    }



}