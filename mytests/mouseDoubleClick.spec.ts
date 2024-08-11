
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("mouseRightClick", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")

    const field1Value = await page.locator("#field1").textContent()
    console.log("The field value is " , field1Value)


    await page.locator("//button[normalize-space()='Copy Text']").dblclick()

    await expect(await page.locator("#field2")).toHaveValue("Hello World!")

    await page.waitForTimeout(3000)
    await page.close();

})