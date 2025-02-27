const authButton = document.querySelector(".authButton")
const inputFieldLogin = document.querySelector("#loginField");
const inputFieldPassword = document.querySelector("#passswordField");

authButton.onclick = async () => {
    if (checkIfEmpty(inputFieldLogin) || checkIfEmpty(inputFieldPassword)) return;

    const login = inputFieldLogin.value;
    const password = inputFieldPassword.value;

    // TODO replace with actual ip
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            login, password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(() => {})

    if (!response.ok) {
        document.querySelector(".undefined").style.opacity = '1'
        const {message} = await response.json();
        console.error(`Failed to login: ${message}`)
        return
    }

    console.log("Successfully logged in");
    const {token, message} = await response.json();
    // todo save token in cookies

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