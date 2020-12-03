const { I, addUserPage } = inject();

Given('I add all the fields to create the new user', (table) => {
    for (const id in table.rows) {
        if (id < 1) {
            continue; 
        }
        const cells = table.rows[id].cells;

        addUserPage.fillFirstname(cells[0].value)
        addUserPage.fillLastname(cells[1].value)
        addUserPage.fillStartdate(cells[2].value)
        addUserPage.fillEmail(cells[3].value)
    }
});
When('I enter Add button', () => {
    addUserPage.clickBtnAdd()
});
When('I enter Cancel button', () => {
    addUserPage.clickBtnCancel()
});