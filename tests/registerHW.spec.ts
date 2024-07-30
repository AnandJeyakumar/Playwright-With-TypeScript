import{test,expect, Browser , Page, Locator} from "@playwright/test"
import {webkit , chromium , firefox} from 'playwright'
import exp from "constants";




test ("Login test", async() =>{
    const browser:Browser = await chromium.launch({headless: false , channel : 'chrome'});
    const page:Page = await browser.newPage();
    
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await expect(page.getByRole('heading', {name : 'Register Account'})).toBeVisible()
    // await page.locator("//h1[text()='Register Account']")
    

   
})
