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
    And I am on nace page
    And I enter the nace value
    And I am on nace summary


    When I continue to the task list
    And I select the "NOSE-P code(s)" task-list section
    And I am on the nose page
    And I enter the nose value
    And I am on nose summary

    # Add releases to air
    When I continue to the task list
    And I select the "Releases to air" task-list section
    And I am on the "Releases to air" challenge page
    And I answer yes to the "Releases to air" challenge
    And I am on the "Releases to air" selection page
    And I select a substance for "Releases to air"
    And I am on the "Releases to air" details page
    And I enter a "Releases to air" substance total
    And I confirm I want to add the specified substance to "Releases to air"
    Then I am on the "Releases to air" substances page

    # Add releases to land
    When I continue to the task list
    And I select the "Releases to land" task-list section
    And I am on the "Releases to land" challenge page
    And I answer yes to the "Releases to land" challenge
    And I am on the "Releases to land" selection page
    And I select a substance for "Releases to land"
    And I am on the "Releases to land" details page
    And I enter a "Releases to land" substance total
    And I confirm I want to add the specified substance to "Releases to land"
    Then I am on the "Releases to land" substances page

    # Add releases to water
    When I continue to the task list
    And I select the "Releases to controlled waters" task-list section
    And I am on the "Releases to controlled waters" challenge page
    And I answer yes to the "Releases to controlled waters" challenge
    And I am on the "Releases to controlled waters" selection page
    And I select a substance for "Releases to controlled waters"
    And I am on the "Releases to controlled waters" details page
    And I enter a "Releases to controlled waters" substance total
    And I confirm I want to add the specified substance to "Releases to controlled waters"
    Then I am on the "Releases to controlled waters" substances page

    # Off-site tranfers in waste water
    When I continue to the task list
    And I select the "Off-site transfers in wastewater" task-list section
    And I am on the "Off-site transfers in wastewater" challenge page
    And I answer yes to the "Off-site transfers in wastewater" challenge
    And I am on the "Off-site transfers in wastewater" selection page
    And I select a substance for "Off-site transfers in wastewater"
    And I am on the "Off-site transfers in wastewater" details page
    And I enter a "Off-site transfers in wastewater" substance total
    And I confirm I want to add the specified substance to "Off-site transfers in wastewater"
    Then I am on the "Off-site transfers in wastewater" substances page

    # Add waste transfers
    When I continue to the task list
    And I select the "Waste transfers" task-list section
    And I select the waste transfer yes radio button
    And I am on the waste transfer add page
    And I choose the "01 01 01" EWC code
    And I choose the "D5" RD code
    And I enter a waste transfer total
    Then I am on the waste transfer table

    # Add waste transfers
    When I continue to the task list
    And I select the "Waste transfers" task-list section
    And I am on the waste transfer table
    And I select the add waste transfer link
    And I am on the waste transfer add page
    And I choose the "01 03 05" EWC code
    And I choose the "R13" RD code
    And I enter a waste transfer total
    And I am on the "Waste Transfer" challenge page
    And I answer yes to the "Waste Transfer" challenge
    And

    # Check submission
    When I continue to the task list
    And I select the "Check your data" task-list section
    And I am on the check data page and click accept

    # And submit!
    When I select the "Submit your data" task-list section
    And I am on the submit page and click continue
