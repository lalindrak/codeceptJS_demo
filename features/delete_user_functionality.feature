Feature: Verfify the delete user functionality of the system
    In order to remove users
    As an owner
    I should be able to detele users from the sytem successfully

    Background:
        Given I navigate to the login page
        And I enter 'Luke' as username and 'Skywalker' as password
        When I enter submit button
        Then greeting message should be displayed as 'Hello Luke'

    Scenario: Verify the user can delete users successfully
        And I enter create button
        Given I add all the fields to create the new user

            | firstName | lastName | startDate  | email              |
            | test123  | test543 | 2020-12-03 | lalindra@gmail.com |

        When I enter Add button
        Then I should be able to add 'test123 test543' successfully
        And I click on added user 'test123 test543'
        And I delete the user by clicking on delete button and accepting popup
