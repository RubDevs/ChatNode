const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const router = require('./network/routes')
const db = require('./db');
const dotenv = require('dotenv').config();


db(process.env.DB_DEVELOPMENT)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//enviamos el servidor al router para configurar las rutas
router(app);




app.use('/app', express.static('public'));

// app.use('/',function(req,res){
//     res.send('Hola');
// });

server.listen(3000,()=>{
    console.log("Escuchando en http://localhost:3000");
});
