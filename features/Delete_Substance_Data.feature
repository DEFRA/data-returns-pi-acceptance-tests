Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I select an unsubmitted permit
    And I am on all sectors page


  Scenario: Delete addded release to air substances
    When I select release to air section
    And I am on the release to air substance table
    And I delete a release to air substance
    And I am on the release to air substance delete confirmation page
    And I select the release to air substance remove button
    And I am on the release to air substance table
    And I delete a release to air substance
    And I select the release to air substance remove button
    And I continue to all sectors
    And I logout


  Scenario: Delete addded release to land substances
    When I select release to land section
    And I am on the release to land substance table
    And I delete a release to land substance
    And I am on the release to land substance delete confirmation page
    And I select the release to land substance remove button
    And I am on the release to land substance table
    And I delete a release to land substance
    And I am on the release to land substance delete confirmation page
    And I select the release to land substance remove button
    And I continue to all sectors
    And I logout


  Scenario: Delete addded controlled water substances
    When I select release to controlled water section
    And I am on the release to water substance table
    And I delete a release to water substance
    And I am on the release to water substance delete confirmation page
    And I select the release to water substance remove button
    And I am on the release to water substance table
    And I delete a release to water substance
    And I am on the release to water substance delete confirmation page
    And I select the release to water substance remove button
    And I continue to all sectors
    And I logout


  Scenario: Delete addded off-site transfer substances
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


  Scenario: Delete waste transfer substances
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




