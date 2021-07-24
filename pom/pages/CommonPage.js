import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        this.tomorrowButton = Selector('button.scheduler-suggestions-item-icon--tomorrow')
        this.tomorrowLink = Selector('a').withText('Tomorrow')
    }

    async NavigateToTomorrow (){
        await t
            .click(this.upcomingButton)
            .click(this.tomorrowLink)
    } 
}
export default new CommonPage