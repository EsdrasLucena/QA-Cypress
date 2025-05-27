/// <reference types="cypress" />

context('Library Login - Validations', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/login')
  })

  it('Test_Form-1 - Validar preenchimento completo e envio', () => {
    cy.visit('https://demoqa.com/register')
    cy.get('#firstName').type('Kaua')
    cy.get('#lastName').type('Madruga')
    cy.get('#userName').type('kauateste01')
    cy.get('#password').type('Kaua!0910')
    cy.get('#captcha').click()
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

 it('Test_Form-2 - Validar preenchimento incompleto e envio', () => {
    cy.visit('https://demoqa.com/register')
    cy.get('#lastName').type('Madruga')
    cy.get('#userName').type('kauateste02')
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

  it('Test_Form-3 - Validar senha fora dos padrões e envio', () => {
    cy.visit('https://demoqa.com/register')
    cy.get('#firstName').type('Kaua')
    cy.get('#lastName').type('Madruga')
    cy.get('#userName').type('kauateste03')
    cy.get('#password').type('kaua1234')
    cy.get('#captcha').click()
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

 it('Test_Form-4 - Envio sem nenhuma informação', () => {
    cy.visit('https://demoqa.com/register')
    cy.get('#submit').click()

    cy.get('#output').should('exist').should('be.visible')
  })

 it('Test_Form-5 - Login com usuário existente', () => {
    cy.get('#userName').type('kaua')
    cy.get('#password').type('Kaua!0910')
    cy.get('#login').click()
  })

})
