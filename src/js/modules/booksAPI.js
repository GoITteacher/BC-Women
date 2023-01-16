import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {},
});

export class BooksAPI {
  getBooks() {
    return axios2.get('/books').then(response => response.data);
  }
  createBook(book) {
    return axios2.post('/books', book);
  }
  updateBook(book, id) {
    return axios2.patch(`/books/${id}`, book);
  }
  resetBook(book, id) {
    return axios2.put(`/books/${id}`, book);
  }
  deleteBook(id) {
    return axios2.delete(`/books/${id}`);
  }
}
