import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";


test.beforeAll(async()=>{
    console.log("Before all Hook")
})
test.afterAll(async()=>{
    console.log("After all Hook")
})

test.beforeEach(async()=>{
    console.log("Before EACH Hook")
})
test.afterEach(async()=>{
    console.log("After EACH Hook")
})
test.describe.skip("Group 1" ,  ()=>{
    test("Test 1", async ({page})=>{
        console.log("This is Test 1")
    })
    
    test("Test 2", async ({page})=>{
    
        console.log("This is Test 2")
    })

})

test.describe("Group 2 " , ()=>{

    test("Test 3", async ({page})=>{

        console.log("This is Test 3")
    })
    test("Test 4", async ({page})=>{
    
        console.log("This is Test 4")
    })

})
