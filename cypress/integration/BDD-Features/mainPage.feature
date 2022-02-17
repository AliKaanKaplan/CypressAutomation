Feature: Main Page Suite

    @regression
    Scenario: Check Login Buttons
        Given I open home page
        Then I should see login buttons
        Then Get attr and verify