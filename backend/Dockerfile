# Usar a imagem oficial do Node.js
FROM node:14

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e instalar dependências
COPY package.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "server.js"]