Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit

  # FIXME: There needs to be some logic to what is added and amended.  E.g. add 2 substances, amend 1, check resulting table

  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    # FIXME: Remove dependency on previous features
    And I open the submission for permit 42355
#    And I select an unsubmitted permit
    Then I am on the task-list page


  Scenario: Enter release to air data amend existing data
    When I select the "Releases to air" task-list section
    And I am on the "Releases to air" substances page
    And I select the "Releases to air" add substance link
    And I am on the "Releases to air" selection page
    And I select a substance for "Releases to air"
    And I am on the "Releases to air" details page
    And I enter a "Releases to air" substance total
    And I enter a "Releases to air" substance unit
    And I enter a "Releases to air" substance method
    And I confirm I want to add the specified substance to "Releases to air"
    And I click continue on the "Releases to air" substance table
    Then I am on the task-list page
    And I logout


  Scenario: Enter release to land data amend existing data
    When I select the "Releases to land" task-list section
    And I am on the "Releases to land" substances page
    And I select the "Releases to land" add substance link
    And I am on the "Releases to land" selection page
    And I select a substance for "Releases to land"
    And I am on the "Releases to land" details page
    And I enter a "Releases to land" substance total
    And I enter a "Releases to land" substance unit
    And I enter a "Releases to land" substance method
    And I confirm I want to add the specified substance to "Releases to land"
    And I click continue on the "Releases to land" substance table
    Then I am on the task-list page
    And I logout


  Scenario: Enter release to controlled water data amend existing data
    When I select the "Releases to controlled waters" task-list section
    And I am on the "Releases to controlled waters" substances page
    And I select the "Releases to controlled waters" add substance link
    And I am on the "Releases to controlled waters" selection page
    And I select a substance for "Releases to controlled waters"
    And I am on the "Releases to controlled waters" details page
    And I enter a "Releases to controlled waters" substance total
    And I enter a "Releases to controlled waters" substance unit
    And I enter a "Releases to controlled waters" substance method
    And I confirm I want to add the specified substance to "Releases to controlled waters"
    And I click continue on the "Releases to controlled waters" substance table
    Then I am on the task-list page
    And I logout

  Scenario: Enter off-site transfer in water waste data amend existing data
    When I select the "Off-site transfers in wastewater" task-list section
    And I am on the "Off-site transfers in wastewater" substances page
    And I select the "Off-site transfers in wastewater" add substance link
    And I am on the "Off-site transfers in wastewater" selection page
    And I select a substance for "Off-site transfers in wastewater"
    And I am on the "Off-site transfers in wastewater" details page
    And I enter a "Off-site transfers in wastewater" substance total
    And I enter a "Off-site transfers in wastewater" substance unit
    And I enter a "Off-site transfers in wastewater" substance method
    And I confirm I want to add the specified substance to "Off-site transfers in wastewater"
    And I click continue on the "Off-site transfers in wastewater" substance table
    Then I am on the task-list page
    And I logout

  Scenario: Enter waste transfer data amend existing data
    When I select the "Off-site waste transfers" task-list section
    And I am on the waste transfer table
    And I select the add waste transfer link
    And I am on the waste transfer add page
    And I enter a EWC code
    And I enter a WFD code
    And I enter a waste transfer total
    And I am on the waste transfer table
    And I click continue on the waste transfer table
    And I logout



