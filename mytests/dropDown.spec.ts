import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH, verify } from "crypto";
import { waitForDebugger } from "inspector";





test("dropDown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //label 
    await page.locator("#country").selectOption({label : 'Germany'})
    await page.waitForTimeout(3000)

    //Visible Text
    await page.locator("#country").selectOption('India');
    await page.waitForTimeout(3000)

    //value
    await page.locator("#country").selectOption({value: 'uk'});
    await page.waitForTimeout(3000)

    //index
    await page.locator("#country").selectOption({index: 3 });
    await page.waitForTimeout(3000)

    //page.selectOption

    await page.selectOption('#country','Canada');
    await page.waitForTimeout(3000)


    //Assertions
    //checking the count
    const countrysElement =await page.locator('#country>option')
    await expect.soft(countrysElement).toHaveCount(10)

    //Printing the values in the dropdown

    //checking the count
    const options = await page.$$('#country>option')
    console.log("Options in dropDown" , options.length)

    //validating the text by inlcude method

    const content = await page.locator('#country').textContent()
    // await expect(content.includes('Germany')).toBeTruthy();
    let status = false;

    //vaidating using loop and include

    for(const text of options)
        {
            const t = await text.textContent()
            console.log("The DropDown Options are ", t)
            if(t?.includes('Germany'))
                {
                    status=true;
                    break;
                }
        }
        await expect(status).toBeTruthy()
        console.log(status)


    // Select dropdown  by for loop
    const Opt = await page.$$('#country>option')
    for (let con of Opt)
        {
            let val = await con.textContent()
            console.log(val)
            if(val == "Germany")
                {
                    await page.selectOption("#country", val)
                    break;
                }
        }
    await page.close()

})