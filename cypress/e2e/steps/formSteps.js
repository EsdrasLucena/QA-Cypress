import { Dado, Quando, Então, E } from "@badeball/cypress-cucumber-preprocessor";import { Dado, Quando, Então, E } from "@badeball/cypress-cucumber-preprocessor";

Given ('acessar a página de novo usuário', () => {
  cy.visit('https://demoqa.com/register');
});

When('eu preencha o campo primeiro nome com {string}', (primeiroNome) => {
  cy.get('#firstName').type(primeiroNome);
});

When('eu preencher o campo último Nome com {string}', (ultimoNome) => {
  cy.get('#lastName').type(ultimoNome);
});

When('eu preencha o campo username com {string}', (usuario) => {
  cy.get('#userName').type(usuario);
});

When('eu preencha o campo senha com {string}', (senha) => {
  cy.get('#password').type(senha);
});

When('eu marque o campo não sou um robô', () => {
  cy.get('#captcha').click();
});

When('eu clique em registrar', () => {
  cy.get('#submit').click();
});

Then('o sistema deve exibir os dados preenchidos corretamente', () => {
  cy.get('#output').should('be.visible');
});

Then('o sistema deve solicitar que os campos sejam preenchidos', () => {
  cy.get('#output').should('be.visible');
  cy.get('#firstName').should('contain', 'primeiroNome:');
  cy.get('#lastName').should('contain', 'ultimoNome:');
  cy.get('#userName').should('contain', 'usuario:');
  cy.get('#password').should('contain', 'senha:');
});
