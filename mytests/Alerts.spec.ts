
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("checkBox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Alert window enabling

    page.on('dialog', async dialog => 
        {
            await expect(dialog.type()).toBe('alert')
            await expect(dialog.message()).toContain('I am an alert box!')
            await dialog.accept()
        })
    await page.click("//div[@class='widget-content']/button[text()='Alert']")
    await page.waitForTimeout(3000)
    await page.close();


})



test("alert", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Alert window enabling

    page.on('dialog', async dialog => 
        {
            await expect(dialog.type()).toBe('alert')
            await expect(dialog.message()).toContain('I am an alert box!')
            await dialog.accept()
        })
    await page.click("//div[@class='widget-content']/button[text()='Alert']")
    await page.waitForTimeout(1000)

    await page.waitForTimeout(3000)

    await page.close();


})

test("confirmation", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Confrim window enabling

    page.on('dialog', async dialog => 
        {
            await expect(dialog.type()).toBe('confirm')
            await expect(dialog.message()).toContain('Press a button!')
            // The below will close the alert by using ok button
            await dialog.accept()
            // The below will close the alert by using cancel button
            // await dialog.dismiss()
        })
    await page.click("//div[@class='widget-content']/button[text()='Confirm Box']")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='demo' and text()='You pressed OK!']")).toBeVisible()

    await page.close();


})



test.only("prompt", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Confrim window enabling

    page.on('dialog', async dialog => 
        {
            await expect(dialog.type()).toBe('prompt')
            await expect(dialog.message()).toContain('Please enter your name:')

            await expect(dialog.defaultValue()).toContain("Harry Potter")
            // The below will close the alert by using ok button and to enter value in the input field
            await dialog.accept("Siva")
            // The below will close the alert by using cancel button
            // await dialog.dismiss()
        })
    await page.click("//div[@class='widget-content']/button[text()='Prompt']")
    await page.waitForTimeout(3000)

    await expect(page.locator("//p[@id='demo' and text()='Hello Siva! How are you today?']")).toBeVisible()

    await page.close();


})