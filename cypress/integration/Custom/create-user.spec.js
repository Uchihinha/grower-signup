/// <reference types="Cypress" />

describe('Create User', () => {
  const name = 'Gabriel Jorge';
  const address = 'Carlos Smith, 10';
  const phoneNumber = '(15) 9 9105-5128';
  const gender = 'Male';
  const batchsHandled = '10';
  const yieldAcquired = '10';
  const greenhouseLocations = ['Toronto', 'Ottawa'];

  it('initializing', () => {
    cy.visit('/');

    cy.get('.mat-raised-button').click();
    cy.get('.create-user-dialog').should('exist');
  });

  it('validating empty form', () => {
    cy.get('.form-footer > .mat-primary').click();
    cy.validateForm(5);
  });

  it('validating new grower fields', () => {
    cy.get('#mat-select-0').click().get('mat-option').contains('Grower').click();

    cy.get('[ng-reflect-label="Batchs Handled"]').should('exist');
    cy.get('[ng-reflect-label="Yield Acquired (kg)"]').should('exist');
    cy.get('[ng-reflect-label="Greenhouse Locations"]').should('exist');
  });

  it('validating empty grower form', () => {
    cy.get('.form-footer > .mat-primary').click();
    cy.validateForm(7);
  });

  it('submiting a valid grower form', () => {
    cy.get('[ng-reflect-label="Name"]').type(name);
    cy.get('[ng-reflect-label="Address"]').type(address);
    cy.get('[ng-reflect-label="Phone Number"]').type(phoneNumber);

    cy.get('[ng-reflect-label="Gender"]').click().get('mat-option').contains(gender).click();

    cy.get('[ng-reflect-label="Batchs Handled"]').type(batchsHandled);
    cy.get('[ng-reflect-label="Yield Acquired (kg)"]').type(yieldAcquired);

    cy.get('[ng-reflect-label="Greenhouse Locations"]').click().then(() => {
      greenhouseLocations.forEach(location => {
        cy.get('mat-option').contains(location).click();
      });
    });

    cy.get('.cdk-overlay-transparent-backdrop').click();

    cy.get('.form-footer > .mat-primary').click();
  });

  it('validating created user details', () => {
    cy.get('[ng-reflect-name="name"]').should('have.value', name);
    cy.get('[ng-reflect-name="address"]').should('have.value', address);
    cy.get('[ng-reflect-name="phone_number"]').should('have.value', phoneNumber);

    cy.get('[ng-reflect-label="Gender"] > .field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
      .should('contain', gender);

    cy.get('[ng-reflect-name="batchs_handled"]').should('have.value', batchsHandled);
    cy.get('[ng-reflect-name="yield_acquired"]').should('have.value', yieldAcquired);

    const el =
      cy.get('app-select-input.ng-star-inserted > .field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
    greenhouseLocations.forEach(location => {
      el.should('contain', location);
    });
  });
});
