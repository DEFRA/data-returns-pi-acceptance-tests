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
    And I am on the "Releases to air" substances page
    And I select the "Releases to air" delete substance link
    And I am on the "Releases to air" delete page
    And I confirm removal of substance for "Releases to air"
    And I am on the "Releases to air" substances page
    And I select the "Releases to air" delete substance link
    And I am on the "Releases to air" delete page
    And I confirm removal of substance for "Releases to air"
    And I logout


  Scenario: Delete added release to land substances
    When I select the "Releases to land" task-list section
    And I am on the "Releases to land" substances page
    And I select the "Releases to land" delete substance link
    And I am on the "Releases to land" delete page
    And I confirm removal of substance for "Releases to land"
    And I am on the "Releases to land" substances page
    And I select the "Releases to land" delete substance link
    And I am on the "Releases to land" delete page
    And I confirm removal of substance for "Releases to land"
    And I logout


  Scenario: Delete added controlled water substances
    When I select the "Releases to controlled waters" task-list section
    And I am on the "Releases to controlled waters" substances page
    And I select the "Releases to controlled waters" delete substance link
    And I am on the "Releases to controlled waters" delete page
    And I confirm removal of substance for "Releases to controlled waters"
    And I am on the "Releases to controlled waters" substances page
    And I select the "Releases to controlled waters" delete substance link
    And I am on the "Releases to controlled waters" delete page
    And I confirm removal of substance for "Releases to controlled waters"
    And I logout


  Scenario: Delete added off-site transfer substances
    When I select the "Off-site transfers in wastewater" task-list section
    And I am on the "Off-site transfers in wastewater" substances page
    And I select the "Off-site transfers in wastewater" delete substance link
    And I am on the "Off-site transfers in wastewater" delete page
    And I confirm removal of substance for "Off-site transfers in wastewater"
    And I am on the "Off-site transfers in wastewater" substances page
    And I select the "Off-site transfers in wastewater" delete substance link
    And I am on the "Off-site transfers in wastewater" delete page
    And I confirm removal of substance for "Off-site transfers in wastewater"
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




