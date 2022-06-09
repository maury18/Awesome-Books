const bookfunction = (titleBook, titleAuthor, addingBook, newBook) => {
  addingBook.addEventListener('click', () => {
    newBook.addBook(titleBook.value, titleAuthor.value);
    localStorage.setItem('bookSaved', JSON.stringify(newBook.allBooks()));
    window.location.reload();
  });
};
export default bookfunction;
