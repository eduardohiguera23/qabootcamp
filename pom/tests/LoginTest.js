//import { Selector, t} from "testcafe"
import {URLS, CREDENTIALS} from '../data/Constants'
import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'

fixture ('login feature')
    .page `${URLS.LOGIN_URL}`
//solo un fixture por test
// piensen en el fixture como un modulo y los tests como un flujo completo

test('as a user, i should be able to login successfully with the valid credentials', async t => {
    await loginPage.submittLoginForm(CREDENTIALS.VALID_USER.EMAIL,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(homePage.userAvatar.exists).ok()
})