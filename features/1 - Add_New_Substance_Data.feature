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
    When I select release to air section
    And I am on the release to air challenge page
    And I select the release to air yes radio button
    And I am on the release to air substance select page
    And I select an release to air substance
    And I am on the release to air substance details page
    And I enter a release to air substance total
    And I select a release to air substance unit
    And I select a release to air substance method
    And I click continue on the release to air substance table
    And I logout


  Scenario: Enter release to land data as a new user
    When I select release to land section
    And I am on the release to land challenge page
    And I select the release to land yes radio button
    And I am on the release to land substance select page
    And I select an release to land substance
    And I am on the release to land substance details page
    And I enter a release to land substance total
    And I select a release to land substance unit
    And I select a release to land substance method
    And I click continue on the release to land substance table
    And I logout


  Scenario: Enter release to controlled water data as a new user
    When I select release to controlled water section
    And I am on the release to water challenge page
    And I select the release to water yes radio button
    And I am on the release to water substance select page
    And I select an release to water substance
    And I am on the release to water substance details page
    And I enter a release to water substance total
    And I select a release to water substance unit
    And I select a release to water substance method
    And I click continue on the controlled water data table
    And I logout

  Scenario: Enter off-site transfer in water waste data as a new user
    When I select off-site transfer in water waste section
    And I am on the off-site transfer in water waste challenge page
    And I select the off-site transfer in ww yes radio button
    And I am on the off-site transfer in water waste substance select page
    And I select an off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance details page
    And I enter a off-site transfer in water waste substance total
    And I select a off-site transfer in water waste substance unit
    And I select a off-site transfer in water waste substance method
    And I click continue on the water waste data table
    And I logout

  Scenario: Enter waste transfer data as a new user
    When I select the waste transfer section
    And I am on the waste transfer challenge page
    And I select the waste transfer yes radio button
    And I am on the waste transfer add page
    And I enter a EWC code
    And I enter a WFD code
    And I enter a waste transfer total
    And I am on the waste transfer table
    And I click continue on the waste transfer table
    And I logout



