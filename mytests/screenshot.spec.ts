
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test.skip("page screenshot", async ({page})=>{

    await page.goto("https://demo.opencart.com/")

    await page.screenshot({path:"mytests\\Screenshots\\"+Date.now()+"HomePage.png"})

    await page.waitForTimeout(3000)
    await page.close();
})


test.skip("full page  screenshot", async ({page})=>{

    await page.goto("https://demo.opencart.com/")

    await page.screenshot({path:"mytests\\Screenshots\\"+Date.now()+"fullPage.png", fullPage:true})

    await page.waitForTimeout(3000)
    await page.close();
})

test("Particular element  screenshot", async ({page})=>{

    await page.goto("https://demo.opencart.com/")

    await page.locator("//img[@alt='iPhone 6']").screenshot({path:"mytests\\Screenshots\\"+Date.now()+"MobilePicture.png"})

    await page.locator("//img[@title='MacBook']/ancestor::div[@class='col mb-3']").screenshot({path:"mytests\\Screenshots\\"+Date.now()+"Product.png"})


    await page.waitForTimeout(3000)
    await page.close();
})