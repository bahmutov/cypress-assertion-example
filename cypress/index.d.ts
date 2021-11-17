/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainer<Subject> {
    /**
     * Chai assertion that checks if a given element has "data-test-id" attribute.
     * Yields subject.
     * @param testId (optional) expected data-test-id value
     * @example
     *  cy.get('#id').should('have.testId')
     *  cy.get('#id').should('have.testId', 'first')
     */
    (chainer: 'have.testId', testId?: string): Chainable<Subject>
  }
}

declare namespace Chai {
  interface Assertion {
    /**
     * Chai assertion that checks if a given element has data-test-id attribute,
     * with optional value check
     * @param testId (optional) expected data-test-id value
     * @example
     *  expect($el).to.have.testId()
     *  expect($el).to.have.testId('first')
     */
    testId(testId: string): void
  }
}
