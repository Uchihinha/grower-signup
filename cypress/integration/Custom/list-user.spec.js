/// <reference types="Cypress" />


describe('List User', () => {
  it('initializing', () => {
    cy.route2('http://6024663636244d001797ac03.mockapi.io/user').as('listUser');

    cy.visit('/');

    cy.wait('@listUser').its('response.statusCode').should('oneOf', [200, 304]);
  });
});
