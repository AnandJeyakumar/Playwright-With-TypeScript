import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("keyboardActions", async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    // await page.locator("//textarea [1]").fill("GrateFull")
    await page.type("//textarea [1]", "GrateFull")


   //CTRL+A

   await page.keyboard.press("Control+A")

   //CTRL+C
   await page.keyboard.press("Control+C")

   //TAB KEY
   await page.keyboard.down("Tab")

   //CTRL+V
   await page.keyboard.up("Tab")
   await page.keyboard.press("Control+V")


    await page.waitForTimeout(3000)

    await page.close();

})  





