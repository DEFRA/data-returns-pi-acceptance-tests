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
    And I select the release to air no radio button
    And I logout


  Scenario: Enter release to land data as a new user
    When I select release to land section
    And I am on the release to land challenge page
    And I select the release to land no radio button
    And I logout


  Scenario: Enter release to controlled water data as a new user
    When I select release to controlled water section
    And I am on the release to water challenge page
    And I select the release to water no radio button
    And I logout

  Scenario: Enter off-site transfer in water waste data as a new user
    When I select off-site transfer in water waste section
    And I am on the off-site transfer in water waste challenge page
    And I select the off-site transfer in ww no radio button
    And I logout

  Scenario: Enter waste transfer data as a new user
    When I select the waste transfer section
    And I am on the waste transfer challenge page
    And I select the waste transfer no radio button
    And I logout



