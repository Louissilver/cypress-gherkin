Feature: ToDo

  Background:
    Given I access the todo page

  Scenario: Create new todo
    When I fill a new todo with "New Task"
    Then I must see the new todo "New Task" in the list