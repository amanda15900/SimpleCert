# API SimpleCert

Esta é a documentação para a API SimpleCert. Esta API permite aos Administrador gerenciar certificados, categorizá-los e realizar operações de CRUD (Create, Read, Update, Delete).

## Funcionalidades

- O Administrador pode adicionar novos certificados com informações como:
  - Título do Certificado
  - Tipo
  - Carga horária em horas
  - Data
  - Nome do Participante
  - Tipo de Participação

## Requisitos Funcionais

- [x] Cadastro de Certificados
- [x] Visualização de Certificados
- [x] Atualização de Certificados
- [x] Exclusão de Certificados

## Requisitos de Autenticação e Autorização

- [x] Autenticação de Usuários
- [x] Autorização de Acesso às Operações
- [x] Criação de Usuário

## Regras de Negócio

- Os usuários devem ser cadastrados com nome e email.
- O email deve ser único.
- Os certificados devem conter todas as informações requisitadas.
- Somente usuários autenticados podem executar operações de criação, atualização e exclusão de certificados.
- A autorização é baseada em funções de usuário, como administrador e usuário regular.
- Todos os dados da API devem ser armazenados de forma segura e protegidos contra acesso não autorizado.
- As entradas do usuário devem ser validadas para evitar a inserção de dados incorretos ou maliciosos.

## Estrutura do Projeto

### Diretorias

- `src/`: Contém o código-fonte da API.
  - `database/`: Configurações do Prisma Client.
  - `interfaces/`: Define as interfaces para usuários e certificados.
  - `middlewares/`: Contém middlewares como autenticação.
  - `repositories/`: Implementações dos repositórios para usuários e certificados.
  - `routes/`: Define as rotas da API.
  - `usecases/`: Contém a lógica de negócio para usuários e certificados.
- `prisma/`: Contém o arquivo de schema do Prisma.

### Arquivos Principais

- `src/server.ts`: Inicializa o servidor Fastify e registra as rotas.
- `src/database/prisma-client.ts`: Inicializa o Prisma Client.
- `src/interfaces/user.interface.ts`: Define as interfaces para os modelos de usuário.
- `src/interfaces/certificates.interface.ts`: Define as interfaces para os modelos de certificado.
- `src/middlewares/auth.middleware.ts`: Middleware para autenticação.
- `src/repositories/user.repository.ts`: Implementação do repositório de usuários.
- `src/repositories/certificates.repository.ts`: Implementação do repositório de certificados.
- `src/routes/user.routes.ts`: Define as rotas para operações de usuário.
- `src/routes/certificates.routes.ts`: Define as rotas para operações de certificados.
- `src/usecases/user.usecase.ts`: Contém a lógica de negócio para usuários.
- `src/usecases/certificates.usecase.ts`: Contém a lógica de negócio para certificados.
- `prisma/schema.prisma`: Define o schema do banco de dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd SimpleCert
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`:
   ```
   DATABASE_URL="file:./dev.db"
   ```

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Uso

- A API estará disponível em `http://localhost:3100`.

## Endpoints

### Usuários

- `POST /users`: Cria um novo usuário.
  - Body:
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@example.com"
    }
    ```

### Certificados

- `POST /certificates`: Cria um novo certificado.
  - Body:
    ```json
    {
      "titulo": "Título do Certificado",
      "tipo": "Tipo do Certificado",
      "horas": 10,
      "data": "2024-07-14T00:00:00.000Z",
      "participante": "Nome do Participante",
      "participacao": "Tipo de Participação",
      "userId": "ID do Usuário"
    }
    ```

- `GET /certificates`: Retorna todos os certificados.
- `GET /certificates/:id`: Retorna um certificado pelo ID.
- `PUT /certificates/:id`: Atualiza um certificado pelo ID.
  - Body:
    ```json
    {
      "titulo": "Título do Certificado",
      "tipo": "Tipo do Certificado",
      "horas": 10,
      "data": "2024-07-14T00:00:00.000Z",
      "participante": "Nome do Participante",
      "participacao": "Tipo de Participação",
      "userId": "ID do Usuário"
    }
    ```
- `DELETE /certificates/:id`: Deleta um certificado pelo ID.

## Autenticação

- Todas as operações de criação, atualização e exclusão de certificados requerem autenticação.
- O cabeçalho `email` deve ser enviado com o email do usuário autenticado para autenticação.

```json
{
  "headers": {
    "email": "email@example.com"
  }
}
```

## Tecnologias Utilizadas
### FRONT END
- Html
- Css
- JavaScript
### BACK END
- Node.js
- Fastify
- Prisma
- SQLite

## Contribuição

- Sinta-se à vontade para contribuir com o projeto. Basta abrir um pull request com suas mudanças.

## Licença

- Este projeto está licenciado sob a licença MIT.
```
