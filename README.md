# Descrição do Projeto

O projeto consiste em uma aplicação web para o compartilhamento de receitas, em que usuários podem selecionar que ingredientes têm em sua cozinha e filtrar receitas com base nesses ingredientes.

## Integrantes
- Natalia Joventino Leonardo
- Michell Lucino
- Andrey Torres
- Frederico Rappa
- Francisco Pena

## Arquitetura do Projeto
- Modelo C4

    ![Imagem do Modelo C4](ModeloC4.jpg)

- Estilos Arquiteturais:
    - RESTful API's
    - Layering

- Descrição dos Componentes:

    - Single Page Application:
    Front-end desenvolvido em ReactJS. Tem a responsabilidade de exibir as páginas de visualização/publicação de receitas e efetuar a conexão com o servidor.

    - API Application:
    Back-end desenvolvido em NodeJS. Tem a responsabilidade de se conectar com o banco de dados e com o SPA. Além disso, define as regras de negócio da aplicação.

    - Database:
    Banco de dados relacional PostgreSQL. Tem a responsabilidade de armazenar e disponibilizar dados dos usuários e receitas.

    - User Authentication:
    Protocolo de autenticação OAuth 2.0. Tem a função de controlar a autenticação de login e cadastro do usuário por plataformas externas.  
