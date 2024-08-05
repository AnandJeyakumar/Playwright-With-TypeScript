import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("DatePicker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    

    // By normal Fill
    // await page.locator("#datepicker").fill("08/08/2024")

    await page.waitForTimeout(2000)

    // By using year,month ,date

    const year = "2025"
    const month = "March"
    const toSelectDate = "17"

    await page.locator("#datepicker").click()

    while(true)
        {
            const monthText = await page.locator("//div[@class='ui-datepicker-title']/span[@class='ui-datepicker-month']").textContent()
            const yearText  = await page.locator("//div[@class='ui-datepicker-title']/span[@class='ui-datepicker-year']").textContent()

            if(yearText == year && monthText==month)
                {
                    console.log("Year is matched")
                break;    
                }
                await page.locator("//div//a[@title='Next']").click()
        }

         const dates = await  page.$$("//a[@class='ui-state-default']")

         
        // Selectimg date by loop
        // for (const d of dates)
        //         {
                    
        //             if(await d.textContent()  == toSelectDate) 
        //                 {   
        //                     await d.click()
        //                     await page.waitForTimeout(2000)
        //                     break;
        //                 }
        //         }

        //Selecting date without loop

        await page.locator(`//a[@class='ui-state-default' and text()='${toSelectDate}' ]`).click()
        await page.waitForTimeout(3000)

         })
