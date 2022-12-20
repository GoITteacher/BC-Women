class User {
  #login;
  #password;
  constructor(name, login, password) {
    this.name = name;
    this.#login = login;
    this.#password = password;
  }

  set password(newPassword) {
    if (newPassword.length > 6 && newPassword.length < 30) {
      this.#password = newPassword;
    } else {
      console.log('Пароль не відповідає правилам!');
    }
  }
}

const user = new User('Petro', 'petrik', 'myPassword');

console.log(user);

user.password = '123';
user.password =
  '123123123123123123123123123123132312312312312312312312312312321';
user.password = 'New Password 123';
