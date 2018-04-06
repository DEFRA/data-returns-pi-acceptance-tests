Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit

  # FIXME, need to check nace/nose summary tables contain the values we added.  allow value to be passed in from feature file

  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I select an unsubmitted permit
    Then I am on the task-list page

  Scenario: Add or check my nace details
    When  I select the "NACE code" task-list section
    And I am on the nace page
    And I enter the nace value
    And I am on nace summary
    And I logout

  Scenario: Add or check my nose details
    When  I select the "NOSE-P code(s)" task-list section
    And I am on the nose page
    And I enter the nose value
    And I am on nose summary
    And I logout
