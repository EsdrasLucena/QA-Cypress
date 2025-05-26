# language: pt

Funcionalidade: Formulário Text Box - DemoQA
  Descrição: Cenários para testar o preenchimento e validação do formulário de texto.

Contexto: Acessar a página de formulário
  Dado que eu acesso a página de formulário Text Box

Cenário: Preencher todos os campos com dados válidos e submeter
  Quando eu preencher o campo nome com "Rodrigo Barbosa"
  E eu preencher o campo email com "rodrigo@barbosa.com"
  E eu preencher o campo endereço atual com "Rua das Laranjeiras, 987"
  E eu preencher o campo endereço permanente com "Avenida Central, 456"
  E eu clicar em submeter
  Então o sistema deve exibir os dados preenchidos corretamente

Cenário: Deixar campo obrigatório vazio e verificar submissão
  Quando eu preencher o campo nome com "Rodrigo Barbosa"
  E eu deixar o campo email vazio
  E eu preencher o campo endereço atual com "Travessa das Oliveiras, 321"
  E eu preencher o campo endereço permanente com "Estrada do Sol, 654"
  E eu clicar em submeter
  Então o sistema deve exibir os dados, mas o email não deve conter "@"

Cenário: Validar campo de e-mail com dado inválido
  Quando eu preencher o campo nome com "Rodrigo Barbosa"
  E eu preencher o campo email com "email-invalido"
  E eu preencher o campo endereço atual com "Rua das Rosas, 111"
  E eu preencher o campo endereço permanente com "Avenida Atlântica, 222"
  E eu clicar em submeter
  Então o sistema deve exibir o email "email-invalido" no resultado

Cenário: Submissão sem preencher nenhum campo
  Quando eu clicar em submeter
  Então o sistema deve exibir o resultado mesmo sem dados preenchidos

Cenário: Submissão com dados longos
  Quando eu preencher o campo nome com "Rodrigo Barbosa"
  E eu preencher o campo email com "rodrigo@barbosa.com"
  E eu preencher o campo endereço atual com um texto muito longo
  E eu preencher o campo endereço permanente com um texto muito longo
  E eu clicar em submeter
  Então o sistema deve exibir o endereço longo no resultado
