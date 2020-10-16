const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);


router.get('/message',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Header-Personalizado": "Informacion personalizada",
    })
    res.send('Lista de mensajes')
});

router.post('/message',(req,res)=>{
    console.log(req.query)
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' agregado correctamente')
});

// app.use('/',function(req,res){
//     res.send('Hola');
// });

app.listen(3000)
console.log("Escuchando en http://localhost:3000")