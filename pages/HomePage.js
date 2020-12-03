const { I } = inject();
module.exports = {
    locators: {
        lblGreetings: '#greetings',
        btnLogout: '.main-button',
        btnCreate: "//a[@class='subButton']",
        allUsersDataGrid: "//li[@ng-repeat='employee in employees']",
        btnDelete: "//a[@id='bDelete']"
    },
    async getLoggedInUser() {
        return await I.grabTextFrom(this.locators.lblGreetings)
    },
    clickBtnLogout() {
        I.click(this.locators.btnLogout)
    },
    clickBtnCreate() {
        I.click(this.locators.btnCreate)
    },
    waitToLoadDataGrid() {
        I.waitForElement(this.locators.allUsersDataGrid, 5)
    },
    getAddedUserFromDatagrid(addedUser) {
        this.waitToLoadDataGrid()
        I.seeElement(this.locators.allUsersDataGrid + "[contains(text(),'" + addedUser + "')]")
    },
    clickAddedUserFromDatagrid(addedUser) {
        I.click(this.locators.allUsersDataGrid + "[contains(text(),'" + addedUser + "')]")
    },
    clickBtnDelete() {
        I.click(this.locators.btnDelete)
    },
     acceptPopupWindow() {
        I.acceptPopup();
    },
}