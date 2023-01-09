export class Stopwatch {
  initialTime;
  intervalId;
  isActive = false;
  onTick;

  constructor(onTick) {
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initialTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = currentTime - this.initialTime;

      this.onTick(convertMsToTime(time));
    }, 1000);
  }

  stop() {
    if (!this.isActive) return;
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}
