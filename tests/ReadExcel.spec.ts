import { test, expect } from "@playwright/test";
import * as xlsx from "xlsx";
import path from "path";

const userDataFile = path.join(__dirname, "../data/login-test-data.xlsx");

interface i1 {
    username: string;
    password: string;
}

test("read excel data", async ({ page }) => {

    // const workbook = xlsx.readFile(userDataFile);
    // const worksheet = workbook.Sheets["LoginData"];
    // const xlsxtojson = xlsx.utils.sheet_to_json<i1>(worksheet);
    // console.log(xlsxtojson);


    // for(let i=0; i<xlsxtojson.length; i++){
    //     await page.locator("").fill("");
    // }

  //  await page.locator("").isVisible();

    interface i1 {

    }

    const user = {
        name: 'name1',
        age: 20,
    }

    user.name = "name2"

    console.log(user.name);


    for (var i = 0; i < 3; i++) { }
    console.log(i);


});

function add() {

}

class abc {

    abcmethod(a: number, b: number): number {
        return a + b;
    }

}

const sum = (a: number, b: number): number => {
        return a + b;
    }

    const sum1 = (a: number, b: number): number => {
        return a + b;
    }

const nn = new abc;
console.log(nn.abcmethod(2, 3));
sum1(1,2);

//===========================================================
//A callback function is a function passed as an argument to another function, 
// which is then executed (or "called back") inside that outer function to 
// complete an action


// 1. Define the callback function
function displayResult(sum) {
  console.log("The result is: " + sum);
}

// 2. Define the outer function that accepts the callback
function calculateSum(num1, num2, myCallback) {
  let total = num1 + num2;
  myCallback(total); // 3. Execute the callback here
}

// 4. Pass the function as an argument (Note: NO parentheses when passing it)
calculateSum(5, 10, displayResult); 
// Output: The result is: 15
