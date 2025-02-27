document.cookie = "defaultTheme=dark; userTheme=dark;"

const toogleCookie = () => {
    const cookieContainer = document.querySelector('.cookie--notification')
    cookieContainer.style.opacity = '0'
    setTimeout(() => {
        cookieContainer.style.display = 'none';
    }, 200)
}