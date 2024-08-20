import { Page } from "playwright";
import {  Dialog } from "playwright";
class HomePage{
    page: any;
    productList: any;
    productName:any
    addtoCardButton:any;
    cart:any
    dialog:any    

    constructor(page:any)
    {
        this.page=page;
        this.productList = "//div[@id='tbodyid']/div/div/div/h4/a"
        this.addtoCardButton = "//a[@class='btn btn-success btn-lg']"
        this.cart = "#cartur"
        
    }


    async addProduct(productName:any)
    {
        const productListElements = await this.page.$$(this.productList)
        for (const product of productListElements)
        {
            const productText = await product.textContent();
            console.log("The Text content of the product is ===", productText)
            if(productName==productText){
                await product.click()
                break;
            }
        }
        await this.page.on('dialog' , async (dialog: Dialog) =>{
            if(dialog.message().includes('added')){
                await dialog.accept()
            }
        })
        await this.page.locator(this.addtoCardButton).click()
    }

    async gotoCart()
    {
        await this.page.locator(this.cart).click()
    }
}


export default HomePage