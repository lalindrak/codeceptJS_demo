const { I, loginPage } = inject();

Given('I navigate to the login page', () => {
    loginPage.navigateToLoginPage()
});
When('I enter {string} as username and {string} as password', (username, password) => {
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
});
When('I enter submit button', () => {
    loginPage.clickBtnSubmit()
});
Then('error message should be displayed as {string}', async (expectedError) => {
    let errorMessage = await loginPage.getErrorMessageInfo()
    I.assert(errorMessage, expectedError, 'Username and/or password invalid')
});
Then('page title should be equal to {string}', async (expectedTitle) => {
    let actualTitle = await loginPage.getPageTitle()
    I.assertStringIncludes(actualTitle,expectedTitle,'Expected title is not shown')
});



