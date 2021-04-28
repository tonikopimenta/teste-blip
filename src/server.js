const express = require('express');
const cors = require('cors');
const app = express();
const { routes } = require ('./routes/DadosRoute');
const port = process.env.PORT || 3333;
 
app.use(cors());
app.use(routes);
app.use(express.json());
app.listen(port, () => console.log(`Rodando na porta ${port}`));