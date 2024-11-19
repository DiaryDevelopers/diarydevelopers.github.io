function getToken() {
    const tokenCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('token='));
    return tokenCookie ? tokenCookie.split('=')[1]?.trim() : null; // Если токен не найден
}

window.onload = () => {
    const token = getToken()

    if (!token) {
        location.href = '/diarydevelopers.github.io/sgo/login/index.html'
        return
    }

    // todo main page things
}