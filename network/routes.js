const express = require('express');
const message = require('../components/message/network');

//Se configuran las rutas de cada componente, recibe el servidor como parametro
const routes = function(server){
    server.use('/message',message);
}

module.exports = routes;