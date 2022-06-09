const removingFunction = (newBook, allTheBooks) => {
  const removeButton = document.querySelectorAll('.remove');
  removeButton.forEach((item, index) => {
    item.addEventListener('click', () => {
      newBook.removeBook(index);
      allTheBooks = newBook.allBooks();
      localStorage.setItem('bookSaved', JSON.stringify(allTheBooks));
      window.location.reload();
    });
  });
};
export default removingFunction;