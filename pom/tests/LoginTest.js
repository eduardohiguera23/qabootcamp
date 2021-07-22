//import { Selector, t} from "testcafe"
import {URLS, CREDENTIALS,MESSAGES} from '../data/Constants'
import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import {USER} from '../data/Roles'

fixture ('login feature')
    .page `${URLS.LOGIN_URL}`
//solo un fixture por test
// piensen en el fixture como un modulo y los tests como un flujo completo

test('as a user, i should be able to login successfully with the valid credentials', async t => {
    await t.useRole(USER)
    //await loginPage.submittLoginForm(CREDENTIALS.VALID_USER.EMAIL,CREDENTIALS.VALID_USER.PASSWORD)
    //await t.expect(homePage.userAvatar.exists).ok()
    await t.expect(homePage.searchBar.exists).ok()//,{ timeout: 20000 }
    //await t.wait(2000)
})

test('as a user, i should not be able to login successfully with  a blank password', async t => {
    await loginPage.submittLoginForm(CREDENTIALS.VALID_USER.EMAIL,null)
    await t.expect(loginPage.ErrorMessage.innerText).contains(MESSAGES.ERROR.LOGIN.BLANK_PASSWORD)
})

test('as a user, i should not be able to login successfully with the invalid credentials', async t => {
    await loginPage.submittLoginForm(CREDENTIALS.INVALID_USER.EMAIL,CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.ErrorMessage.innerText).contains(MESSAGES.ERROR.LOGIN.WRONG_CREDENTIALS)
})