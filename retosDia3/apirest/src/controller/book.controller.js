const {Book}= require("../models/book")
let book = null;

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response) {
    let respuesta;
    if (book != null) { 
        respuesta = { error: false, codigo: 200, mensaje: "Libro encontrado", data: book };
    } 
    else {
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe" };
    }

    response.send(respuesta);
}

function postBook(request, response) {
    const { title, type, author, price, photo} = request.body; 
    let respuesta;

    if (book === null) {
        book = new Book(title, type, author, price, photo);
        respuesta = {error: false, codigo: 200, mensaje: "Libro creado", data: book};
    } 
    else {
        respuesta = {error: true, codigo: 200, mensaje: "El libor ya existe"};
    }

    response.send(respuesta);
}

function putBook(request, response){
    const { title1, type1, author1, price1, photo1} = request.body; 
    let respuesta

    if (book !=  null)
    {
        book = new Book(title1, type1, author1, price1, photo1);
        respuesta = {error: false, codigo: 200, mensaje: "Libro actualizado",data: book};
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe",data: book};
    }

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta
    if (book != null)
    {    
        book = null;
        respuesta = {error: false, codigo: 200, mensaje: "Libro borrado"};
    }  
    else{
        respuesta   = {error: true, codigo: 200, mensaje: "El libro no existe"};
    }

    response.send(respuesta);
};



module.exports = {getStart, getBook, postBook, putBook, deleteBook};