/// <reference types="cypress" />

context('Text Box Form - Validations', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
  })

  it('Test_TextBox-1 - Validar preenchimento completo e envio', () => {
    cy.get('#userName').type('Rodrigo Barbosa')
    cy.get('#userEmail').type('rodrigo@barbosa.com')
    cy.get('#currentAddress').type('Rua Exemplo, 123')
    cy.get('#permanentAddress').type('Rua Fixa, 456')
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
    cy.get('#name').should('contain', 'Rodrigo Barbosa')
    cy.get('#email').should('contain', 'rodrigo@barbosa.com')
  })

  it('Test_TextBox-2 - Validar que não exibe dados no output com campos vazios', () => {
    cy.get('#submit').click()
    cy.get('#output').should('exist')
    cy.get('#output').invoke('text').then(text => {
      expect(text.trim()).to.be.empty
    })
  })

  it('Test_TextBox-3 - Validar submissão de e-mail inválido', () => { //Então, o  teste deve dar erro.
    cy.get('#userName').type('Rodrigo Barbosa')
    cy.get('#userEmail').type('email-invalido')
    cy.get('#currentAddress').type('Rua Exemplo, 123')
    cy.get('#permanentAddress').type('Rua Fixa, 456')

    cy.get('#submit').click()

    cy.get('#output').should('exist').and('be.visible')
    cy.get('#email').should('contain', 'email-invalido')  // aqui verifica o email no output e comunica que o email é inválido
  })

  it('Test_TextBox-4 - Validar envio apenas com campos obrigatórios', () => {
    cy.get('#userName').type('Rodrigo Barbosa')
    cy.get('#userEmail').type('rodrigo@barbosa.com')
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

  it('Test_TextBox-5 - Validar preenchimento com informações longas', () => {
    const textoLongo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(5)
    cy.get('#userName').type('Rodrigo Barbosa')
    cy.get('#userEmail').type('rodrigo@barbosa.com')
    cy.get('#currentAddress').type(textoLongo)
    cy.get('#permanentAddress').type(textoLongo)
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

})
