import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        //this.upcommingLink = Selector('.filter_upcoming')
        this.upcommingLink = Selector('.item_content').withText('Upcoming')
        this.InboxLink = Selector('.item_content').withText('Inbox')
        //this.tomorrowLink = Selector('a').withText('Tomorrow')
        this.tomorrowLink = Selector('a').withText('Tomorrow')
        this.newProjectButton = Selector('.adder_icon')
        this.ProjectName = Selector('.text')
    }

    async NavigateToTomorrow (){
        //await t
         await t.click(this.upcommingLink)
         await t.wait(2000)
         await t.click(this.tomorrowLink)
         await t.wait(2000)
    } 

    async NavigateToInbox (){
        await t.click(this.InboxLink)
            
    } 

    async NavigateToNewProject (){
        await t.wait(2000)
            .hover(this.newProjectButton)
        await t.wait(5000)
         await t.click(this.newProjectButton)
            
    } 
}
export default new CommonPage