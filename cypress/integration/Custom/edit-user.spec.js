/// <reference types="Cypress" />

describe('Edit User', () => {
  let userId;
  let oldName;

  it('getting editable user', () => {
    cy.getUsers()
      .then((res) => {
        userId = res.body[0].id
        oldName = res.body[0].name
      });
  });

  it('visiting edit page', () => {
    cy.route2(`http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('getUser');

    cy.visit(`/details/${userId}`);

    cy.wait('@getUser').its('response.statusCode').should('oneOf', [200, 304]);
  });

  it('editing user', () => {
    cy.route2('PUT', `http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('putUser');

    cy.get('[ng-reflect-label="Name"]').type('1');

    cy.get('.form-footer > .mat-primary').click();

    cy.wait('@putUser').its('response.statusCode').should('oneOf', [200]);
  });

  it('validating edited user', () => {
    cy.route2(`http://6024663636244d001797ac03.mockapi.io/user/${userId}`).as('getUser');

    cy.visit(`/details/${userId}`);

    cy.wait('@getUser').its('response.statusCode').should('oneOf', [200, 304]);

    cy.get('[ng-reflect-name="name"]').should('have.value', oldName + '1');
  });
});
