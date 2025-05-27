describe('Botões de Rádio - DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/radio-button');
  });

  it('Seleciona "Yes" e verifica a resposta', () => {
    cy.get('label[for="yesRadio"]').click();
    cy.get('.text-success').should('have.text', 'Yes');
  });

  it('Seleciona "Impressive" e verifica a resposta', () => {
    cy.get('label[for="impressiveRadio"]').click();
    cy.get('.text-success').should('have.text', 'Impressive');
  });

  it('Verifica que "No" está desabilitado', () => {
    cy.get('#noRadio').should('be.disabled');
  });

  it('Tenta clicar em "No" com force e verifica se não há resposta', () => {
    cy.get('#noRadio').click({ force: true });
    cy.get('.text-success').should('not.exist');
  });

  it('Verifica que nenhuma opção está selecionada inicialmente', () => {
    cy.get('.text-success').should('not.exist');
  });
});
