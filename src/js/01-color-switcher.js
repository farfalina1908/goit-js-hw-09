const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener("click", startChangeBgColor);
btnStop.addEventListener("click", stopChangeBgColor);

function startChangeBgColor() {
   body.style.background: getRandomHexColor();
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }