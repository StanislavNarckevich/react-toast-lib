import 'cypress-storybook/cypress'

describe('Toast E2E', ()=> {
  it('should have button', ()=>{
    cy.visit('/');

    cy.get("button.buttonT").should('have.text', 'Show toast')
  })
})