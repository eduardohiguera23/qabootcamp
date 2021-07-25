import { Selector, t } from "testcafe"
import {TASK} from '../data/Constants'
import CommonPage from "./CommonPage"

class HomePage{
    constructor(){
        this.userAvatar = Selector('.user_avatar big settings_avatar')
        this.searchBar = Selector('.quick_find__input')
        this.quickAddButton = Selector('#quick_add_task_holder')
        this.addTaskButton = Selector('.plus_add_button')
        this.contentField1 = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        //this.submitTaskButton = Selector('button').withText("Add task")
        this.submitTaskButton = Selector('.reactist_button.reactist_button--primary')
        this.taskContentField2 = Selector('.task_content')
        this.calendarIcon = Selector('.item_due_selector')
        //this.tomorrowButton = Selector('button').withText("Tomorrow")
        //this.tomorrowButton = Selector('.scheduler-suggestions-item-label').withExactText("Tomorrow")
        
        this.doneCheckbox = Selector('.task_checkbox__circle')

        
    }

async createNewTask (content){
    if (await this.addTaskButton.exists) {
        await t.click(this.addTaskButton)
    }
    await t.typeText(this.contentField1, content,{paste:true})
    await t.click(this.submitTaskButton)
    await t.wait(5000)
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
        .click(CommonPage.upcomingButton)
        .click(CommonPage.tomorrowLink)
} 

async tenTasks (){
    for (let index = 1; index < 11; index++) {
        await t.this.createNewTask(TASK.TODAY_TASK+index)
        
    }
} 

async DeleteTasks (){

       CommonPage.NavigateToInbox()
       while (await this.doneCheckbox.exists) {
        await t.click(this.doneCheckbox)
        await t.wait(2000)
       }
       
} 

}
export default new HomePage