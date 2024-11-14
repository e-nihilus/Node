const { Book } = require("../models/book");
let books = [
    new Book("El Principito", "Tapa blanda", "Antoine de Saint-Exupéry", 10.99, "url1",1),
    new Book("1984", "Tapa dura", "George Orwell", 8.99, "url2",2),
    new Book("Cien años de soledad", "Tapa blanda", "Gabriel García Márquez", 12.99, "url3",3),
    new Book("Moby Dick", "Tapa blanda", "Herman Melville", 11.99, "4",4),
    new Book("Orgullo y prejuicio", "Tapa blanda", "Jane Austen", 9.99, "5",5)
];

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

function getBooks(request, response) {
    const id_book = request.query.id_book; 
    let respuesta;

    if (id_book) {
        const book = books.find(b => b.id_book === Number(id_book)); 
        if (book) {
            respuesta = { error: false, codigo: 200, mensaje: "Libro encontrado", data: book };
        } else {
            respuesta = { error: true, codigo: 200, mensaje: "El libro no existe" };
        }
    } 
    else if (books.length > 0) 
    {
        respuesta = { error: false, codigo: 200, mensaje: "Libros encontrados", data: books };
    } 
    else 
    {
        respuesta = { error: true, codigo: 200, mensaje: "No hay libros disponibles" };
    }

    response.send(respuesta);
}


function postBooks(request, response) {
    const { title, type, author, price, photo } = request.body;

    const newBook = new Book(title, type, author, price, photo);
    books.push(newBook);

    const respuesta = { error: false, codigo: 201, mensaje: "Libro creado", data: newBook };
    response.send(respuesta);
}

function putBooks(request, response) {
    const { id_book, title, type, author, price, photo } = request.body; 
    let respuesta;
    const book = books.find(b => b.id_book === Number(id_book));

    if (book) {
        book.title = title ? title : book.title;
        book.type = type ? type : book.type;
        book.author = author ? author : book.author;
        book.price = price ? price : book.price;
        book.photo = photo ? photo : book.photo;

        respuesta = { error: false, codigo: 200, mensaje: "Libro actualizado" };
    } else {
        respuesta = { error: true, codigo: 404, mensaje: "El libro no existe" };
    }

    response.send(respuesta);
}

function deleteBooks(request, response) {
    const { id_book } = request.body; 
    const initialLength = books.length;
    books = books.filter(b => b.id_book !== Number(id_book));
    let respuesta;
    
    if (books.length < initialLength) {
        respuesta = { error: false, codigo: 200, mensaje: "Libro eliminado" };
    } else {
        respuesta = { error: true, codigo: 404, mensaje: "El libro no existe" };
    }

    response.send(respuesta);
}



module.exports = {getStart, getBooks, postBooks, putBooks, deleteBooks};