const refs = {
  usernameElem: document.querySelector('.js-input-username'),
  formElem: document.querySelector('.js-register-form'),
  inputSizeElem: document.querySelector('#js-input-size'),
  inputColorElem: document.querySelector('#js-input-color'),
};
refs.formElem.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const newUser = {};

  for (const [key, value] of data.entries()) {
    newUser[key] = value;
  }

  event.target.reset();
});
