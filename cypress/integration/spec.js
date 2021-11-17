/// <reference types="cypress" />

describe('list', () => {
  beforeEach(() => {
    cy.visit('cypress/integration/index.html')
  })
  it('has ID', () => {
    cy.get('ul')
      .should('have.id', 'data-attributes')
      .and('have.css', 'list-style', 'outside none square')
  })

  context('item', () => {
    it('has test id data attribute', () => {
      cy.contains('li', 'first').should('have.attr', 'data-test-id', 'first')
      cy.contains('li', 'first').and('have.css', 'font-weight', '700')
    })
  })
})
