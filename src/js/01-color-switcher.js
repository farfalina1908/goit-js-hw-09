const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 let getId = null;

btnStart.addEventListener("click", startChangeBgColor);
btnStop.addEventListener("click", stopChangeBgColor);

function startChangeBgColor(event) {
  getId = setInterval(() => bodyEl.style.backgroundColor = getRandomHexColor(), 1000);
  btnStart.disabled  = true;
  btnStop.disabled  = false;
}

