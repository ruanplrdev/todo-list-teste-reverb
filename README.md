# README

## Visão Geral

Este projeto é uma aplicação full-stack composta por **frontend**, **API backend** e um **banco de dados PostgreSQL**. A aplicação utiliza Docker para containerização, facilitando a configuração e execução local ou em um ambiente em nuvem.

O projeto é composto por três serviços principais:
- **Frontend**: Uma aplicação Next.js rodando na porta 3000.
- **API**: Uma API REST construída com Express.js rodando na porta 4000.
- **Banco de Dados**: Um banco de dados PostgreSQL rodando na porta 5432.

## Requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

## Iniciando o Projeto

Siga os passos abaixo para configurar e rodar a aplicação localmente usando o Docker:

### 1. Clone o repositório

Clone o repositório que contém o código do frontend e do backend.

```bash
git clone <url-do-repositorio>
cd <diretorio-do-projeto>
```

### 2. Configure as variáveis de ambiente

Certifique-se de que você tenha a configuração de ambiente correta. O serviço backend requer o arquivo `.env.docker`, que contém as configurações de conexão com o banco de dados. Verifique se este arquivo está disponível na pasta `./back-todo-teste-reverb`.

### 3. Construa e rode a aplicação

No diretório do projeto, use o Docker Compose para construir e iniciar os serviços.

```bash
docker-compose up --build
```

Este comando irá:
- Construir os containers do frontend, backend e banco de dados.
- Iniciar os containers na ordem correta com base na configuração `depends_on`.

### 4. Acesse os serviços

- **Frontend (Aplicação Next.js)**: Abra seu navegador e acesse `http://localhost:3000` para visualizar o frontend.
- **API (Express.js)**: A API backend estará disponível em `http://localhost:4000`.
- **Banco de Dados (PostgreSQL)**: O banco de dados estará acessível na porta `5432`. Você pode usar qualquer cliente PostgreSQL para interagir com o banco de dados.

### 5. Parando os serviços

Para parar os serviços, pressione `CTRL+C` no terminal onde o comando `docker-compose up` está sendo executado. Você também pode parar e remover os containers usando:

```bash
docker-compose down
```

Isso irá parar e remover todos os containers, redes e volumes definidos no arquivo `docker-compose.yml`.

## Estrutura do Projeto

- **frontend**: Contém a aplicação Next.js.
- **api**: Contém a API backend Express.js.
- **db**: Roda o banco de dados PostgreSQL.
- **docker-compose.yml**: Define e configura os serviços Docker para o frontend, backend e banco de dados.
- **.env.docker**: Contém as variáveis de ambiente necessárias para o serviço backend (localizado em `./back-todo-teste-reverb`).

## Volumes

- **postgres-data**: Um volume Docker que persiste os dados do PostgreSQL. Ele garante que os dados não sejam perdidos quando o container do banco de dados for reiniciado.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Caso encontre algum problema ou tenha dúvidas, abra uma issue no repositório. Bom desenvolvimento!
