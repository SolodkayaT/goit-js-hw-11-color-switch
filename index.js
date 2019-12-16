const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

function randomIntegerFromInterval(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let isActive = false;
function setBodyColor() {
  refs.body.style.backgroundColor =    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function handleStartBtn() {
  if (!isActive) {
    isActive = true;
    setInterval(setBodyColor, 1000);
  }
}

refs.startBtn.addEventListener('click', handleStartBtn);
