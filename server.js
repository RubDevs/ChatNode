const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')
const router = require('./network/routes')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//enviamos el servidor al router para configurar las rutas
router(app);




app.use('/app', express.static('public'));

// app.use('/',function(req,res){
//     res.send('Hola');
// });

app.listen(3000)
console.log("Escuchando en http://localhost:3000")