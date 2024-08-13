import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test.skip("Home Page test",async ({page})=>{

    // Login

    await page.goto("https://www.demoblaze.com/index.html")

    await page.click("#login2")
    await page.fill("#loginusername","pavanol" )
    await page.fill("#loginpassword","test@123" )
    await page.click("//button[@onclick='logIn()']")

    // HomePage

    await page.waitForSelector(".hrefch")
    const products = await page.$$(".hrefch")
    await expect(products).toHaveLength(9)

    console.log("The total Number of Products is " , await products.length)

    // Logout

    await page.click("#logout2")

    await page.waitForSelector("#login2")

    await expect(await page.locator("#login2")).toBeVisible()
    await page.waitForTimeout(3000)

})


test.only("Add Product test",async ({page})=>{

    // Login

    await page.goto("https://www.demoblaze.com/index.html")

    await page.click("#login2")
    await page.fill("#loginusername","pavanol" )
    await page.fill("#loginpassword","test@123" )
    await page.click("//button[@onclick='logIn()']")

    // HomePage

    await page.waitForSelector(".hrefch")

    // Adding Product
    
    await page.click("//a[@class='hrefch' and text()='Samsung galaxy s6']")

    let dialogAssertionError: Error | null = null;

    page.on('dialog', async dialog => {
    try {
        await expect(dialog.type()).toContain('alert');  // Ensure the dialog type is alert
        await expect(dialog.message()).toContain('232'); // Check for the wrong message 'zzz'
        console.log("Inside alert Handler");
    } catch (error) {
        dialogAssertionError = error as Error; // Capture the error
    } finally {
        await dialog.accept(); // Always accept the dialog
    }
});

// Trigger the dialog
await page.click("//a[@class='btn btn-success btn-lg' and text()='Add to cart']");

// Throw the captured error if any assertions failed
if (dialogAssertionError) {
    throw dialogAssertionError;
}
    
    
    // await page.on('dialog', async dialog =>{
    //     await expect (dialog.type()).toContain('alert')
    //     await expect (dialog.message()).toContain('zzz')
    //     console.log("Inside alert Handler")
    //     await dialog.accept()
    // })
    // await page.click("//a[@class='btn btn-success btn-lg' and text()='Add to cart']")

    // Logout

    await page.click("#logout2")
    await page.waitForSelector("#login2")
    await expect(await page.locator("#login2")).toBeVisible()
    await page.waitForTimeout(3000)

})

