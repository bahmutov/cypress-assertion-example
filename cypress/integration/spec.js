/// <reference path="../index.d.ts" />

// @ts-check

describe('list', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })
  it('has ID', () => {
    cy.get('ul')
      .should('have.id', 'data-attributes')
      // note: you need to use the computed CSS style value
      .and('have.css', 'list-style', 'outside none square')
  })

  context('item', () => {
    it('has lowercase test id data attribute', () => {
      cy.contains('li', 'first')
        .should('have.attr', 'data-test-id')
        // validate the property is a lowercase string
        .should('be.a', 'string')
        .and('match', /^[a-z]+$/)
    })

    it('has some test id data attribute', () => {
      cy.contains('li', 'first').should('have.attr', 'data-test-id')
      cy.contains('li', 'first')
        // note: you need to use the computed CSS style value
        .should('have.css', 'font-weight', '700')
    })

    it('has some test id and CSS', () => {
      cy.contains('li', 'first').should(($li) => {
        expect($li).to.have.attr('data-test-id')
        expect($li).to.have.css('font-weight', '700')
        // use our custom assertion
        expect($li).to.have.testId('first')
        // try negative assertion
        expect($li).to.not.have.testId('second')
      })
    })

    it('has some test id and CSS using custom assertion', () => {
      cy.contains('li', 'first')
        .should('have.testId')
        // our custom "testId" assertion keeps the original subject
        .and('have.css', 'list-style', 'outside none square')
    })

    // test to show the error message
    it.skip('has a wrong test id and CSS using custom assertion', () => {
      cy.contains('li', 'first')
        .should('have.testId', 'invalid')
        // our custom "testId" assertion keeps the original subject
        .and('have.css', 'list-style', 'outside none square')
    })

    it('has the expected test id and CSS using custom assertion', () => {
      cy.contains('li', 'first')
        .should('have.testId', 'first')
        // our custom "testId" assertion keeps the original subject
        .and('have.css', 'list-style', 'outside none square')
    })
  })
})
