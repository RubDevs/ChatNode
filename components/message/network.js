const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Header-Personalizado": "Informacion personalizada",
    })
    response.success(req,res,'Lista de mensajes')
});

router.post('/',(req,res)=>{
    controller.addMessage(req.body.user, req.body.message)
    .then((fullmessage)=>{
        response.success(req,res,fullmessage)
    })
    .catch(err=>{
        response.error(req,res,'Informacion Invalida',400,'No hay usuario o mensaje');
    });
});

module.exports = router;