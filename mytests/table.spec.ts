import{test,expect, Browser , Page, Locator} from "@playwright/test"
import exp from "constants";
import { ECDH } from "crypto";
import { waitForDebugger } from "inspector";



test("Table logic", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")
    // To capture the number of rows and columns

    const columns = await table.locator("thead tr th")

    await console.log("Number of Columns =" , await  columns.count())
    const rows = await table.locator("tbody tr")

    console.log("Number of Columns =",await rows.count())

    // assertion for Numbe of rows and columns

    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    //Selecting particular product from table

    /*const productName = rows.filter({
        has:page.locator('td'),
        hasText:"Product 5"
    })

    await productName.locator("//input[@type='checkbox']").check()
    */

    //Select Multiple products checkBox by re-usable functions in TS

    // await selectProduct(rows , page , 'Product 1')
    // await selectProduct(rows , page , 'Product 3')
    // await selectProduct(rows , page , 'Product 5')



    //Print all Details of Table using Looping Statement
    //This for loop is for incrementing the rows
    // for (let r=0 ; r<=await rows.count() ;r++)
    //     {
    //         const row = rows.nth(r)
    //         const td = row.locator('td')
    //         // This For Loop is for Incrementing the columns
    //         for(let c =0; c < await td.count()-1 ; c ++ )
    //             {
    //                 console.log("The Column Text is", await td.nth(c).textContent())

    //             }

    //     }


        //Read data from all the pages in a table
        const pageButton = await page.locator("#pagination li")
        console.log("The Number of Button is ", await pageButton.count())


    for(let p=0;p< await pageButton.count() ;p++)
        {
            if(p>0)
                {
                    console.log("The Page is in ",p)
                    await pageButton.nth(p).click()
                }
            for (let r=0 ; r<=await rows.count() ;r++)
                    {
                       const row = rows.nth(r)
                       const td = row.locator('td')
                               // This For Loop is for Incrementing the columns
                        for(let c =0; c < await td.count()-1 ; c ++ )
                           {
                               console.log("The Column Text is", await td.nth(c).textContent())
                   
                           }
                    }}

            }
        


    

)



async function selectProduct(rows:Locator ,page : Page, name: string)
{
     const productName = rows.filter({
        has:page.locator('td'),
        hasText: name })
    await productName.locator("//input[@type='checkbox']").check()
}