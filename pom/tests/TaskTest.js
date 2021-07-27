import {USER} from '../data/Roles'
import {TASK,URLS} from '../data/Constants'
import homePage from '../pages/HomePage'
import CommonPage from '../pages/CommonPage'

fixture('task features')
    .page `${URLS.LOGIN_URL}`
    .meta('feature','task')
    .beforeEach( async t => {
        await t.useRole(USER)
    })
    .afterEach( async t => {
        await homePage.DeleteTasks()
    })
   

test.meta('type', 'smoke')('as a user, i should be able to add a new task with today as the due date', async t => {
    
    await homePage.createNewTask(TASK.TODAY_TASK)
    await t.expect(homePage.taskContentField2.innerText).contains(TASK.TODAY_TASK)
 
})

test.meta('type', 'smoke')('as a user, i should be able to add a new task with tomorrow as the due date', async t => {
   
    await homePage.createNewTask(TASK.TOMORROW_TASK)
    await CommonPage.NavigateToTomorrow()
    await t.expect(homePage.taskContentField2.innerText).contains(TASK.TOMORROW_TASK_VALIDATION)
})



test('as a user, i should be able to create 10 task with today as the due date', async t => {
    
    await homePage.nTasks(TASK.TODAY_TASK,TASK.SIZE)
    await t.expect(homePage.countTasks()).eql(TASk.SIZE)
    
})


