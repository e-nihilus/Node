const express = require("express")
const app = express()

app.get("/", function (request, response){
    let respuesta;
    console.log("Petición recibida del cliente")
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers["user-agent"])
    respuesta = {ok: true, mensaje: "Recibido"}
    response.status(200).send(respuesta); 
});

app.get("/bye", function (request, response){
    let respuesta;
    respuesta = {ok: true, mensaje: "Adios"}
    response.status(200).send(respuesta); 
})

app.listen(3000)