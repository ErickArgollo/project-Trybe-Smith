# Seja muito bem-vindo(a) ao meu projeto Trybe Smith! :rocket:
![office](https://github.com/ErickArgollo/project-Trybe-Smith/blob/main/450E.gif)


#### Neste projeto, desenvolvi uma API utilizando Typescript e MySQL para gerenciar uma loja de produtos medievais utilizando a arquitetura de Modelos, Serviços e Controladores(MSC). Implementei a autenticação de token JWT para garantir a segurança dos endpoints, confirmando as identidades dos usuários e impedindo o acesso não autorizado.

## Objetivos
* Desenvolver uma API RESTful utilizando Typescript para gerenciamento de uma loja de itens medievais.
* Permitir a criação, visualização, deleção e atualização de produtos e pedidos através da API, utilizando as camadas de Models, Services e Controllers.
* Utilizar o Node.js em conjunto com o framework Express para criar o servidor HTTP e gerenciar as rotas.
* Criar um ambiente de desenvolvimento e produção isolado utilizando o Docker.
* Gerenciar o banco de dados MySQL através do MySQL Workbench.
* Implementar autenticação por tokens JWT(Json web token), validando a identidade das pessoas usuárias e garantindo segurança nos endpoints.
* Utilizar a biblioteca Joi para validação de dados de entrada da API.

## Tecnologias/Ferramentas utilizadas
* Node.js
* Express
* Docker
* MySQL
* MySQL Workbench
* Joi
* JWT - Json web token

## Como utilizar

<details>

<summary><strong>⌨️ Rotas</strong></summary>

#### Listagem de produtos
##### GET /products

* Retorna todos os produtos cadastrados no banco de dados, ordenados pelo campo id.

#### Cadastro de produtos
##### POST /products

* Cadastra um novo produto no banco de dados.

* O corpo da requisição deve seguir o seguinte formato:
json
```
{
  "name": "Nome do Produto",
  "amount": "30 peças de ouro"
}
```

#### Cadastro de pessoas usuárias
##### POST /users
* Cria um novo usuário gerando um token de acesso.

#### Listagem de pedidos
##### GET /orders
* Retorna todos os pedidos e os ids dos produtos associados a estes.

#### Login de pessoas usuárias
##### POST /login
* O corpo da requisição deve seguir o seguinte formato:
json
```
{
    "username": "string",
    "password": "string"
}
```


#### Cadastro de um pedido
##### POST /orders
* Cadastra um novo pedido no banco de dados.
* Para cadastrar um novo pedido, é necessário está logado. (Deverá ser passado um header authorization contendo o token gerado no login)
* O corpo da requisição deve seguir o seguinte formato:
json
```
  {
    "productsIds": [1, 2]
  }

```
  </details>

## Nota final no projeto
![trybe-smith-grade](https://github.com/ErickArgollo/project-Trybe-Smith/blob/main/smithgrade.png)

## Rodando localmente
 ### Requisitos
 * Nodejs 16 + 
 * Docker
 * Docker-compose

### Clonar no seu computador ( SSH ) 
 No terminal 
`https://github.com/ErickArgollo/project-Trybe-Smith`

### Iniciando o projeto 
 Após clonar, execute o docker compose na pasta raiz do projeto, executando o comando

` docker-compose up -d --build`

Execute o container e instale os pacotes da aplicação: 
`docker exec -it trybesmith bash`
`npm install`

Rode a aplicação com o comando:
`npm start`

A visualização e utilização dos endpoints pode ser feita através do postman, thunderclient, etc.

## Como contribuir no projeto
  1. Faça um **fork** do projeto;
  2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`;
  3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`;
  4. Envie as suas alterações: `git push origin my-feature`;
  5. Abra o seu pull-request na página do GitHub.<br><br>

  ## Licença
  Esse projeto está sob a licença:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
  
##  Autor
<a href="https://www.linkedin.com/in/erick-argollo/">
 <b>Erick Argollo dos Santos Rangel</b></a> <a href="https://www.linkedin.com/in/erick-argollo/"></a>
