import{test,expect, Browser , Page, Locator} from "@playwright/test"
import {webkit , chromium , firefox} from 'playwright'
import exp from "constants";




test ("Login test", async() =>{
    const browser:Browser = await chromium.launch({headless: false , channel : 'chrome'});
    const page:Page = await browser.newPage();
    
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailInput:Locator = await page.locator("#input-email")
    const passwordInput:Locator = await page.locator("#input-password")
    const loginButton:Locator = await page.locator("[value=Login]")

    await emailInput.fill("aaa123@gmail.com")
    await passwordInput.fill("aaa@123")
    await loginButton.click()
    
    const title = await page.title();
    console.log("The Page Title is ", title);
    await page.screenshot({path : "HomePage.png"})
    await expect(page).toHaveTitle("My Account");
    await expect(title).toEqual("My Account")

    await browser.close()
    // page.close()
})
