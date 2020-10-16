const express = require('express');
const router = express.Router();
var app = express();

app.use(router);

router.get('/message',(req,res)=>{
    res.send('Lista de mensajes')
});

router.post('/message',(req,res)=>{
    res.send('Mensaje agregado')
});

// app.use('/',function(req,res){
//     res.send('Hola');
// });

app.listen(3000)
console.log("Escuchando en http://localhost:3000")