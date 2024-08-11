import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("mouseRightClick", async ({page})=>{

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette")

//    Approach 1 

    const oslo = await page.locator("#box1")
    const norway = await page.locator("#box101")

    await oslo.hover()
    await page.mouse.down()

    await norway.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)

    //    Approach 2 = In Single Line command

    const stockholm = await page.locator("#box2")
    const sweden = await page.locator("#box102")

    await stockholm.dragTo(sweden)

    await page.waitForTimeout(3000)

    await page.close();

})  





