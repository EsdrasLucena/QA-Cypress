import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de botões de rádio", () => {
  cy.visit("https://demoqa.com/radio-button");
});

When("seleciono a opção {string}", (opcao) => {
  const idMap = {
    "Yes": "yesRadio",
    "Impressive": "impressiveRadio"
  };
  cy.get(`label[for="${idMap[opcao]}"]`).click();
});

Then("a mensagem exibida deve ser {string}", (mensagemEsperada) => {
  cy.get('.text-success').should('have.text', mensagemEsperada);
});

Then("a opção {string} deve estar desabilitada", (opcao) => {
  const idMap = {
    "No": "noRadio"
  };
  cy.get(`#${idMap[opcao]}`).should('be.disabled');
});

When("tento clicar na opção {string} à força", (opcao) => {
  const idMap = {
    "No": "noRadio"
  };
  cy.get(`#${idMap[opcao]}`).click({ force: true });
});

Then("a mensagem de resposta não deve aparecer", () => {
  cy.get('.text-success').should('not.exist');
});

Then("nenhuma mensagem de resposta deve estar visível", () => {
  cy.get('.text-success').should('not.exist');
});
