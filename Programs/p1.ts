const person={
    firstname:"John",
    lastname:"Cena",
    greet:function(){
        console.log(`this is the value : ${this.firstname}`);
    }
}

import {test as base} from "@playwright/test"; 
import {LoginPage} from "../Pages/Login";

type examFixture={
    loginobj : LoginPage,
}

export const test = base.extend<examFixture>({

    loginobj:async({page}, use, testInfo)=>{
        const loginobj = new LoginPage(page, testInfo);
        await use(loginobj);
    }
});
