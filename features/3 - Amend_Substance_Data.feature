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
    And I am on the release to air substance table
    And I select the release to air add substance link
    And I am on the release to air substance select page
    And I select an release to air substance
    And I am on the release to air substance details page
    And I enter a release to air substance total
    And I select a release to air substance unit
    And I select a release to air substance method
    And I click continue on the release to air substance table
    And I logout


  Scenario: Enter release to land data amend existing data
    When I select the "Releases to land" task-list section
    And I am on the release to land substance table
    And I select the release to land add substance link
    And I am on the release to land substance select page
    And I select an release to land substance
    And I am on the release to land substance details page
    And I enter a release to land substance total
    And I select a release to land substance unit
    And I select a release to land substance method
    And I click continue on the release to land substance table
    And I logout


  Scenario: Enter release to controlled water data amend existing data
    When I select the "Releases to controlled waters" task-list section
    And I am on the release to water substance table
    And I select the release to water add substance link
    And I am on the release to water substance select page
    And I select an release to water substance
    And I am on the release to water substance details page
    And I enter a release to water substance total
    And I select a release to water substance unit
    And I select a release to water substance method
    And I click continue on the controlled water data table
    And I logout

  Scenario: Enter off-site transfer in water waste data amend existing data
    When I select the "Off-site transfers in wastewater" task-list section
    And I am on the off-site transfer in water waste substance table
    And I select the off-site transfer in water waste add substance link
    And I am on the off-site transfer in water waste substance select page
    And I select an off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance details page
    And I enter a off-site transfer in water waste substance total
    And I select a off-site transfer in water waste substance unit
    And I select a off-site transfer in water waste substance method
    And I click continue on the water waste data table
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



