const refs = {
  formEl: document.querySelector('.js-form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const count = e.target.elements.count.value;
  const interval = e.target.elements.interval.value;
  let intervalId;
  let counter = 1;
  setTimeout(() => {
    intervalId = setInterval(() => {
      const promise = createPromise(counter, +delay + interval * counter);
      promise.then(callback);

      if (+counter === +count) {
        clearInterval(intervalId);
      }

      counter++;
    }, interval);
  }, delay);
});

function callback(data) {
  console.log(data);
}

function createPromise(id, delay) {
  return new Promise((resolve, reject) => {
    resolve(`${id}, ${delay}`);
  });
}
