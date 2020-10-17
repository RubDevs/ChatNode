const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

//Se configuran las rutas de cada componente, recibe el servidor como parametro
const routes = function(server){
    server.use('/message',message);
    server.use('/user',user);
    server.use('/chat',chat);
}

module.exports = routes;