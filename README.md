MKS-BACKEND-CHALLENGE
Bom dia/tarde/noite, me chamo Edmilson Romano, tenho 20 anos e abaixo estão as instruções para rodar este projeto!
Tempo de experiência:
STACK UTILIZADA NO PROJETO:
TypeScript - 10 mesês de experiência
PostgreSQL - 10 mesês de experiência
TypeORM - 6 mesês de experiência
Nestjs - 10 mesês de experiência
Docker - 10 mesês de experiência
Swagger - 3 dias de experiência 
AWS - 3 mesês.
LINKS:
REPOSITÓRIO GITHUB:
https://github.com/EdmilsonR0MANO/mks-backend-challenge
API EM PRODUÇÃO:
http://15.228.170.50:3000:3000/ ( url base )
http://15.228.170.50:3000/api ( url para acessar a documentação e os endpoints da API )
API LOCAL:
http://localhost:3000/ ( url local base )
http://localhost:3000/api ( url local para acessar a documentação e os endpoints da API )
TESTES EM PRODUÇÃO:
Caso queira testar minha aplicação sem precisar rodar nada no seu computador, basta entrar na documentação e acessar os endpoints.
TESTES LOCALMENTE:
Para rodar a aplicação na sua máquina, basta seguir os passos abaixo:
Primeiro, clone o repositório na sua máquina acessando o repositório;
Após isso, dentro da pasta do projeto, abra o terminal e rode o seguinte comando:
yarn install ou npm install
node --version
Ao abrir o projeto no seu editor de código, abra o arquivo Dockerfile e garanta que a versão node que está instalada na sua máquina é a mesma que o output do código acima, isso vai garantir que as dependências de desenvolvimento que você instalou localmente vão estar na mesma versão das que o docker vai utilizar.
Após isso, mais comandos no terminal:
docker-compose up --build ( não esqueça de adicionar o prefixo de privilégios de usuário para poder executar caso esteja utilizando um sistema operacional de distribuição linux ou macOS ( sudo, brew, etc... ))
E pronto! Aplicação local rodando, agora é só acessar a documentação e consumir os endpoints
