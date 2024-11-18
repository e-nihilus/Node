class Book {
    static currentId = 0;

    constructor(title, type, author, price, photo, id_book = Book.sumaId(), id_user = 0) {
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
    }       

    static sumaId() {
        return this.currentId++;
    }
}

module.exports = {Book};

