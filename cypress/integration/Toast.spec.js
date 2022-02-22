import 'cypress-storybook/cypress'

describe('Toast E2E', ()=> {
  it('should have button', ()=>{
    cy.visit('/');

    cy.get("button").should('have.text', 'Show toast');
  });

  it('should open toast', ()=>{
    cy.get("button").should('have.text', 'Show toast').click();

    cy.get('#toast-list_container');
    cy.get('#toast');
    cy.get('#toast_header');
    cy.get('#toast_content');
    cy.get('#toast_icon');
    cy.get('#close_icon');
  })
})