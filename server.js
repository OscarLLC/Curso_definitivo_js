var express = require('express'); //aqui  utilizamos la varible y requiere busca en los paquetes el que se llame express
var app = express(); //utilizamos express
app.set('view engine', 'pug')

app.get('/', function(req, res){  
    res.send("hola mundo!") //envia un objto como creacion httpsreques
})

app.listen(3000, function(error){ //lasan el servidor web
    if(error){
        return console.log("hubo error..."), process.exit(1);
    }
    console.log("escuchando platzigram en el puerto 3000")
})