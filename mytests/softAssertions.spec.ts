import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";




test("softAssertions", async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    await expect(page.locator('.navbar-brand')).toBeVisible()

   


    //hard assertion  
    /*
    await expect(page).toHaveTitle("STORE123")
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    await expect(page.locator('.navbar-brand')).toBeVisible()
*/
    //SoftAssertions
    await expect.soft(page).toHaveTitle("STORE")
    await expect.soft(page).toHaveURL("https://www.demoblaze./")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()






    await page.close()

})