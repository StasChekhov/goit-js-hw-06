const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector("[name=email]");
const inputPasswdEl = document.querySelector("[name=password]");
const submitBtnEl = document.querySelector("button");

formEl.addEventListener("submit", onSubmitForm);
inputEmailEl.addEventListener("input", onInput);
inputPasswdEl.addEventListener("input", onInput);
submitBtnEl.addEventListener("click", onSubmitButton);


function onSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(`${name}: ${value}`);
    });
    
    event.currentTarget.reset();
}


function onInput() {
    if (inputEmailEl.value === "" || inputPasswdEl.value === "") {
        submitBtnEl.disabled = true;
    } else {
        submitBtnEl.disabled = false;
    }
}

function onSubmitButton() {
    if (inputEmailEl.value === "" || inputPasswdEl.value === "") {
        alert("Все поля должны быть заполнены");
    }
};
