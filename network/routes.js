const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');

//Se configuran las rutas de cada componente, recibe el servidor como parametro
const routes = function(server){
    server.use('/message',message);
    server.use('/user',user);
}

module.exports = routes;