import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        this.upcommingLink = Selector('.filter_upcoming')
        //this.tomorrowLink = Selector('a').withText('Tomorrow')
        this.tomorrowLink = Selector('h2').withText('Tomorrow')
    }

    async NavigateToTomorrow (){
        //await t
            t.click(this.upcomingButton)
            t.click(this.tomorrowLink)
    } 
}
export default new CommonPage