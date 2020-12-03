
Feature: Verify the login-logout functionality of the system
  Verify login functionality of the system

  Scenario: Verify login for a correct username and password
    Given I navigate to the login page
    And I enter 'Luke' as username and 'Skywalker' as password
    When I enter submit button
    Then greeting message should be displayed as 'Hello Luke'

  Scenario: Verify login for incorrect username and password
    Given I navigate to the login page
    And I enter 'Dave' as username and '1234' as password
    When I enter submit button
    Then error message should be displayed as 'Invalid username or password!'

  Scenario: Verify logout functionality
    Given I navigate to the login page
    And I enter 'Luke' as username and 'Skywalker' as password
    When I enter submit button
    Then greeting message should be displayed as 'Hello Luke'
    When I enter logout button
    Then page title should be equal to '/login'


