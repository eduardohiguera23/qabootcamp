import { Selector, t } from "testcafe"

class TodayPage{
    constructor(){
        this.addTaskButton = Selector('.plus_add_button')
        this.contentField1 = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.submitTaskButton = Selector('.reactist_button.reactist_button--primary')
        this.taskContentField2 = Selector('.task_content')
    }

    async createNewTask(content){
        await t.wait(2000)
        if (await this.addTaskButton.exists) {
            await t.click(this.addTaskButton)
        }
        await t.typeText(this.contentField1, content,{paste:true})
        await t.click(this.submitTaskButton)
        await t.wait(5000)
       
    }

    async nTasks(content,size){
        await t.wait(2000)
        await t.click(this.addTaskButton)
        for (let index = 0; index < size; index++) {
            await t.typeText(this.contentField1, content+index,{paste:true})
            await t.click(this.submitTaskButton)
            await t.wait(2000)
        } 
    }
    
    async validateTasks(content,size){
        for (let i = 0; i < size; i++) {
            const targetTask = this.taskContentField2.nth(i)
           await t.expect(targetTask.innerText).contains(content+i)
           //console.log(await targetTask.innerText)
        } 
        return true
    }
}
export default new TodayPage