const express = require('express');
const morgan = require('morgan');
const app = express();

// Desactivar información de que tecnología esta hecha la página web
app.disable('x-powered-by');

// Indicar al servidor el entorno en el que estamos trabajando
app.set('env', 'development');

app.use(morgan('combined'));

app.get('/', (request, response) => {
    response.send('Hello World!');
    response.end();
});

app.listen('8080', () => {
    console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
    // npm run start
});