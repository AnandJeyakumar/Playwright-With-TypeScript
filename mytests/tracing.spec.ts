import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("Trace Viewer",async ({page})=>{

    // Login

    await page.goto("https://www.demoblaze.com/index.html")

    await page.click("#login2")
    await page.fill("#loginusername","pavanol" )
    await page.fill("#loginpassword","test@123" )
    await page.click("//button[@onclick='logIn()']")
    await expect(page.locator("#logout")).toBeVisible()


})
