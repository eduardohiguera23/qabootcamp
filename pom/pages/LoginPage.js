import { Selector, t } from "testcafe"

class LoginPage{
    constructor(){
        this.emailField = Selector('#email')
        this.passwordField = Selector('#password')
        this.logInButton = Selector('button').withText("Log in")
    }

async submittLoginForm (email, password){
    await t
        .typeText(this.emailField, email)
        .typeText(this.passwordField, password)
        .click(this.logInButton)
}   

}
export default new LoginPage