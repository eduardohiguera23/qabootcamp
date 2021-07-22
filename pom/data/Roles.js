import {Role} from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import LoginPage from '../pages/LoginPage'

export const USER = Role(URLS.LOGIN_URL, async t =>{
    await LoginPage.submittLoginForm(CREDENTIALS.VALID_USER.EMAIL,CREDENTIALS.VALID_USER.PASSWORD)
},{preserveUrl:true}
)