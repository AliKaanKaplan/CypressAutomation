Feature: Login to Application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see error