import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";




test("autoSugDropDOwn",async({page})=>{

    await page.goto("https://www.google.com/")

    await page.fill("//textarea[1]", "Om Namah shivaya mantra")


    await page.waitForSelector("//li//div[@role='presentation']/span")

    const options = await page.$$("//li//div[@role='presentation']/span")


    for (const opt of options)
        {
            const text = await opt.textContent()
            console.log(text)
            if(text?.includes("om namah shivaya mantra") )
                {
                    await  opt.click()
                    break
                }
                
        }
        await page.waitForTimeout(3000)

})