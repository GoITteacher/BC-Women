import '../css/common.css';
import booksTemplate from '../templates/card-books.hbs';
import { BooksAPI } from './modules/booksAPI';

// ================
const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-articl-list'),
  btnLoad: document.querySelector('.js-btn-load'),
};

const booksAPI = new BooksAPI();
booksAPI.getBooks().then(books => {
  refs.bookListElem.innerHTML = booksTemplate(books);
});

// ------------------------
refs.createFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const { bookTitle, bookAuthor, bookDesc } = e.target.elements;

  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    desc: bookDesc.value,
  };

  booksAPI.createBook(book).then(({ data: newBook }) => {
    const markup = bookTemplate(newBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
});

refs.updateFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    if (value.trim() !== '') book[key] = value;
  }

  booksAPI.updateBook(book, book.id).then(({ data: book }) => {
    const oldBookElem = refs.bookListElem.querySelector(
      `[data-id = "${book.id}"]`,
    );
    oldBookElem.insertAdjacentHTML('afterend', bookTemplate(book));
    oldBookElem.remove();
  });
});

refs.resetFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  }

  booksAPI.resetBook(book, book.id).then(({ data: book }) => {
    const oldBookElem = refs.bookListElem.querySelector(
      `[data-id = "${book.id}"]`,
    );
    oldBookElem.insertAdjacentHTML('afterend', bookTemplate(book));
    oldBookElem.remove();
  });

  e.target.reset();
});

refs.deleteFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  booksAPI.deleteBook(id).then(() => {
    const oldBook = refs.bookListElem.querySelector(`[data-id = "${id}"]`);
    oldBook.remove();
  });

  e.target.reset();
});

function bookTemplate(book) {
  return `<li data-id="${book.id}" class="card articles">
  - ${book.title}<br>
  - ${book.author}<br>
  - ${book.desc}
  </li>
  `;
}
