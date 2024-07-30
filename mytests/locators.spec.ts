import{test,expect, Browser , Page, Locator} from "@playwright/test"

test ("Locators", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    const title = await page.title();
    console.log(title)

    // await page.locator("id=Login2").click()
    await page.click("#login2")

    await page.locator("#loginusername").fill("pavanol")
    await page.fill("#loginpassword","test@123")
    await page.click("//button[@onclick='logIn()']")

    await page.waitForSelector("#logout2")

    const isLogoutVisible = await page.locator("#logout2").isVisible()
    await expect(isLogoutVisible).toBeTruthy()
    console.log("The Result is " , isLogoutVisible)

   

    await page.close()


})  