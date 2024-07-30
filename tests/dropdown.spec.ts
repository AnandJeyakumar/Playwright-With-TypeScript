import{test,expect, Browser , Page, Locator} from "@playwright/test"
import {webkit , chromium , firefox} from 'playwright'

test ("Login test", async() =>{
    const browser:Browser = await chromium.launch({headless: false , channel : 'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");


    const countryDropdown:Locator = await page.locator("#country")

    // await countryDropdown.selectOption("Germany")

    const allOptions = await page.$$("#country > option")
    console.log("Number of Options is :", allOptions.length)

    for(const i of allOptions)
        {
           let text = await i.textContent()
           console.log(text)
        }
    await countryDropdown.hover()

    await page.waitForTimeout(3000)


   
})
