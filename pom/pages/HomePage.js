import { Selector, t } from "testcafe"

class HomePage{
    constructor(){
        this.userAvatar = Selector('.user_avatar big settings_avatar')
        this.searchBar = Selector('.quick_find__input')
        
    }

async submittLoginForm (email, password){
    await t
        .typeText(this.emailField, email)
        .typeText(this.passwordField, password)
        .click(this.logInButton)
}   

}
export default new HomePage