# Sistema de Casa de Eventos

Este projeto é um sistema de gerenciamento para casas de eventos, construído com Node.js, Express e MongoDB para o backend, e Nginx servindo um frontend simples em HTML. O sistema está containerizado utilizando Docker.


## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - MongoDB

- **Frontend:**
  - HTML
  - Nginx

- **Containerização:**
  - Docker
  - Docker Compose

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado em sua máquina.
- [Docker Compose](https://docs.docker.com/compose/) instalado.

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd evento-casa
Inicie os serviços: Execute o seguinte comando na raiz do projeto:

bash
docker-compose up --build

## Acessando o Sistema:

O frontend pode ser acessado em http://localhost:80.
O backend estará disponível em http://localhost:3000.
### Estrutura do Backend
O backend é construído com Express e se conecta ao MongoDB.
O arquivo server.js define rotas e configurações do servidor.
### Estrutura do Frontend
O frontend é um arquivo HTML simples que apresenta uma mensagem de boas-vindas.
### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.

## Licença
Este projeto é licenciado sob a MIT License

