import{test,expect, Browser , Page, Locator} from "@playwright/test"
test ("locateMultipleLocators", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    const title = await page.title();
    console.log(title)

    // await page.locator("id=Login2").click()
    await page.click("#login2")

    await page.locator("#loginusername").fill("pavanol")
    await page.fill("#loginpassword","test@123")
    await page.click("//button[@onclick='logIn()']")

    await page.waitForSelector("#logout2")

    const mobileTexts = await page.$$("//h4");

    const mobileNumbers = await page.locator("//h4");
    const count = await mobileNumbers.count();    
    console.log("The mobile count is ", count)
    


    for (const link of mobileTexts)
        {
            let linkText = await link.textContent()
            console.log(linkText)

        }

    await page.close()


})  