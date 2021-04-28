# teste-blip

API criada para retornar os 5 primeiros projetos da Take escritos em C#, em ordem crescente.

Passos para rodar a api localmente:

- É necessário instalar o Node.js (conforme determinado no package.json);
- npm install para instalar as dependências;
- npm start para iniciar a api localmente (porta 3333);
- O fluxo do bot encontra-se na pasta Fluxo_chatbot/atividadetecnica.json e no documento atividadetecnica.json no root;
- Esta api está publicada e rodando no Heroku, para que a mesma possa ser acessada via https pelo Blip (https://teste-blip.herokuapp.com/, a requisição utilizada pelo bot da Blip é https://teste-blip.herokuapp.com/repos.
