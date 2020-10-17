const express = require('express');
const router = express.Router();
const multer =  require('multer');
const controller = require('./controller')
const response = require('../../network/response');

const upload = multer({
    dest: 'public/files/',
});
router.get('/', (req,res)=>{
    const filteredMessages = req.query.user || null;
    controller.getMessage(filteredMessages)
    .then((messageList)=>{
        response.success(req,res,messageList,200)
    })
    .catch(e=>{
        response.error(req, res, "Error al recuperar los mensajes", 400,"Error en la BD")
    })
});

router.post('/',upload.single('file'), (req,res)=>{
    console.log(req.file)
    controller.addMessage(req.body.chat,req.body.user, req.body.message,req.file)
    .then((fullmessage)=>{
        response.success(req,res,fullmessage)
    })
    .catch(err=>{
        response.error(req,res,'Informacion Invalida',400,'No hay usuario o mensaje');
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