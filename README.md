# API SimpleCert

Esta é a documentação de requisitos para a API SimpleCert. Esta API permite aos usuários gerenciar certificados, categorizá-los e realizar operações de CRUD.

## Funcionalidade

- Os usuários devem poder adicionar novos certificados com informações como Título do Certificado, Tipo, Carga horária em horas, Data, Nome do Participante, Tipo de participação.

## Requisitos Funcionais

- [ ] Cadastro de Cerficados
- [ ] Visualização de Certificados
- [ ] Atualização de Certificados
- [ ] Exclusão de Certificados

## Requisitos de Autenticação e Autorização

- [ ] Autenticação de Usuários
- [ ] Autorização de Acesso às Operações
- [ ] Criação de usuário

## Regras de Negócios

- Os usuários devem ser cadastrados com nome e email
- O email deve ser uma chave única
- Os certificados devem conter pelo todas as informações requisitadas.
- Somente usuários autenticados podem executar operações de criação, atualização e exclusão de contatos.
- A autorização é baseada em funções de usuário, como administrador e usuário regular.
- Todos os dados da API devem ser armazenados de forma segura e protegidos contra acesso não autorizado.
- As entradas do usuário devem ser validadas para evitar a inserção de dados incorretos ou maliciosos.
