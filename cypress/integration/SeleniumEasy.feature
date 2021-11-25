Feature: Selenium Easy WebPage Automation

Background: Authentication is successful
    Given I open the 'SeleniumEasy' demo page

Scenario: Open and close a Javascript promt
    When I expand the 'Alerts & Modals' menu
    Then I click on the 'Javascript Alerts' option
    And I can say Hi to GitHubActions
    
