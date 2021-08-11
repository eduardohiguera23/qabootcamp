import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        //up menu
        this.searchBar = Selector('.quick_find__input')
        //left menu
        this.upcommingLink = Selector('.item_content').withText('Upcoming')
        this.inboxLink = Selector('.item_content').withText('Inbox')
        this.tomorrowLink = Selector('a').withText('Tomorrow')
        this.newProjectButton = Selector('.adder_icon')
        this.projectName = Selector('.text')
        //create new project
        this.addToFavoritesSwitch = Selector('.reactist_switch--handle')
        this.colorDropdown = Selector('.color_dropdown_toggle.form_field_control')
        this.selectColor = Selector('.color_dropdown_select__name')
        this.newProjectNameField = Selector('#edit_project_modal_field_name')
        this.submitNewProjectButton = Selector('.ist_button.ist_button_red')
    }

    async navigateToTomorrow(){
       
         await t.click(this.upcommingLink)
         await t.wait(2000)
         await t.click(this.tomorrowLink)
         await t.wait(2000)
    } 

    async navigateToInbox(){
        await t.click(this.inboxLink)
            
    } 

    async navigateToNewProject(){
        await t.wait(2000)
            .hover(this.newProjectButton)
        await t.wait(5000)
         await t.click(this.newProjectButton)
            
    } 

    async createNewProject(content,color){

        await this.navigateToNewProject()
        await t.typeText(this.newProjectNameField, content,{paste:true})
                .click(this.addToFavoritesSwitch)
                .click(this.colorDropdown)
        await t.wait(2000)
        await t.click(this.selectColor.withText(color))        
        await t.wait(5000)
        await t.click(this.submitNewProjectButton)
        await t.wait(5000)
        
    } 
}
export default new CommonPage