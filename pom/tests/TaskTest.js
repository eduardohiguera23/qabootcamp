import {USER} from '../data/Roles'
import {TASK,URLS} from '../data/Constants'
import CommonPage from '../pages/CommonPage'
import InboxPage from '../pages/InboxPage'
import TodayPage from '../pages/TodayPage'

fixture('task features')
    .page `${URLS.LOGIN_URL}`
    .meta('feature','task')
    .beforeEach( async t => {
        await t.useRole(USER)
    })
    .afterEach( async () => {
        await CommonPage.navigateToInbox()
        await InboxPage.deleteTasks()
    })
   

test.meta('type', 'smoke')('as a user, i should be able to add a new task with today as the due date', async t => {
    
    await TodayPage.createNewTask(TASK.TODAY_TASK)
    await t.expect(TodayPage.taskContentField2.innerText).contains(TASK.TODAY_TASK)
 
})

test.meta('type', 'smoke')('as a user, i should be able to add a new task with tomorrow as the due date', async t => {
   
    await TodayPage.createNewTask(TASK.TOMORROW_TASK)
    await CommonPage.navigateToTomorrow()
    await t.expect(TodayPage.taskContentField2.innerText).contains(TASK.TOMORROW_TASK_VALIDATION)
})



test('as a user, i should be able to create 10 tasks with today as the due date', async t => {
    
    await TodayPage.nTasks(TASK.TODAY_TASK,TASK.SIZE)
    await t.expect(await TodayPage.validateTasks(TASK.TODAY_TASK,TASK.SIZE)).ok()
})


