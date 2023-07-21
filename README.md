
# Back-end Finplan - Em desenvolvimento

Aplicação back-end que visa organizar as finanças familiares com facilidade. A plataforma simplifica o gerenciamento financeiro e a pessoa usuária acompanha todas as despesas da sua família.


## Requisitos

- [] Gerenciamento de boletos
- [] Gerenciamento de lista de compras
- [] Gerenciamento de receitas e despezas# API Backend TypeScript com Banco de Dados Prisma

Esta é uma API backend desenvolvida em TypeScript que utiliza o Prisma como ORM (Object-Relational Mapping) para interagir com o banco de dados. O objetivo desta API é fornecer endpoints para gerenciar dados e recursos em um aplicativo web ou móvel.

## Funcionalidades

A API oferece as seguintes funcionalidades principais:

-   1. **Gerenciamento de Usuários**: Permite a criação, leitura, atualização e exclusão de usuários no sistema. Cada usuário possui informações como nome, e-mail e senha.

-   2. **Autenticação**: Suporta autenticação de usuários usando JWT (JSON Web Tokens) para fornecer acesso seguro a recursos protegidos.

-   3. **Gerenciamento de Itens**: Permite que os usuários criem, leiam, atualizem e excluam itens. Cada item possui propriedades como nome, descrição e data de criação.

## Instalação

Antes de executar a API, certifique-se de ter instalado o Node.js e o npm (ou yarn) em seu ambiente.


1. Clone este repositório em seu computador:
   ```
   git clone git@github.com:diegotimao/backend-finpaln.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd backend-finpaln
   ```

3. Instale as dependências do projeto:
   ```
   npm install
   # ou
   yarn install
   ```

4. Configure o arquivo `.env` com as informações do banco de dados, como nome do banco, usuário e senha.

5. Execute as migrações do banco de dados com o Prisma:
   ```
   npx prisma migrate dev
   ```


## Uso

Para executar a API, utilize o seguinte comando:

```
npm run dev
# ou
yarn dev
```

A API estará disponível em `http://localhost:3000`.

## Documentação da API


#### Register 

```http
  GET /api/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email válido |
| `Nome`      | `string` | **Obrigatório**. Nome de usário |
| `password`      | `string` | **Obrigatório**. Senha válida |


#### Login

```http
  GET /api/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. O email cadastrado na plataforma |
| `password` | `string` | **Obrigatório**. Senha cadastrada na plataforma |

#### Retorna um usuário

```http
  GET /api/user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



## Licenças

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

