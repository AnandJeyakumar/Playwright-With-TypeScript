
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("mouseRightClick", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    await page.locator("//span[@class='context-menu-one btn btn-neutral']").click({button : "right"})

    
   
    await page.waitForTimeout(3000)
    await page.close();

})