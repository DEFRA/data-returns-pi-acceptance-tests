Feature: Login to PI frontend and submit substance data
  As a user I want to be able to login to he PI frontend
  So that I can enter PI air release data and submit


  Background:
    Given I am on the login page
    And I submit a username and password
    And I am on the landing page
    And I select an unsubmitted permit
    Then I am on the task-list page


  Scenario: Check data before submitting
    # Add nace and nose
    When  I select the "NACE code" task-list section
    And I am on the nace page
    And I enter the nace value
    And I am on nace summary

    When I continue to the task list
    And  I select the "NOSE-P code(s)" task-list section
    And I am on the nose page
    And I enter the nose value
    And I am on nose summary

    # Add releases to air
    When I continue to the task list
    And I select the "Releases to air" task-list section
    And I am on the release to air challenge page
    And I select the release to air yes radio button
    And I am on the release to air substance select page
    And I select an release to air substance
    And I am on the release to air substance details page
    And I enter a release to air substance total
    And I select a release to air substance unit
    And I select a release to air substance method
    Then I am on the release to air substance table

    # Add releases to land
    When I continue to the task list
    And I select the "Releases to land" task-list section
    And I am on the release to land challenge page
    And I select the release to land yes radio button
    And I am on the release to land substance select page
    And I select an release to land substance
    And I am on the release to land substance details page
    And I enter a release to land substance total
    And I select a release to land substance unit
    And I select a release to land substance method
    Then I am on the release to land substance table

    # Add releases to water
    When I continue to the task list
    And I select the "Releases to controlled waters" task-list section
    And I am on the release to water challenge page
    And I select the release to water yes radio button
    And I am on the release to water substance select page
    And I select an release to water substance
    And I am on the release to water substance details page
    And I enter a release to water substance total
    And I select a release to water substance unit
    And I select a release to water substance method
    Then I am on the release to water substance table

    # Off-site tranfers in waste water
    When I continue to the task list
    And I select the "Off-site transfers in wastewater" task-list section
    And I am on the off-site transfer in water waste challenge page
    And I select the off-site transfer in ww yes radio button
    And I am on the off-site transfer in water waste substance select page
    And I select an off-site transfer in water waste substance
    And I am on the off-site transfer in water waste substance details page
    And I enter a off-site transfer in water waste substance total
    And I select a off-site transfer in water waste substance unit
    And I select a off-site transfer in water waste substance method
    Then I am on the off-site transfer in water waste substance table

    # Add waste transfers
    When I continue to the task list
    And I select the "Off-site waste transfers" task-list section
    And I am on the waste transfer challenge page
    And I select the waste transfer yes radio button
    And I am on the waste transfer add page
    And I enter a EWC code
    And I enter a WFD code
    And I enter a waste transfer total
    And I am on the waste transfer table
    Then I am on the waste transfer table

    # Check submission
    When I continue to the task list
    And I select the "Check your data" task-list section
    And I am on the check data page and click accept

    # And submit!
    When I select the "Submit your data" task-list section
    And I am on the submit page and click continue
