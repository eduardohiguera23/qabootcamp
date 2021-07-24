import {USER} from '../data/Roles'
import {TASK,URLS} from '../data/Constants'
import homePage from '../pages/HomePage'

fixture('task features')
    .page `${URLS.LOGIN_URL}`
    .meta('feature','task')
    .beforeEach( async t => {
        await t.useRole(USER)
        //await t.expect(homePage.searchBar.exists).ok()
    })
   

test('as a user, i should be able to add a new task with today as the due date', async t => {
    
    //await t.useRole(USER)
    await homePage.createNewTodayTask(TASK.TODAY_TASK)
    await t.expect(homePage.taskContentField2.innerText).contains(TASK.TODAY_TASK)
    await t.wait(5000)
})

test.only('as a user, i should be able to add a new task with tomorrow as the due date', async t => {
   
    await t.useRole(USER)
    homePage.createNewTomorrowTask(TASK.TOMORROW_TASK)
    await t.wait(5000)
    homePage.NavigateToTomorrow()
    await t.expect(homePage.taskContentField2.innerText).contains(TASK.TOMORROW_TASK)
})

