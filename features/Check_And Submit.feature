Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I select an unsubmitted permit
    And I am on all sectors page


  Scenario: Enter release to air data as a new user
    When I select check section



  Scenario: Enter release to land data as a new user
    When I select release to land section



