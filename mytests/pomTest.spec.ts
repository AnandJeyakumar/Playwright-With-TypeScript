import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";
import loginPage from "../pages/loginPage";
import { log } from "console";
import { abort } from "process";
import HomePage from "../pages/homepage";
import cartPage from "../pages/cartPage";




test("test",async ({page})=>{

    // Login
    const login = new loginPage(page);
    await  login.gotoLoginPage()
    await  login.login('pavanol' , 'test@123')
    await page.waitForTimeout(3000)

    // HomePage
    const home = new HomePage(page)
    await home.addProduct("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart()
    await page.waitForTimeout(3000)

    //Cart Page
    const cart = new cartPage(page)
    const status = cart.checkProductInCart("Nexus 6");
    await expect(status).toBeTruthy();
    await page.waitForTimeout(3000)

    // Logout
    await page.click("#logout2")
    await page.waitForSelector("#login2")
    await expect(await page.locator("#login2")).toBeVisible()
    await page.waitForTimeout(3000)

})

