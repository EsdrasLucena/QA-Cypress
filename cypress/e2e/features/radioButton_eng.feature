Feature: Testar botões de rádio no site DemoQA

  Background:
    Given que acesso a página de botões de rádio

  Scenario: Selecionar "Yes" e verificar a resposta
    When seleciono a opção "Yes"
    Then a mensagem exibida deve ser "Yes"

  Scenario: Selecionar "Impressive" e verificar a resposta
    When seleciono a opção "Impressive"
    Then a mensagem exibida deve ser "Impressive"

  Scenario: Verificar que a opção "No" está desabilitada
    Then a opção "No" deve estar desabilitada

  Scenario: Tentar clicar em "No" mesmo desabilitado
    When tento clicar na opção "No" à força
    Then a mensagem de resposta não deve aparecer

  Scenario: Verificar que nenhuma opção está selecionada inicialmente
    Then nenhuma mensagem de resposta deve estar visível
