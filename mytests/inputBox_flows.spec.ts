import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";



test("input", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("#name")).toBeVisible()
    await expect(page.locator("#name")).toBeEditable()
    await expect(page.locator("#name")).toBeEmpty()
    await expect(page.locator("#name")).toBeEnabled()

    await page.fill('#name',"Shiva");

    await expect.soft(page.locator("#name")).toBeEmpty()

    await page.waitForTimeout(3000)

    await page.close();








})