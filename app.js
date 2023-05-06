let myLibrary = [];

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

const selectMainContainer = document.querySelector('.main-container');
const btnAddNewBook = document.getElementById('new-book-window');

function addBookToLibrary(thisBook) {
  const create = document.createElement('div');

  const bookTitleDisplay = document.createElement('p');
  bookTitleDisplay.textContent = thisBook.title;
  const bookAuthorDisplay = document.createElement('p');
  bookAuthorDisplay.textContent = thisBook.author;
  const bookPagesDisplay = document.createElement('p');
  bookPagesDisplay.textContent = thisBook.pages;
  const bookStatusDisplay = document.createElement('button');

  const btnDeleteBook = document.createElement('button');
  btnDeleteBook.textContent = 'X';
  btnDeleteBook.classList.add('btn');
  btnDeleteBook.classList.add('x');

  btnDeleteBook.addEventListener('click', () => {
    const index = myLibrary.indexOf(thisBook);
    myLibrary.splice(index, 1);

    create.remove();
  });

  selectMainContainer.insertBefore(create, btnAddNewBook);
  create.appendChild(bookTitleDisplay);
  create.appendChild(bookAuthorDisplay);
  create.appendChild(bookPagesDisplay);
  create.appendChild(btnDeleteBook);
  create.classList.add('display-book');
}

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
  const newBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, bookPages.status);
  myLibrary.push(newBook);

  addBookToLibrary(newBook);

  e.preventDefault();
  popUpWindow.style.visibility = 'hidden';
});
