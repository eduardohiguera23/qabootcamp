import { Selector, t } from "testcafe"
import {WAITS} from '../data/Constants'

class TodayPage{
    constructor(){
        this.addTaskButton = Selector('.plus_add_button')
        this.contentField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.submitTaskButton = Selector('.reactist_button.reactist_button--primary')
        this.taskContentField = Selector('.task_content')
    }

    async createNewTask(taskContent){
        if (await this.addTaskButton.exists) {
            await t.click(this.addTaskButton)
        }
        await t.typeText(this.contentField, taskContent,{paste:true})
        await t.click(this.submitTaskButton)
        await t.wait(WAITS.ONE)
       
    }

    async nTasks(taskContent,numberOfTasks){
        await t.click(this.addTaskButton)
        for (let index = 0; index < numberOfTasks; index++) {
            await t.typeText(this.contentField, taskContent+index,{paste:true})
            await t.click(this.submitTaskButton)
            await t.wait(WAITS.ONE)
        } 
    }
    
    async validateTasks(taskContent,numberOfTasks){
        for (let i = 0; i < numberOfTasks; i++) {
           await t.expect(this.taskContentField.nth(i).innerText).contains(taskContent+i)
           //console.log(await targetTask.innerText)
        } 
        return true
    }
}
export default new TodayPage