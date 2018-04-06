Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit

  # FIXME: There needs to be some logic to what is added and removed.  E.g. add 3 substances, delete 2, check resulting table

  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    # FIXME: Remove dependency on previous features
    And I open the submission for permit 42355
#    And I select an unsubmitted permit
    Then I am on the task-list page


  Scenario: Delete added release to air substances
    When I select the "Releases to air" task-list section
    And I am on the release to air substance table
    And I delete a release to air substance
    And I am on the release to air substance delete confirmation page
    And I select the release to air substance remove button
    And I am on the release to air substance table
    And I delete a release to air substance
    And I select the release to air substance remove button
    And I logout


  Scenario: Delete added release to land substances
    When I select the "Releases to land" task-list section
    And I am on the release to land substance table
    And I delete a release to land substance
    And I am on the release to land substance delete confirmation page
    And I select the release to land substance remove button
    And I am on the release to land substance table
    And I delete a release to land substance
    And I am on the release to land substance delete confirmation page
    And I select the release to land substance remove button
    And I logout


  Scenario: Delete added controlled water substances
    When I select the "Releases to controlled waters" task-list section
    And I am on the release to water substance table
    And I delete a release to water substance
    And I am on the release to water substance delete confirmation page
    And I select the release to water substance remove button
    And I am on the release to water substance table
    And I delete a release to water substance
    And I am on the release to water substance delete confirmation page
    And I select the release to water substance remove button
    And I logout


  Scenario: Delete added off-site transfer substances
    When I select the "Off-site transfers in wastewater" task-list section
    And I am on the off-site transfer in water waste substance table
    And I delete a off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance delete confirmation page
    And I select the off-site transfer in water waste substance remove button
    And I am on the off-site transfer in water waste substance table
    And I delete a off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance delete confirmation page
    And I select the off-site transfer in water waste substance remove button
    And I logout


  Scenario: Delete waste transfer substances
    When I select the "Off-site waste transfers" task-list section
    And I am on the waste transfer table
    And I delete a waste transfer
    And I am on the waste transfer delete confirmation page
    And I select the waste transfer remove button
    And I am on the waste transfer table
    And I delete a waste transfer
    And I am on the waste transfer delete confirmation page
    And I select the waste transfer remove button
    And I logout




