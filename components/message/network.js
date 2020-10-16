const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/',(req,res)=>{
    controller.getMessage()
    .then((messageList)=>{
        response.success(req,res,messageList,200)
    })
    .catch(e=>{
        response.error(req, res, "Error al recuperar los mensajes", 400,"Error en la BD")
    })
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