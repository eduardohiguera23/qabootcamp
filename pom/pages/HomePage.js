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
        this.submitTaskButton = Selector('.reactist_button.reactist_button--primary')
        this.taskContentField2 = Selector('.task_content')
        this.calendarIcon = Selector('.item_due_selector')
        this.doneCheckbox = Selector('.task_checkbox__circle')
        this.addToFavoritesSwitch = Selector('.reactist_switch--handle')
        this.colorDropdown = Selector('.color_dropdown_toggle.form_field_control')
        this.selectColor = Selector('.color_dropdown_select__name')
        this.NewProjectNameField = Selector('#edit_project_modal_field_name')
        this.SubmitNewProjectButton = Selector('.ist_button.ist_button_red')
        this.cancelButton = Selector('.reactist_button.reactist_button--secondary')

        
    }
async createNewTask2 (content){
    await t.wait(2000)
    .click(this.quickAddButton)
    await t.typeText(this.contentField1, content,{paste:true})
    await t.click(this.submitTaskButton)
    await t.click(this.cancelButton)
    await t.wait(1000)
       
} 
async createNewTask (content){
    await t.wait(2000)
    if (await this.addTaskButton.exists) {
        await t.click(this.addTaskButton)
    }
    await t.typeText(this.contentField1, content,{paste:true})
    await t.click(this.submitTaskButton)
    await t.wait(5000)
    await t.click(this.cancelButton)
    await t.wait(5000)
   
} 



async nTasks(content, size){
    for (let index = 0; index < size; index++) {
        this.createNewTask2(content+index)
        await t.wait(2000)
    } 
} 
async countTasks(){
    return this.doneCheckbox.count 
} 


async DeleteTasks (){

       CommonPage.NavigateToInbox()
       while (await this.doneCheckbox.exists) {
        await t.click(this.doneCheckbox)
        await t.wait(2000)
       }
       
} 

async CreateNewProject (content,color){

    await CommonPage.NavigateToNewProject()
    await t.typeText(this.NewProjectNameField, content,{paste:true})
            .click(this.addToFavoritesSwitch)
            .click(this.colorDropdown)
    await t.wait(2000)
    await t.click(this.selectColor.withText(color))        
    await t.wait(5000)
    await t.click(this.SubmitNewProjectButton)
    await t.wait(5000)
    
} 


}
export default new HomePage