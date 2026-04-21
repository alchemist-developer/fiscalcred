describe('Fiscal Cred content and rendering', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the expected page metadata and core shell', () => {
    cy.title().should('match', /Fiscal\s?Cred/i);
    cy.get('meta[name="description"]').should('have.attr', 'content').and('include', 'Contabilidade');
    cy.get('link[rel="icon"]').should('have.length.at.least', 1);
    cy.get('#app').should('not.be.empty');
  });

  it('renders all primary sections in the expected order', () => {
    [
      'home',
      'como-funciona',
      'para-quem',
      'servicos',
      'sobre',
      'contato',
      'mapa'
    ].forEach((id) => {
      cy.get(`#${id}`).should('exist').and('be.visible');
    });
  });

  it('renders key business content that should not disappear in production', () => {
    [
      'Sua Empresa sem complicação',
      'Empresas que caminham com a FiscalCred',
      'Soluções estratégicas',
      'Serviços Oferecidos',
      'Conheça o time que cuida da sua empresa'
    ].forEach((text) => {
      cy.contains(text).scrollIntoView().should('be.visible');
    });
  });

  it('renders the clients marquee with duplicated items for continuous motion', () => {
    cy.get('.logo-track span').should('have.length', 8);
    cy.get('.logo-track').should('contain.text', 'Gordinho Guincho');
    cy.get('.logo-track').should('contain.text', 'Crew Empresarial');
    cy.get('.logo-track').should('contain.text', 'Ruiz Pinturas');
    cy.get('.logo-track').should('contain.text', 'Martinelli Morrone');
  });

  it('renders service cards with images and contact links', () => {
    cy.get('.service-card').should('have.length', 6);

    cy.get('.service-card').each(($card) => {
      cy.wrap($card).find('img').should('have.attr', 'src').and('match', /^https:\/\//);
      cy.wrap($card).find('a[href="#contato"]').should('exist');
    });
  });

  it('renders founder cards with the expected production photos', () => {
    cy.contains('.founder-card', 'Gilmar')
      .find('.founder-photo')
      .should('have.attr', 'src', 'https://fiscalcred.com/wp-content/uploads/2026/03/2-1.png');

    cy.contains('.founder-card', 'Renata')
      .find('.founder-photo')
      .should('have.attr', 'src', 'https://fiscalcred.com/wp-content/uploads/2026/03/3-1.png');
  });
});
