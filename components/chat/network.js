const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/:userId',(req,res)=>{
    //const filteredMessages = req.query.users || null;
    //console.log(req.params.userId)
    controller.getChats(req.params.userId)
    .then((chatList)=>{
        response.success(req,res,chatList,200)
    })
    .catch(err=>{
        response.error(req, res, "Error al recuperar los chats", 500,err)
    })
});

router.post('/',(req,res)=>{
    controller.addChat(req.body.users)
    .then((chat)=>{
        response.success(req,res,chat,201)
    })
    .catch(err=>{
        response.error(req,res,'Informacion Invalida',500,err);
    });
});

// router.patch('/:id',(req,res)=>{
//     controller.updateMessage(req.params.id,req.body.message)
//     .then((data)=>{
//         response.success(req,res,data,200);
//     })
//     .catch((err)=>{
//         response.error(req,res,'Error Interno',500,err)
//     });
// });

// router.delete('/:id',(req, res)=>{
//     controller.deleteMessage(req.params.id)
//     .then((data)=>{
//         response.success(req,res,data,200)
//     })
//     .catch(err=>{
//         response.error(req,res,'Error',500,err)
//     })
// });

module.exports = router;