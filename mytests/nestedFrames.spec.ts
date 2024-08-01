import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";




test("nested frames", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const allFrames = await page.frames()
    console.log("Number of Frames ", allFrames.length)

    // Pointing to frame by URL
    const frame =  await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

    if(frame!= null)
        {
            const allFrames = await page.frames()

            // Locating frame by using Locator
            await frame.locator("//input[@name= 'mytext3']").fill("Om")
            const childFrame = await frame.childFrames()
            console.log("Child Frame", childFrame)
            await 

            await childFrame[0].locator("//div[@data-value='I am a human']").check()
            await page.waitForTimeout(5000)
        }
    else
    {
    console.log("Frame is Null and inside else condition")

    }


    
})









