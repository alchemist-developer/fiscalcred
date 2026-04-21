describe('Fiscal Cred interactions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens FAQ items and updates accessibility state', () => {
    cy.get('.faq-item').first().as('firstFaq');

    cy.get('@firstFaq').find('.faq-answer').should('not.be.visible');
    cy.get('@firstFaq').find('.faq-question').should('have.attr', 'aria-expanded', 'false');

    cy.get('@firstFaq').find('.faq-question').click();

    cy.get('@firstFaq').should('have.class', 'active');
    cy.get('@firstFaq').find('.faq-question').should('have.attr', 'aria-expanded', 'true');
    cy.get('@firstFaq').find('.faq-answer').should('be.visible');
  });

  it('animates stats counters after the stats section becomes visible', () => {
    cy.get('.stats').scrollIntoView();

    cy.get('.count').first().should(($counter) => {
      expect($counter.text().trim()).to.not.equal('0');
    });
  });

  it('renders the service particles canvas without blocking service links', () => {
    cy.get('.services-particles')
      .should('be.visible')
      .and(($canvas) => {
        expect($canvas[0].width).to.be.greaterThan(0);
        expect($canvas[0].height).to.be.greaterThan(0);
      });

    cy.get('.service-card-link').first().click();
    cy.location('hash').should('eq', '#contato');
  });

  it('keeps the floating WhatsApp button available', () => {
    cy.get('.whatsapp-float')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'https://wa.me/5511913286359');
  });

  it('embeds the map with the Fiscal Cred address query', () => {
    cy.get('.map-bar iframe')
      .should('have.attr', 'src')
      .and('include', 'Av.+Paulista,+1106');
  });
});
