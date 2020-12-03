Feature: Verfify the add user functionality of the system
    In order to save users
    As an owner
    I should be able to add users to the sytem successfully

    Background:
        Given I navigate to the login page
        And I enter 'Luke' as username and 'Skywalker' as password
        When I enter submit button
        Then greeting message should be displayed as 'Hello Luke'

    Scenario: Verify the user can add new users to the system successfully
        And I enter create button
        Given I add all the fields to create the new user

            | firstName | lastName | startDate  | email              |
            | lalindra  | ret123   | 2020-12-03 | lalindra@gmail.com |

        When I enter Add button
        Then I should be able to add 'lalindra ret123' successfully

    Scenario: Verify the user is navigated back to homepage when click cancel button
        And I enter create button
        Given I add all the fields to create the new user

            | firstName | lastName | startDate  | email              |
            | lalindra  | ret123   | 2020-12-03 | lalindra@gmail.com |

        When I enter Cancel button
        And I wait to load the data grid completely