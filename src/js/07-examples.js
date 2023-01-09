const refs = {
  formEl: document.querySelector('.js-form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const count = e.target.elements.count.value;
  const interval = e.target.elements.interval.value;

  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      setTimeout(callback, interval * i, interval * i + +delay);
    }
  }, delay);

  console.log(delay, count, interval);
});

function callback(data) {
  console.log(data);
}
