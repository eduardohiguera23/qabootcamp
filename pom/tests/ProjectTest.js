import {USER} from '../data/Roles'
import {NEWPROJECT,URLS} from '../data/Constants'
import CommonPage from '../pages/CommonPage'


fixture ('proyect features')
   .page `${URLS.LOGIN_URL}`
.meta('feature','project')
.beforeEach( async t => {
    await t.useRole(USER)
})
 
 test.meta('type','smoke')('as a user, i should be able to create a new project', async t => {
    
    await CommonPage.createNewProject(NEWPROJECT.NAME,NEWPROJECT.COLOR)
    await t.expect(CommonPage.projectName.withText(NEWPROJECT.NAME).exists).ok()
    
})