const buttons = [
  {
    status: 'success',
    content: 'Success toast',
    id: 'button_success',
  },
  {
    status: 'info',
    content: 'Info toast',
    id: 'button_info',
  },
  {
    status: 'warning',
    content: 'Warning toast',
    id: 'button_warning',
  },
  {
    status: 'error',
    content: 'Error toast',
    id: 'button_error',
  },
];

describe('Toast E2E', () => {
  it('should have buttons', () => {
    cy.visit('/');

    for (const button of buttons) {
      cy.get(`#${button.id}`).should('have.text', `Show ${button.status} toast`);
    }
  });

  it('should open all toasts', () => {
    for (const button of buttons) {
      cy.get(`#${button.id}`).should('have.text', `Show ${button.status} toast`).click();

      cy.get('#toast-list_container');
      cy.get('#toast');
      cy.get('#toast_header').should('have.text', 'Toast Header');
      cy.get('#toast_content').should('have.text', `${button.content}`); // !not passed
      cy.get('#toast_icon');
      cy.get('#close_icon');
    }
  });

  it('should open 3 same toast', () => {
    for (let i = 0; i < 3; i++) {
      cy.get('#button_success').click();
    }

    cy.get('#toast').should('have.length', 3); // !not passed
    cy.get('#toast_content').should('have.text', 'Success toast');
  });

  it('should close toast', () => {
    cy.get('#button_success').click();
    cy.get('#close_icon').click();
    cy.get('#toast').should('not.exist'); //! not passed
  });

  it('should auto close toast', () => {
    cy.wait(5000);
    cy.get('#button_success').click();
    cy.wait(5000);
    cy.get('#toast').should('not.exist');
  });
});
