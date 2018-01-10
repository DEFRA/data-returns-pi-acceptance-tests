Feature: Login to PI frontend
  As a user I want to be able to login to he PI frontend
  So that I can enter PI waste data as a new or returning user


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I continue to all sectors
    And I am on all sectors page


  Scenario: Enter waste transfer data as a new user
    When I select the waste transfer section
    And I am on the waste transfer challenge page
    And I select the waste transfer yes radio button
    And I am on the waste transfer add page
    And I enter a EWC code
    And I enter a WFD code
    And I enter a waste transfer total
    And I am on the waste transfer table
    And I logout

  Scenario: Enter waste transfer as an existing user
    When I select the waste transfer section
    And I am on the waste transfer table
    And I select the add waste transfer link
    And I am on the waste transfer add page
    And I enter a EWC code
    And I enter a WFD code
    And I enter a waste transfer total
    And I am on the waste transfer table
    And I logout

  Scenario: Delete waste transfer
    When I select the waste transfer section
    And I am on the waste transfer table
    And I delete a waste transfer
    And I am on the waste transfer delete confirmation page
    And I select the waste transfer remove button
    And I am on the waste transfer table
    And I delete a waste transfer
    And I am on the waste transfer delete confirmation page
    And I select the waste transfer remove button
    And I continue to all sectors
    And I logout
