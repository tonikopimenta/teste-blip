const axios = require('axios');


class reposController{
    constructor() { }

    async getRepos(){
        
        // Este endereço retorna os repositórios da Take, do mais antigo ao mais atual, com uma paginação de 100 repositórios por vez (o máximo permitido pela api, para garantia de resultados)
        const url = "https://api.github.com/orgs/takenet/repos?per_page=100&sort=created&direction=asc"

        try {
            const response = await axios.get(url)
            const data = response.data
            let cont = 0
            let array_dados = []
            //É verificado cada objeto da resposta, caso tenha sido escrito em C# e seja um dos 5 primeiros encontrados, é inserido no array de resposta.
            //O array é tratado quando chcega pela requisição feita pelo chatbot.
            for (var i = 0; i < data.length; i++) {
                if (data[i].language == "C#" && cont < 5){
                let ID = data[i].id;
                let NAME = data[i].full_name;
                let DESCRIPTION = data[i].description;
                let AVATAR = data[i].owner.avatar_url;
                let dados = {nome: NAME, descricao: DESCRIPTION, avatar: AVATAR};
                array_dados.push(dados);
                cont++;
                }
            }
            return array_dados;
          } catch (error) {
            console.log(error)
          }

    }
};

module.exports = { reposController }
