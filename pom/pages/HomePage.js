import { Selector, t } from "testcafe"

class HomePage{
    constructor(){
        this.userAvatar = Selector('.user_avatar big settings_avatar')
        this.searchBar = Selector('.quick_find__input')
        //this.quickAddButton = Selector('#quick_add_task_holder')
        this.addTaskButton = Selector('.plus_add_button')
        this.contentField1 = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.submitTaskButton = Selector('button').withText("Add task")
        this.taskContentField2 = Selector('.task_content')
        this.calendarIcon = Selector('.item_due_selector')
        //this.tomorrowButton = Selector('button').withText("Tomorrow")
        //this.tomorrowButton = Selector('.scheduler-suggestions-item-label').withExactText("Tomorrow")
        this.tomorrowButton = Selector('button.scheduler-suggestions-item-icon--tomorrow')
        this.tomorrowLink = Selector('a').withText('Tomorrow')


        
    }

async createNewTodayTask (content){
    await t
        .click(this.addTaskButton)
    await t.typeText(this.contentField1, content,{paste:true})
    await t.click(this.submitTaskButton)
} 

async createNewTomorrowTask (content){
    await t
        .click(this.addTaskButton)
        .typeText(this.contentField1, content,{paste:true})
        //await t.click(this.calendarIcon)
        //await t.wait(5000)
        //await t.click(this.tomorrowButton)
       // await t.wait(5000)
        await t.click(this.submitTaskButton)
        await t.wait(5000)
}
async NavigateToTomorrow (){
    await t
        .click(this.upcomingButton)
        .click(this.tomorrowLink)
} 


}
export default new HomePage