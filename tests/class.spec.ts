import{test,expect, Browser , Page, Locator} from "@playwright/test"
import {webkit , chromium , firefox} from 'playwright'


test ("class", async ()=>{

class employee
{
    details()
    {
        console.log("Allah")
        const newaaaa:Number = 10;
        return newaaaa;
    }
}

let myobj = new employee()
console.log(myobj.details())

})
