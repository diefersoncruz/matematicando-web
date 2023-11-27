// Importando os módulos necessários
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// Configurando o Express para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para matematicando
app.get('/matematicando', function (req, res) {
    fs.readFile(__dirname + '/public/matematicando/index.html', 'utf8', function (err, text) {
        res.send(text);
    });
});

// Iniciando o servidor
var server = app.listen(8000, function () {
    console.log('Servidor rodando na porta 8000');
});
