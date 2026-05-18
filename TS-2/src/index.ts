import { Book } from "./models/Book";
import { ILibrary } from "./models/ILibrary";
import { Library } from "./models/Library";
import { User } from "./models/User";  

const bookId = "bookId1";

const book1 = new Book(bookId, "Köny1", "Szerző1", 5000);
const book2 = new Book("bookId2", "Köny2", "Szerző2", 4500);
const book3 = new Book("bookId3", "Köny3", "Szerző3", 6000);

const library : ILibrary = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("A teljes könyvtár:");
console.log(library.listAllBooks());

console.log("A felhasználó kölcsönöz egy könyvet: ", library.findBookById(bookId));
const user = new User("userId1", "nev1", "nev@email.com");
user.borrowBook(library, bookId);

console.log("A könyvtár a kölcsönzés után:");
console.log(library.listAllBooks());
