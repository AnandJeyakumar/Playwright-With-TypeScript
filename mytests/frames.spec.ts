import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";




test("frames", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")


    const allFrames = await page.frames()
    console.log("Number of Frames ", allFrames.length)



    //Using name or url on the page
    // If namme is available use the below
    // const name = await page.frame("name")

    // Pointing to frame by URL
    const frame1 =  await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
    // await frame1.fill("//input[@name = 'mytext1']", "I W E M M And B H")


    // Locating frame by using Locator

    const loca =  await page.frameLocator("//frame[@src = 'frame_2.html']").locator("//input[@name= 'mytext2']")
    await loca.fill("Om")

    await page.waitForTimeout(3000)

})









