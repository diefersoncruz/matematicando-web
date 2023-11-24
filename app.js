// Importando os módulos necessários
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// Configurando o Express para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', function (req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function (err, text) {
        res.send(text);
    });
});

// Iniciando o servidor
var server = app.listen(80, function () {
    console.log('Servidor rodando na porta 8080');
});
