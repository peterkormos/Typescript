export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    listAllBooks() {
        return this.books;
    }
}
