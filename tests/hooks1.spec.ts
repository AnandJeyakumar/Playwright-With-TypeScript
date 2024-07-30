import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import {webkit , chromium , firefox} from 'playwright'
import { ElementHandle } from 'playwright';



test ("Home Page  Test", async() =>{
    const browser:Browser = await chromium.launch({headless: false , channel : 'chrome'});
    const page:Page = await browser.newPage();

    //Login
    
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[@onclick= 'logIn()']").click();


    //homepage
    await page.waitForTimeout(7000)
    const products= await page.$$(".hrefch")
    expect(products).toHaveLength(9);
    console.log(products.length)

    //logout
    await page.locator("logout2").click;
    
})

test("Home Page Test",async()=>{
    const browser:Browser = await chromium.launch({headless: false , channel : 'chrome'});
    const page:Page = await browser.newPage();

     //Login
    
     await page.goto("https://www.demoblaze.com/index.html");
     await page.locator("#login2").click()
     await page.locator("#loginusername").fill("pavanol")
     await page.locator("#loginpassword").fill("test@123")
     await page.locator("//button[@onclick= 'logIn()']").click();

     
    //HomePage

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']")


    page.on("dialog",async dialog=>{
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })



})