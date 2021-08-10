import {Role} from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import LoginPage from '../pages/LoginPage'
//, async t= =>
export const USER = Role(URLS.LOGIN_URL, async () =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.EMAIL,CREDENTIALS.VALID_USER.PASSWORD)
},{preserveUrl:true}
)