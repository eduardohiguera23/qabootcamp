
import {URLS, CREDENTIALS,MESSAGES} from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import CommmonPage from '../pages/CommonPage'
import {USER} from '../data/Roles'

fixture('login feature')
    .page `${URLS.LOGIN_URL}`
    .meta('feature','login')


test.meta('type','smoke')('as a user, i should be able to login successfully with the valid credentials', async t => {
    await t.useRole(USER)
    await t.expect(CommmonPage.searchBar.exists).ok()
    
})

test.meta('type','smoke')('as a user, i should not be able to login successfully with  a blank password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.EMAIL,null)
    await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN.BLANK_PASSWORD)
})

test('as a user, i should not be able to login successfully with the invalid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL,CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN.WRONG_CREDENTIALS)
})

test('as a user, i should not be able to login successfully with an invalid email address', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_EMAIL.EMAIL,null)
    await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN.INVALID_EMAIL)
})