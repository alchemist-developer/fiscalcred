const whatsappHref = 'https://wa.me/5511913286359?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es';
const instagramHref = 'https://www.instagram.com/fiscalcred.solucoes/';

describe('Fiscal Cred navigation links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('keeps every WhatsApp CTA pointing to the official wa.me link', () => {
    cy.get('a[href*="wa.me"]').should('have.length.at.least', 5);

    cy.get('a[href*="wa.me"]').each(($link) => {
      cy.wrap($link).should('have.attr', 'href', whatsappHref);
    });
  });

  it('keeps internal anchor links pointing to existing page sections', () => {
    cy.get('a[href^="#"]').each(($link) => {
      const href = $link.attr('href');

      expect(href, 'empty anchor').to.not.equal('#');

      const targetId = href.slice(1);
      cy.get(`#${targetId}`).should('exist');
    });
  });

  it('keeps the main action buttons mapped to the expected destinations', () => {
    cy.contains('a', 'Consultar').should('have.attr', 'href', whatsappHref);
    cy.contains('a', 'Falar no WhatsApp').should('have.attr', 'href', whatsappHref);
    cy.contains('a', 'Descubra mais').should('have.attr', 'href', '#servicos');
    cy.contains('a', 'Trabalhe Conosco').should('have.attr', 'href', '#contato');
    cy.get('.faq-aside a[href*="wa.me"]').should('have.attr', 'href', whatsappHref);
    cy.contains('a', 'Falar com o time').should('have.attr', 'href', whatsappHref);
    cy.get('.cta-actions a[href="#mapa"]').should('exist');
  });

  it('keeps footer social links pointing to the right channels', () => {
    cy.get('.footer-social')
      .should('have.attr', 'href', instagramHref)
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel')
      .and('include', 'noopener');

    cy.get('.footer-contact a[href*="wa.me"]').should('have.attr', 'href', whatsappHref);
  });

  it('opens and closes the mobile menu without breaking navigation links', () => {
    cy.viewport('iphone-x');

    cy.get('.menu-toggle')
      .should('have.attr', 'aria-expanded', 'false')
      .click()
      .should('have.attr', 'aria-expanded', 'true');

    cy.get('header nav a[href="#servicos"]').click();
    cy.get('.menu-toggle').should('have.attr', 'aria-expanded', 'false');
    cy.location('hash').should('eq', '#servicos');
  });
});
