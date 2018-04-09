Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I open the submission for permit 42355
#    And I select an unsubmitted permit
    Then I am on the task-list page


  Scenario: Enter release to air data as a new user
    When I select the "Releases to air" task-list section
    And I am on the "Releases to air" challenge page
    And I answer no to the "Releases to air" challenge
    And I logout


  Scenario: Enter release to land data as a new user
    When I select the "Releases to land" task-list section
    And I am on the "Releases to land" challenge page
    And I answer no to the "Releases to land" challenge
    And I logout


  Scenario: Enter release to controlled water data as a new user
    When I select the "Releases to controlled waters" task-list section
    And I am on the "Releases to controlled waters" challenge page
    And I answer no to the "Releases to controlled waters" challenge
    And I logout

  Scenario: Enter off-site transfer in water waste data as a new user
    When I select the "Off-site transfers in wastewater" task-list section
    And I am on the "Off-site transfers in wastewater" challenge page
    And I answer no to the "Off-site transfers in wastewater" challenge
    And I logout

  Scenario: Enter waste transfer data as a new user
    When I select the "Off-site waste transfers" task-list section
    And I am on the waste transfer challenge page
    And I select the waste transfer no radio button
    And I logout
