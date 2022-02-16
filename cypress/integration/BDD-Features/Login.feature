Feature: Login Suite

    @regression
    Scenario: Valid Login
        Given I open login page
        When I fill and submit login
        Then I should see error

    @regression
    Scenario: Valid Login with table
        Given I open login page
        When I fill with table and submit login
            | id     | pass      |
            | deneme | deneme123 |
        Then I should see error