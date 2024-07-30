import{test,expect, Browser , Page, Locator} from "@playwright/test"

test ("Home page", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    const title = await page.title();
    console.log(title)
    await expect(page).toHaveTitle("STORE")
    const url = await page.url()
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    if (title == "STORE") 
        {
            console.log("Pass")
        }
    else{
        console.log("Fail")
    }
    await page.close()

})