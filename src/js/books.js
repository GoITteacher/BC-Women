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
    const markup = `<li data-id="${newBook.id}" class="card articles">
    - ${newBook.title}<br>
    - ${newBook.author}<br>
    - ${newBook.desc}
    </li>
    `;
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
});
