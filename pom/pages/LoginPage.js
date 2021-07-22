import { Selector, t } from "testcafe"

class LoginPage{
    constructor(){
        this.emailField = Selector('#email')
        this.passwordField = Selector('#password')
        this.logInButton = Selector('button').withText("Log in")
        this.ErrorMessage = Selector('.error_msg')
       
    }

async submittLoginForm (email, password){

        if (email != null) {
            await t.typeText(this.emailField, email)
        }
        if (password != null) {
            await t.typeText(this.passwordField, password)
        }
        
       await t .click(this.logInButton)
}   

}
export default new LoginPage