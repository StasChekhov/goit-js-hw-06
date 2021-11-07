const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

function changeFontSize(event) {
    textElement.style.fontSize = `${event.currentTarget.value}px`;
}

inputElement.addEventListener("input", changeFontSize)