// Определить класс Reader, хранящий такую информацию о пользователе библиотеки:

// ФИО, номер читательского билета, факультет, Дата рождения, телефон. Методы
// takeBook(), returnBook().

class Reader {
  fullName;
  #readerNumber;
  faculty;
  #birthday;
  phone;
  books = [];

  static counter = 0;

  constructor(reader) {
    const { fullName, faculty, birthday, phone } = reader;
    this.fullName = fullName;
    this.#readerNumber = Reader.counter;
    this.faculty = faculty;
    this.#birthday = birthday;
    this.phone = phone;

    Reader.counter += 1;
  }

  get birthday() {
    return this.#birthday;
  }

  takeBook(book) {
    this.books.push(book);
  }
  returnBook(book) {
    this.books = this.books.filter(el => el !== book);
  }
}
const user = {
  fullName: 'Petro Petrenko',
  faculty: 'IT',
  birthday: '16.05.2001',
  phone: '+380672222222',
};

const reader1 = new Reader(user);

reader1.takeBook('Eneida');
reader1.takeBook('Onegin');
reader1.returnBook('Onegin');

console.log(reader1.birthday);

reader1.birthday = 123;

console.log(reader1.birthday);

// ================
