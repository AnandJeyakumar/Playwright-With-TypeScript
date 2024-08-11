
import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("mouseHower", async ({page})=>{

    await page.goto("https://demo.opencart.com/")

    await page.locator("//a[@class='nav-link dropdown-toggle'][normalize-space()='Desktops']").hover()

    await page.locator("//a[@class='nav-link'][normalize-space()='Mac (1)']").hover()

   
    await page.waitForTimeout(3000)
    await page.close();

})