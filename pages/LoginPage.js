const { I } = inject();

module.exports = {
  locators: {
    txtUsername: "//input[@ng-model='user.name']",
    txtPassword: "//input[@ng-model='user.password']",
    btnSubmit: "//button[@type='submit']",
    lblError: "//p[@class='error-message ng-binding']"
  },
  fillUsername(username) {
    I.fillField(this.locators.txtUsername, username)
  },
  fillPassword(password) {
    I.fillField(this.locators.txtPassword, password)
  },
  clickBtnSubmit() {
    I.click(this.locators.btnSubmit)
  },
  navigateToLoginPage() {
    I.amOnPage('/login')
  },
  async getErrorMessageInfo(){
    return await I.grabTextFrom(this.locators.lblError)
  },
  async getPageTitle(){
    return I.getCurrentUrl()
  }
}
