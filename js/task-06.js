const inputElement = document.querySelector("#validation-input");

function blurInput() {
    if 
        (inputElement.dataset.length <= inputElement.value.length) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");

    } else {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
    }
    
}

inputElement.addEventListener("blur", blurInput);