import { Book } from "./Book";
import { Library } from "./Library";
import { User } from "./User";  

let b1 = new Book("1", "The Great Gatsby", "F. Scott Fitzgerald", 10.99);
let b2 = new Book("2", "To Kill a Mockingbird", "Harper Lee", 8.99);
let b3 = new Book("3", "1984", "George Orwell", 9.99);
let library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
let user = new User("u1", "John Doe", "john.doe@example.com");
user.borrowBook(library, "1");
console.log(library.listAllBooks());
//# sourceMappingURL=types.js.map