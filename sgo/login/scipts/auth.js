const authButton = document.querySelector(".authButton")
const inputFieldLogin = document.querySelector("#loginField");
const inputFieldPassword = document.querySelector("#passswordField");

authButton.onclick = () => {
    if (checkIfEmpty(inputFieldLogin) || checkIfEmpty(inputFieldPassword)) return;

    const login = inputFieldLogin.value;
    const password = inputFieldPassword.value;

    // TODO DO SOMETHING USEFUL

    document.querySelector(".undefined").style.opacity = "1";
}

inputFieldLogin.oninput = () => {
    if (inputFieldLogin.value) inputFieldLogin.style.borderColor = "var(--main--border)"
}
inputFieldPassword.oninput = () => {
    if (inputFieldPassword.value) inputFieldPassword.style.borderColor = "var(--main--border)"
}

const checkIfEmpty = (field) => {
    if (field.value) {
        field.style.borderColor = "var(--main--border)"
        return false;
    }
    field.style.borderColor = "#CD5C5C"
    return true;
}