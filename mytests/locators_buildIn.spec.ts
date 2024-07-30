import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";




test("buildin", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");



    await page.waitForSelector("//input[@name='username']")


    const logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')


    await page.click("//button[@type='submit']")

    const userName = await page.locator('.oxd-userdropdown-name').textContent();
    console.log("Username is ", userName)
    // const bool = await expect( page.getByText(userName)).toBeVisible();
    // console.log("The text is visible? ", bool)

    




})