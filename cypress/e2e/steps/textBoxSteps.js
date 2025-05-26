import { Dado, Quando, Então, E } from "@badeball/cypress-cucumber-preprocessor";

Dado('que eu acesso a página de formulário Text Box', () => {
  cy.visit('https://demoqa.com/text-box');
});

Quando('eu preencher o campo nome com {string}', (nome) => {
  cy.get('#userName').type(nome);
});

Quando('eu preencher o campo email com {string}', (email) => {
  cy.get('#userEmail').type(email);
});

Quando('eu deixar o campo email vazio', () => {
  cy.get('#userEmail').clear();
});

Quando('eu preencher o campo endereço atual com {string}', (endereco) => {
  cy.get('#currentAddress').type(endereco);
});

Quando('eu preencher o campo endereço permanente com {string}', (endereco) => {
  cy.get('#permanentAddress').type(endereco);
});

Quando('eu preencher o campo endereço atual com um texto muito longo', () => {
  const longText = 'Endereço bastante extenso para teste de limite '.repeat(10);
  cy.get('#currentAddress').type(longText);
});

Quando('eu preencher o campo endereço permanente com um texto muito longo', () => {
  const longText = 'Endereço extremamente extenso para teste de limite '.repeat(10);
  cy.get('#permanentAddress').type(longText);
});

Quando('eu clicar em submeter', () => {
  cy.get('#submit').click();
});

Então('o sistema deve exibir os dados preenchidos corretamente', () => {
  cy.get('#output').should('be.visible');
});

Então('o sistema deve exibir os dados, mas o email não deve conter "@"', () => {
  cy.get('#output').should('be.visible');
  cy.get('#email').should('not.contain', '@');
});

Então('o sistema deve exibir o email {string} no resultado', (email) => {
  cy.get('#output').should('be.visible');
  cy.get('#email').should('contain', email);
});

Então('o sistema deve exibir o resultado mesmo sem dados preenchidos', () => {
  cy.get('#output').should('be.visible');
  cy.get('#name').should('contain', 'Name:');
});

Então('o sistema deve exibir o endereço longo no resultado', () => {
  cy.get('#output').should('be.visible');
  cy.get('.border').should('contain', 'Endereço bastante extenso para teste de limite');
});
