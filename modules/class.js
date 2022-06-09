/* eslint-disable linebreak-style */
class Book {
  constructor() {
    this.title = '';
    this.author = '';
    this.books = [];
  }

  addBook(title, author) {
    this.title = title;
    this.author = author;
    this.books.push([this.title, this.author]);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  allBooks() {
    return this.books;
  }

  saveBooks(storage) {
    this.books = storage;
  }
}
export default Book;