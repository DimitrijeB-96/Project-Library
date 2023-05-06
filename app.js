let myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {

}

const btnAddNewBook = document.getElementById('new-book-window');

const popUpWindow = document.querySelector('.popup');
const btnCloseWindow = document.getElementById('close-window');
const btnAddBook = document.getElementById('add-book');

// Inputs
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('num-pages');

btnAddNewBook.addEventListener('click', () => {
  popUpWindow.style.visibility = 'visible';
});

btnCloseWindow.addEventListener('click', () => {
  popUpWindow.style.visibility = 'hidden';
});

btnAddBook.addEventListener('click', (e) => {
  const firstBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value);

  console.log(firstBook);

  e.preventDefault();
  popUpWindow.style.visibility = 'hidden';
});
