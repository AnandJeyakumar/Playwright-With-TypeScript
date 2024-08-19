import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";
import loginPage from "../pages/loginPage";
import { log } from "console";
import { abort } from "process";


test("test",async ({page})=>{

    // Login
    const login = new loginPage(page);
   
    await  login.gotoLoginPage()
    await  login.login('pavanol' , 'test@123')
    await page.waitForTimeout(3000)
    await abort()

    // HomePage

    await page.waitForSelector(".hrefch")
    const products = await page.$$(".hrefch")
    await expect(products).toHaveLength(9)

    console.log("The total Number of Products is " , await products.length)

    // Logout
    await page.click("#logout2")

    await page.waitForSelector("#login2")

    await expect(await page.locator("#login2")).toBeVisible()
    await page.waitForTimeout(3000)

})

