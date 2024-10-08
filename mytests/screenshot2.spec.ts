
import{test,expect, Browser , Page, Locator, defineConfig} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("page screenshot", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    await page.click("#login2")
    await page.fill("#loginusername","pavanol" )
    await page.fill("#loginpassword","test@123" )
    await page.click("//button[@onclick='logIn()']")

    // await page.screenshot({path:"mytests\\Screenshots\\"+Date.now()+"HomePage.png"})

    await page.waitForTimeout(2000)
    await page.close();
})

