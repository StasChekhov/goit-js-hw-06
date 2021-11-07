let counterValue = 0;

const minusButton = document.querySelector("div#counter button[data-action=decrement]");
const plusButton = document.querySelector("div#counter button[data-action=increment]");

const value = document.querySelector("#value")

function plusClick() {
    counterValue += 1;
    value.textContent = counterValue;
}
function minusClick(){
    counterValue -= 1;
    value.textContent = counterValue;
}

minusButton.addEventListener(`click`,  minusClick )
plusButton.addEventListener(`click`,  plusClick );











































// let counterValue = 0;

// const buttonDecrementEl = document.querySelector("div#counter button[data-action=decrement]");
// const buttonIncrementEl = document.querySelector("div#counter button[data-action=increment]");
// const value = document.querySelector("#value");

// buttonDecrementEl.addEventListener("click", onDecrementButtonClick);
// buttonIncrementEl.addEventListener("click", onIncrementButtonClick);

// function onDecrementButtonClick() {
//     counterValue -= 1;
//     value.textContent = counterValue;
// };

// function onIncrementButtonClick() {
//     counterValue += 1;
//     value.textContent = counterValue;
// };