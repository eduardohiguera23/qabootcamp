import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        //this.upcommingLink = Selector('.filter_upcoming')
        this.upcommingLink = Selector('.item_content').withText('Upcoming')
        this.InboxLink = Selector('.item_content').withText('Inbox')
        //this.tomorrowLink = Selector('a').withText('Tomorrow')
        this.tomorrowLink = Selector('h2').withText('Tomorrow')
    }

    async NavigateToTomorrow (){
        //await t
            t.click(this.upcomingButton)
            t.click(this.tomorrowLink)
    } 

    async NavigateToInbox (){
        await t.click(this.InboxLink)
            
    } 
}
export default new CommonPage