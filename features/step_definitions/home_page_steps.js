const { I, homePage } = inject();

Then('greeting message should be displayed as {string}', async (actualUser) => {
    let loggedInUser = await homePage.getLoggedInUser()
    I.assert(loggedInUser, actualUser, 'Error on logged in user')
});
When('I enter logout button', () => {
    homePage.clickBtnLogout()
});
When('I enter create button', () => {
    homePage.clickBtnCreate()
});

Then('I should be able to add {string} successfully',(addedUser) => {
    I.assert(homePage.getAddedUserFromDatagrid(addedUser))
});
When('I wait to load the data grid completely', () => {
    I.assert(homePage.waitToLoadDataGrid())
});
When('I click on added user {string}',(addedUser) => {
    homePage.clickAddedUserFromDatagrid(addedUser)
});
When('I delete the user by clicking on delete button and accepting popup',async () => {
    homePage.clickBtnDelete()
    await homePage.acceptPopupWindow()
});