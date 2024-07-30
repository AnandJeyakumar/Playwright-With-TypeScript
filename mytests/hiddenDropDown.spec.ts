import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { addAbortListener } from "events";
import { waitForDebugger } from "inspector";




test("hiddenDropDown",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForSelector("//input[@name='username']")

    const logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')


    await page.click("//button[@type='submit']")

    await page.waitForSelector("//a[normalize-space()='PIM']")

    await page.click("//a[normalize-space()='PIM']")

    await page.click("//div[@class='oxd-grid-item oxd-grid-item--gutters']//*[contains(text(),'Job Title')]//following::div[1]")

    await page.waitForSelector("//div[@role='listbox']//span")


    const options = await page.$$("//div[@role='listbox']//span")

    for (const opt of options)
        {
            const text = await opt.textContent()
            console.log(text)
            if(text?.includes("Automaton Tester"))
                {
                    await opt.click()
                    break;
                }
        }

        await page.waitForTimeout(3000)







})