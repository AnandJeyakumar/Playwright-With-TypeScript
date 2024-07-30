
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";



test("radioButton", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    // await page.locator('#male').check();
    await page.check("#male")
    await expect(page.locator('#male')).toBeChecked()
    await expect(page.locator('#male').isChecked()).toBeTruthy();

    // await page.check("#female")
    await page.waitForTimeout(3000)
    await expect(await page.locator('#female').isChecked()).toBeFalsy();
    // console.log("Is check ==" , bool)

    await page.close();












})