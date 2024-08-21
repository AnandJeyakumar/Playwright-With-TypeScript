import{test,expect , chromium} from "@playwright/test"
import exp from "constants"




test("Test1" , async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle("STORE")
})


test("Test2" , async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo")
    await expect(page).toHaveTitle("OpenCart - Demo")
})


test("Test3" , async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHR")
})