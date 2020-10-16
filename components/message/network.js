const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Header-Personalizado": "Informacion personalizada",
    })
    response.success(req,res,'Lista de mensajes')
});

router.post('/',(req,res)=>{
    console.log(req.query)
    console.log(req.body);
    if(req.query.error == "ok"){
        response.error(req,res,'Error simulado',401)
    }else{
        response.success(req,res,`Mensaje ${req.body.text} agregado correctamente`)
    }
    
});

module.exports = router;