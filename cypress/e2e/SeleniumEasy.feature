Feature: Selenium Easy WebPage Automation

Background: Authorized access
    Given I open the 'SeleniumEasy' demo page

@skip
Scenario: Open and close a Javascript promt
    When I expand the 'Alerts & Modals' menu
    And I click on the 'Javascript Alerts' option
    And I open a "Promt" box
    # Then I can interact with the promt box
