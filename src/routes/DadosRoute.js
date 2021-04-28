const { Router } = require('express');
const routes = Router();
const { reposController } = require('../controllers/controller');


routes.get('/', async (req,res) => {
    res.status(200);
    res.send('API Rodando!');
});

routes.get('/repos', async (req,res) => {
    const reposcontroller = new reposController();
    const data = await reposcontroller.getRepos();
    console.log(data);
    res.status(200);
    res.send(data);
});

module.exports = { routes };