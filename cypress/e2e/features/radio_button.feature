Funcionalidade: Testar botões de rádio no site DemoQA

  Contexto:
    Given que acesso a página de botões de rádio

  Cenário: Selecionar "Yes" e verificar a resposta
    Quando seleciono a opção "Yes"
    Entao a mensagem exibida deve ser "Yes"

  Cenário: Selecionar "Impressive" e verificar a resposta
    Quando seleciono a opção "Impressive"
    Entao a mensagem exibida deve ser "Impressive"

  Cenário: Verificar que a opção "No" está desabilitada
    Entao a opção "No" deve estar desabilitada

  Cenário: Tentar clicar em "No" mesmo desabilitado
    Quando tento clicar na opção "No" à força
    Entao a mensagem de resposta não deve aparecer

  Cenário: Verificar que nenhuma opção está selecionada inicialmente
    Entao nenhuma mensagem de resposta deve estar visível
