const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

var file = "index.html";

// Desactivar información de que tecnología esta hecha la página web
app.disable('x-powered-by');

// Indicar al servidor el entorno en el que estamos trabajando
app.set('env', 'development');

app.use(morgan('combined'));

app.get('/', (request, response) => {
    response.send('Hello World!');
    response.end();
});

// Si el usuario introduce /index ejecuta estas líneas
app.get('/index', (request, response) => {
    fs.readFile(file, (err, content) => {
        if (err){
            response.writeHead(404);
            return response.end();
        }

        response.write(content);
        response.send();
        response.end();
    });
});

app.listen('8080', () => {
    console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
});