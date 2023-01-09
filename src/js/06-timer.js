import { Stopwatch } from './modules/stopWatch';

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  timerEl: document.querySelector('.js-clockface'),
};

const stopwatch = new Stopwatch(tick);

function tick(time) {
  refs.timerEl.textContent = time;
}

refs.startBtn.addEventListener('click', () => {
  stopwatch.start();
});
refs.stopBtn.addEventListener('click', () => {
  stopwatch.stop();
});
