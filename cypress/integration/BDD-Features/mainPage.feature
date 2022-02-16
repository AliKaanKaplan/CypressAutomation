Feature: Main Page Suite

    @regression
    Scenario: Valid Login
        Given I open login page
        When I fill and submit login
        Then I should see error