const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function doingInput() {
    output.textContent = input.value;
    if (input.value === "") {
        output.textContent = "Anonymous";
    }

}

input.addEventListener("input", doingInput);