import { Selector, t } from "testcafe"
class InboxPage{
    constructor(){
        //task item
        this.taskListItem = Selector('.task_list_item')
        this.doneCheckbox = Selector('.task_checkbox__circle')
         //task more menu
         this.moreActions = Selector('.more_actions_button')
         this.deleteTaskButton = Selector('.icon_menu_item__content').withText('Delete task')
         //confirm delete window
         this.deleteConfirm = Selector('.ist_button_red').withText('Delete')
    }
    async deleteTasks(){

        while (await this.doneCheckbox.exists) {
         await t.hover(this.taskListItem)
         await t.click(this.moreActions)
         await t.click(this.deleteTaskButton)
         await t.click(this.deleteConfirm)
         await t.wait(2000)
        }
        
    }

    
}
export default new InboxPage