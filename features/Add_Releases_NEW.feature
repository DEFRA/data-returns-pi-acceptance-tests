Feature: Login to PI frontend
  As a user I want to be able to login to he PI frontend
  So that I can enter PI related data as a new or returning user


  Background:
    Given I am on the login page
    And  I submit a username and password
    And I am on the landing page
    And I continue to all sectors
    And I am on all sectors page



  Scenario: Enter release to air data as a new user
    When I select release to air section
    And I am on challenge page
    And I select the yes radio button
    And I am on the release to air substance table
    And I select the add substance link
    And I am on the substance select page
    And I select a substance
    And I am on the substance details page
    And I enter a total
    And I select a unit
    And I select a method
    And I logout



  Scenario: Enter release to air data as an existing user
    When I select release to air section
    And I am on the release to air substance table
    And I select the add substance link
    And I am on the substance select page
    And I select a substance
    And I am on the substance details page
    And I enter a total
    And I select a unit
    And I select a method
    And I logout


  Scenario: Enter release to air data as an existing user
    When I select release to air section
    And I am on the release to air substance table
    And I delete a substance
    And I am on delete confirmation page

    And I am on the substance details page
    And I logout
