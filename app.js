const myLibrary = [];

class Book {
  constructor(author, title, pages, bookStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = bookStatus;
  }
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
  const btnDeleteBook = document.createElement('button');
  btnDeleteBook.textContent = 'X';
  btnDeleteBook.classList.add('btn');
  btnDeleteBook.classList.add('x');

  const bookStatusDisplay = document.createElement('button');
  bookStatusDisplay.classList.add('read');
  if (thisBook.status === 'checked') {
    bookStatusDisplay.textContent = 'Read';
    bookStatusDisplay.classList.add('finished');
  } else {
    bookStatusDisplay.textContent = 'Not read';
    bookStatusDisplay.classList.add('not-finished');
  }

  bookStatusDisplay.addEventListener('click', () => {
    if (bookStatusDisplay.textContent === 'Read') {
      bookStatusDisplay.classList.remove('finished');
      bookStatusDisplay.classList.add('not-finished');
      bookStatusDisplay.textContent = 'Not read';
      thisBook.status = 'unchecked';
    } else {
      bookStatusDisplay.classList.remove('not-finished');
      bookStatusDisplay.classList.add('finished');
      bookStatusDisplay.textContent = 'Read';
      thisBook.status = 'checked';
    }
  });

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
  create.appendChild(bookStatusDisplay);
  create.classList.add('display-book');
}

const popUpWindow = document.querySelector('.popup');
const btnCloseWindow = document.getElementById('close-window');
const btnAddBook = document.getElementById('add-book');

// Inputs
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('num-pages');
const bookStatus = document.getElementById('book-status');

const emptyBookTitle = document.querySelector('.fill-book-title');
const emptyBookAuthor = document.querySelector('.fill-book-author');
const emptyBookPages = document.querySelector('.fill-book-pages');

btnAddNewBook.addEventListener('click', () => {
  const blackBackground = document.createElement('div');
  blackBackground.classList.add('black');
  document.body.appendChild(blackBackground);
  popUpWindow.style.visibility = 'visible';
});

btnAddBook.addEventListener('click', (e) => {

  const pages = document.getElementById('num-pages').value;
  const regexNum = /^\d+$/;
  
  if (bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '' || !pages.match(regexNum)) {
    console.log(pages.match(regex));
    if (bookTitle.value === '') {
      emptyBookTitle.style.visibility = 'visible';
    } else {
      emptyBookTitle.style.visibility = 'hidden';
    }

    if (bookAuthor.value === '') {
      emptyBookAuthor.style.visibility = 'visible';
    } else {
      emptyBookAuthor.style.visibility = 'hidden';
    }

    if (bookPages.value === '' || !pages.match(regexNum)) {
      emptyBookPages.style.visibility = 'visible';
    } else {
      emptyBookPages.style.visibility = 'hidden';
    }

  } else {
    emptyBookPages.style.visibility = 'hidden';
    emptyBookAuthor.style.visibility = 'hidden';
    emptyBookTitle.style.visibility = 'hidden';

    if (bookStatus.checked === true) {
      bookStatus.status = 'checked';
    } else {
      bookStatus.status = 'unchecked';
    }
    const newBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, bookStatus.status);
    myLibrary.push(newBook);

    addBookToLibrary(newBook);

    e.preventDefault();
    popUpWindow.style.visibility = 'hidden';
    document.querySelector('.black').remove();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookStatus.checked = false;
  }
});

btnCloseWindow.addEventListener('click', () => {
  popUpWindow.style.visibility = 'hidden';
  document.querySelector('.black').remove();
  bookStatus.checked = false;
  emptyBookPages.style.visibility = 'hidden';
  emptyBookAuthor.style.visibility = 'hidden';
  emptyBookTitle.style.visibility = 'hidden';
});
