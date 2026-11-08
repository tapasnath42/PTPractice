import {test, expect} from "@playwright/test";

test("API Test", async ({request})=>{

    const response = await request.get("https://reqres.in/api/users/2", ({

        headers:{

        },
        params:{

        },
        data:{

        }

    }));

    //const responsebody = JSON.parse(await response.text());
    const responsebody = await response.json();
    await expect(response.status()).toBe(200);
    await expect(response.statusText()).toBe("OK");

    console.log(responsebody);
    //console.log(responsebody.support);

});