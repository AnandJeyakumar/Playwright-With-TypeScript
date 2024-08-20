import{test,expect , chromium} from "@playwright/test"
import exp from "constants"


test("Handing Pages" , async ()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const pageCount = await context.pages()
    console.log("The total  number of pages is ", pageCount.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto("https://orangehrm.com/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgClv07D7WwVt63zOXdTgk0nGrIWBfq2JOV-XtiP3rhUcb3UGYyso666xoC-1gQAvD_BwE")
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')

})


test.only("Handing Pages/Windows" , async ()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()

    const pageCount = await context.pages()
    console.log("The total  number of pages is ", pageCount.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage = await pagePromise;
    console.log("The new page title is ", await newPage.title())
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")


    await browser.close()



})