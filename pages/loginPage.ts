
class loginPage{

    page: any;
    loginLink: string;
    userName: string;
    password : string;
    loginButton: string;
    url : any;

    constructor(page: any)
    {
        this.page =page;
        this.loginLink = '#login2';
        this.userName ='#loginusername'
        this.password ='#loginpassword'
        this.loginButton = "//button[@onclick='logIn()']"
    }
    async gotoLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html")
    }

    async login(username:any , passwrd:any )
    {
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.password).fill(passwrd)
        await this.page.locator(this.loginButton).click()
    }

}





export default loginPage