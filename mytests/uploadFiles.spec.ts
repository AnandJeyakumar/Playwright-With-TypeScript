import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test("Upload Files", async ({page})=>{

    await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html")

    // await page.click("//input[@name='userfile']")


    await page.locator("//input[@name='userfile']").setInputFiles("mytests\\uploadFiles\\Test1.pdf");

    await page.waitForTimeout(3000)

    await page.close();

})  

test.only("Multiple Files", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    


    await page.locator("#filesToUpload").setInputFiles([
        "mytests\\uploadFiles\\Test1.pdf",'mytests\\uploadFiles\\Test12.pdf']);

    await expect.soft(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText("Test1.pdf")
    await expect.soft(await page.locator("//ul[@id='fileList']/li[2]")).toHaveText("Test12.pdf")

    //Removing files

    await page.locator("#filesToUpload").setInputFiles([])
    await page.waitForTimeout(3000)

    await expect.soft(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText("No Files Selected")


    await page.close();

})  




