class cartPage{
    page:any
    productTitle : any
    constructor(page: any)
    {
        this.page = page;
        this.productTitle="//tbody[@id='tbodyid']/tr/td[2]"
    }

    async checkProductInCart(productName: any)
    {
        const productsInCart = await this.page.$$(this.productTitle)
        for (const product of productsInCart)
        {
             if ( productName == await product.textContent())
             {
                return true;
                break;
             }
            }
    }


}
export default cartPage