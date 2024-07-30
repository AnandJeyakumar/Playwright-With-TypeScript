import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";




test("multiSelectDropDown" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForSelector("#colors")

    await page.selectOption("#colors", ['Red' , 'Blue', 'Yellow'])


    //check number of options from dropDown

    const options = await page.locator("#colors>option")
    await expect(options).toHaveCount(5)

     //check number of options using JS array Concept

    const optionsArray = await page.$$("#colors>option")
    await expect(optionsArray).toHaveLength(5)
    console.log(optionsArray.length)

    //BY toBE
    await expect(optionsArray.length).toBe(5)

    // Presence of value in the dropdown

    const optionText = await page.locator("#colors").textContent()
    await expect(optionText?.includes("Red")).toBeTruthy()
    
    await page.waitForTimeout(3000)

    await page.close()



})