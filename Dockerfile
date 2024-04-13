# Use a imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o resto do código-fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta em que sua aplicação será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main.js"]
