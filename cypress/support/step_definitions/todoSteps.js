import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import todoPage from "../pages/todoPage";

Given("I access the todo page", () => {
  cy.visit("/todo");
});

When("I fill a new todo with {string}", todo => {
  todoPage.fillNewTodo(`${todo}{enter}`);
});

Then("I must see the new todo {string} in the list", todo => {
  todoPage.validateNewTodo(todo);
});
