// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("validateForm", (errorsLength) => { 
  cy.get('.mat-error').should('have.length', errorsLength);
})

Cypress.Commands.add('getUsers', () => {
  cy.request({
    method: 'GET',
    url: 'http://6024663636244d001797ac03.mockapi.io/user'
  });
});

Cypress.Commands.add('createUser', () => {
  return cy.fixture('create-user.json').then(async res => {
    await  cy.request({
      method: 'POST',
      url: 'http://6024663636244d001797ac03.mockapi.io/user',
      body: res
    });
  })
  
});
