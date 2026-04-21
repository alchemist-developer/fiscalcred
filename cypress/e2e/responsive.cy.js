describe('Fiscal Cred responsive behavior', () => {
  it('shows the full desktop navigation on wide screens', () => {
    cy.viewport(1440, 900);
    cy.visit('/');

    cy.get('.menu-toggle').should('not.be.visible');
    cy.get('header nav').should('be.visible');
    cy.get('header nav a').should('have.length.at.least', 5);
  });

  it('uses the mobile menu on small screens', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.get('.menu-toggle').should('be.visible').and('have.attr', 'aria-expanded', 'false');
    cy.get('header nav').should('not.be.visible');

    cy.get('.menu-toggle').click();

    cy.get('.menu-toggle').should('have.attr', 'aria-expanded', 'true');
    cy.get('header nav').should('be.visible');
  });

  it('stacks major grids on mobile without hiding content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.get('.service-card').should('have.length', 6);
    cy.get('.differential-card').should('have.length', 4);
    cy.get('.authority-card').should('have.length', 4);
    cy.get('.founder-card').should('have.length', 2);
  });
});
