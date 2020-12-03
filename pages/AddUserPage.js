const { I } = inject();

module.exports = {
    locators: {
        txtFirstname: "//input[@ng-model='selectedEmployee.firstName']",
        txtLastname: "//input[@ng-model='selectedEmployee.lastName']",
        txtStartdate: "//input[@ng-model='selectedEmployee.startDate']",
        txtEmail: "//input[@ng-model='selectedEmployee.email']",
        btnAdd:"//button[text()='Add']",
        btnCancel:"//a[@class='subButton bCancel']"
    },
    fillFirstname(firstName){
        I.fillField(this.locators.txtFirstname,firstName)
    },
    fillLastname(lastName){
        I.fillField(this.locators.txtLastname,lastName)
    },
    fillStartdate(startDate){
        I.fillField(this.locators.txtStartdate,startDate)
    },
    fillEmail(email){
        I.fillField(this.locators.txtEmail,email)
    },
    clickBtnAdd(){
        I.click(this.locators.btnAdd)        
    },
    clickBtnCancel(){
        I.click(this.locators.btnCancel)
    }
}