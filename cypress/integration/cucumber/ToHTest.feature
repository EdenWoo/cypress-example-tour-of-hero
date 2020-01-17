Feature: ToHTestFeature
  Test ToH Feature

  Scenario: Add New Hero
    Given I visit ToH site
    Given I click Heroes link
    And I add new Hero with name "kapil"

