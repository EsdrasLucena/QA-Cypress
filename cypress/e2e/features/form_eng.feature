Feature: Login Biblioteca - DemoQA
  Descrição: Cenários para testar o preenchimento e validação do formulário de texto.

Background: Acessar a página da biblioteca
  Given eu acesso a página de login biblioteca

Scenario: Criar um usuário
  When acessar a página de novo usuário
  And eu preencha o campo primeiro nome com "Kaua"
  And eu preencha o campo último nome com "Madruga"
  And eu preencha o campo username com "kauateste1"
  And eu preencha o campo senha com "Kaua!0910"
  And eu marque o campo não sou um robô
  And eu clique em registrar
  Then o sistema deve acusar que sou um robô


Scenario: Criar um usuário com informações incompletas
  When acessar a página de novo usuário
  And eu preencha o campo último nome com "Madruga"
  And eu preencha o campo username com "kauateste2"
  And eu clique em registrar
  Then o sistema deve solicitar o primeiro nome e a senha

Scenario: Criar um usuário com senha fora dos padrões estabelecidos
  When acessar a página de novo usuário
  And eu preencha o campo primeiro nome com "Kaua"
  And eu preencha o campo último nome com "Madruga"
  And eu preencha o campo username com "kauateste3"
  And eu preencha o campo senha com "kaua1234"
  And eu marque o campo não sou um robô
  And eu clique em registrar
  Then o sistema deve indicar que o captcha precisa ser realizado

Scenario: Submissão sem preencher nenhum campo
  When acessar a página novo usuário
  And eu clique registrar
  Then o sistema deve solicitar que os campos sejam preenchidos

Scenario: Login com usuário criado anteriormente
  When eu preencha o campo usuário com "kaua"
  And eu preencha o campo senha com "Kaua!0910"
  Then o usuário kaua seja acessado
