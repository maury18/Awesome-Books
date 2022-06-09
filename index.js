// eslint-disable-next-line no-unused-vars
import changinSection from './modules/changinSection.js';
import Book from './modules/class.js';
import bookfunction from './modules/addingBook.js';
import removingFunction from './modules/removingBook.js';
import { DateTime } from './modules/luxonFile.js';

const date = document.getElementById('date');
date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
const newBook = new Book();
if (localStorage.getItem('bookSaved') !== null) {
  newBook.saveBooks(JSON.parse(localStorage.getItem('bookSaved')));
}
const titleBook = document.getElementById('book-name');
const titleAuthor = document.getElementById('author-name');
const addingBook = document.getElementById('add-book');

bookfunction(titleBook, titleAuthor, addingBook, newBook);
const container = document.getElementById('container');
const allTheBooks = newBook.allBooks();
allTheBooks.forEach((item) => {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book-styles');
  const bookDescription = document.createElement('p');
  bookDescription.classList.add('book-description');
  bookDescription.innerHTML = `${item[0]} <span>by </span> ${item[1]}`;
  bookContainer.appendChild(bookDescription);
  container.appendChild(bookContainer);
  bookContainer.innerHTML += `
<button class="remove">Remove</button>`;
});
removingFunction(newBook, allTheBooks);
