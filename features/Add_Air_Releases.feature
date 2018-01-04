Feature: Login to PI frontend
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data as a new or returning user


  Background:
    Given I am on the login page
    And  I submit a username and password
    And I am on the landing page
    And I continue to all sectors
    And I am on all sectors page



  Scenario: Enter release to air data as a new user
    When I select release to air section
    And I am on the release to air challenge page
    And I select the release to air yes radio button
    And I am on the release to air substance select page
    And I select an release to air substance
    And I am on the release to air substance details page
    And I enter a release to air substance total
    And I select a release to air substance unit
    And I select a release to air substance method
    And I logout



  Scenario: Enter release to air data as an existing user
    When I select release to air section
    And I am on the release to air substance table
    And I select the release to air add substance link
    And I am on the release to air substance select page
    And I select an release to air substance
    And I am on the release to air substance details page
    And I enter a release to air substance total
    And I select a release to air substance unit
    And I select a release to air substance method
    And I logout


  Scenario: Delete addded substances
    When I select release to air section
    And I am on the release to air substance table
    And I delete a release to air substance
    And I am on the release to air substance delete confirmation page
    And I select the release to air substance remove button
    And I am on the release to air substance table
    And I delete a release to air substance
    And I am on the release to air substance delete confirmation page
    And I select the release to air substance remove button
    And I continue to all sectors
    And I logout
