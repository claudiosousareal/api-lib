const express = require('express');
const chamadoRoutes = require('./routes/chamadoRoutes')
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/chamados', chamadoRoutes)

app.listen(PORT, function(){
    console.log('servidor rodando na porta ' + PORT)
})