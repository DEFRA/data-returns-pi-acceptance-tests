Feature: Login to PI frontend
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data as a new or returning user


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I continue to all sectors
    And I am on all sectors page



  Scenario: Enter release to air data as a new user
    When I select off-site transfer in water waste section
    And I am on the off-site transfer in water waste challenge page
    And I select the off-site transfer in ww yes radio button
    And I am on the off-site transfer in water waste substance select page
    And I select an off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance details page
    And I enter a off-site transfer in water waste substance total
    And I select a off-site transfer in water waste substance unit
    And I select a off-site transfer in water waste substance method
    And I logout



  Scenario: Enter release to air data as an existing user
    When I select off-site transfer in water waste section
    And I am on the off-site transfer in water waste substance table
    And I select the off-site transfer in water waste add substance link
    And I am on the off-site transfer in water waste substance select page
    And I select an off-site transfer in water waste substance
    And I am on the release to water substance details page
    And I enter a off-site transfer in water waste substance total
    And I select a off-site transfer in water waste substance unit
    And I select a off-site transfer in water waste substance method
    And I logout


  Scenario: Delete addded substances
    When I select off-site transfer in water waste section
    And I am on the off-site transfer in water waste substance table
    And I delete a off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance delete confirmation page
    And I select the off-site transfer in water waste substance remove button
    And I am on the off-site transfer in water waste substance table
    And I delete a off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance delete confirmation page
    And I select the off-site transfer in water waste substance remove button
    And I continue to all sectors
    And I logout
