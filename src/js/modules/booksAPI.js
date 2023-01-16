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
}
