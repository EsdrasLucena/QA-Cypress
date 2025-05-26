Feature: Formulário Text Box - DemoQA
  Descrição: Cenários para testar o preenchimento e validação do formulário de texto.

Background: Acessar a página de formulário
  Given eu acesso a página de formulário Text Box

Scenario: Preencher todos os campos com dados válidos e submeter
  When eu preencha o campo nome com "Rodrigo Barbosa"
  And eu preencha o campo email com "rodrigo@barbosa.com"
  And eu preencha o campo endereço atual com "Rua das Laranjeiras, 987"
  And eu preencha o campo endereço permanente com "Avenida Central, 456"
  And eu clique em submeter
  Then o sistema deve exibir os dados preenchidos corretamente

Scenario: Deixar campo obrigatório vazio e verificar submissão
  When eu preencha o campo nome com "Rodrigo Barbosa"
  And eu deixe o campo email vazio
  And eu preencha o campo endereço atual com "Travessa das Oliveiras, 321"
  And eu preencha o campo endereço permanente com "Estrada do Sol, 654"
  And eu clique em submeter
  Then o sistema deve exibir os dados, mas o email não deve conter "@"

Scenario: Validar campo de e-mail com dado inválido
  When eu preencha o campo nome com "Rodrigo Barbosa"
  And eu preencha o campo email com "email-invalido"
  And eu preencha o campo endereço atual com "Rua das Rosas, 111"
  And eu preencha o campo endereço permanente com "Avenida Atlântica, 222"
  And eu clique em submeter
  Then o sistema deve exibir o email "email-invalido" no resultado

Scenario: Submissão sem preencher nenhum campo
  When eu clique em submeter
  Then o sistema deve exibir o resultado mesmo sem dados preenchidos

Scenario: Submissão com dados longos
  When eu preencha o campo nome com "Rodrigo Barbosa"
  And eu preencha o campo email com "rodrigo@barbosa.com"
  And eu preencha o campo endereço atual com um texto muito longo
  And eu preencha o campo endereço permanente com um texto muito longo
  And eu clique em submeter
  Then o sistema deve exibir o endereço longo no resultado
