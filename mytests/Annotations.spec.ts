import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";

// //only
// test.only("Test 1", async ({page})=>{
//         console.log("This is Test 1")
// })
//skip
// test.skip("Test 2", async ({page})=>{
    
//         console.log("This is Test 2")
// })

// //skip by condition
// test("Test 3", async ({page, browserName})=>{
//         console.log("This is Test 3")
//         if(browserName =="firefox")
//         {
//             test.skip()
//         }
        
// })

// Fixme

// test.fixme("Test 4", async ({page})=>{
//     test.fixme()
    
//         console.log("This is Test 4")
// })

//Fail---used for megative testing
// By USING FAIL --->When both expected and actual fail , then only the test will get passed
// test("Test 5", async ({page})=>{
//         test.fail()
//         console.log("This is Test 5...........")
//         expect(1).toBe(2)
// })


// test("Test 6", async ({page,browserName})=>{

//     console.log("This is Test 6...........")
//     if(browserName=='firefox')
//     {
//     test.fail();
//     }
// })



test("Test 7", async ({page,browserName})=>{
    test.slow();
    test.setTimeout(5000)
    console.log("This is Test 7...........")
    await page.goto("https://www.demoblaze.com/index.html")
})