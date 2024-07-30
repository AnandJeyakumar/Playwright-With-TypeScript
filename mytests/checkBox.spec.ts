
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("checkBox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#monday').check()
    // await page.check('#monday')
    await expect(await page.locator('#monday')).toBeChecked();
    await expect(await page.locator('#monday').isChecked()).toBeTruthy()
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy()



    //Multiple Checkboxes

    const arraysLocators = [
        "#monday",
        "#sunday",
        "#tuesday"
    ]

    //checkbox will be checked

    for (const check of arraysLocators)
        {
            await page.locator(check).check()
        }

    for (const check of arraysLocators)
        {
            if(await page.locator(check).isChecked())
                {
                    console.log("Inside Un Check loop")
                    await page.locator(check).uncheck()
                }
           
        }


    const weekdays = await page.$$("//div[@class='form-check form-check-inline']//input[@type='checkbox']")
    const labels = await page.$$("//input[@type='checkbox']/following::label[1]")
    let  days=  0;


    for(const day of labels)
        {
            const dayText = await day.textContent()
            console.log("Day's Text =", dayText)
            days+=1
            console.log("The day number is ", days)
            if(dayText == 'Thursday')
                {
                    await page.locator(`//div[@class='form-check form-check-inline']//input[@type='checkbox'][${days}]`)
                    await day.check()
                    break;
                }
        }
    await page.waitForTimeout(3000)
    await page.close();












})