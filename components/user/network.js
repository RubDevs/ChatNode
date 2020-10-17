const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/',(req,res)=>{
    const filteredUser = req.query.name || null;
    controller.getUser(filteredUser)
    .then((userList)=>{
        response.success(req,res,userList,200)
    })
    .catch(e=>{
        response.error(req, res, "Error al recuperar los Usuarios", 400,e)
    })
});

router.post('/',(req,res)=>{
    controller.addUser(req.body.name)
    .then((data)=>{
        response.success(req,res,data,201)
    })
    .catch(err=>{
        response.error(req,res,'Informacion Invalida',400,err);
    });
});

router.patch('/:id',(req,res)=>{
    controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{
        response.success(req,res,data,200);
    })
    .catch((err)=>{
        response.error(req,res,'Error Interno',500,err)
    });
});

router.delete('/:id',(req, res)=>{
    controller.deleteMessage(req.params.id)
    .then((data)=>{
        response.success(req,res,data,200)
    })
    .catch(err=>{
        response.error(req,res,'Error',500,err)
    })
});

module.exports = router;