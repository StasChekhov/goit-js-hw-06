

const bodyEl = document.querySelector("body");
const pageColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgc() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  pageColorEl.textContent = color;
}

changeColorBtnEl.addEventListener("click", changeBodyBgc);