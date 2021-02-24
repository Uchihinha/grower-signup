/// <reference types="Cypress" />

describe('Delete User', () => {
  let userId;

  it('getting deletable user', async () => {
    await cy.getUsers()
      .then(async (res) => {
        userId = res.body[0].id;
      });
  });

  it('visiting deletable page', () => {
    cy.route2(`http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('getUser');

    cy.visit(`/details/${userId}`);

    cy.wait('@getUser').its('response.statusCode').should('oneOf', [200, 304]);
  });

  it('deleting user', () => {
    cy.route2('DELETE', `http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('deleteUser');
      
    cy.get('.delete-icon').click();

    cy.get('.mat-warn').should('be.visible');

    cy.get('.mat-warn').click();

    cy.wait('@deleteUser').its('response.statusCode').should('oneOf', [200]);
  });

  it('validating deleted user', () => {
    cy.route2(`http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('getUser');

    cy.visit(`/details/${userId}`);

    cy.wait('@getUser').its('response.statusCode').should('oneOf', [404]);

    cy.visit(`/`);
  });
});
