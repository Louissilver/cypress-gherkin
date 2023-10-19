/// <reference types="cypress" />
import todoElements from "../elements/todoElements";

class TodoPage {
  fillNewTodo(todo) {
    cy.get(todoElements.todoInput()).clear();
    cy.get(todoElements.todoInput()).type(`${todo}{enter}`);
  }

  validateNewTodo(todo) {
    cy.get(todoElements.todoListItem()).last().should("contain.text", todo);
  }
}
export default new TodoPage();
