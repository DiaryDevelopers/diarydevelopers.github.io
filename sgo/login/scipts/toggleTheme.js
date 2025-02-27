let currentTheme = "dark"
const documentBody = document.querySelector("body")
const setProp = document.documentElement.style.setProperty
 const toggleDark = (element, color) => {
     document.documentElement.style.setProperty(element, color)
 }
 const toggleLight = (element, color) => {
     document.documentElement.style.setProperty(element, color)
 }


document.querySelector(".toggleThemeBtn").addEventListener("click",function() {
    if (currentTheme === "dark" && documentBody.classList.contains("dark")) {
        currentTheme = "light"
        documentBody.classList.replace("dark", "light")

        toggleDark("--main--background", "#e6e6e6")
        toggleDark("--main--button", "#d8d8d8")
        toggleDark("--main--text", "#4e4c4c")
        toggleDark("--main--color", "#393737")
        toggleDark("--main--tag--a", "#1c1b1b")
        toggleDark("--main--border", "#cacaca")
        toggleDark("--main--border-focus", "#a6a6a6")
        toggleDark("--selection--bg", "#aaaaaa")
        toggleDark("--selection--color", "#717171")
        toggleDark("--button-background", "#a3a3a3")
        toggleDark("--button-text", "#ededed")
        toggleDark("--icon", "#86868a")
        toggleDark("--circle-color", "#8ec7ff")
    }
    else if (currentTheme === "light" && documentBody.classList.contains("light")) {
        currentTheme = "dark"
        documentBody.classList.replace("light", "dark")

        toggleLight("--main--background", "#1e1e20")
        toggleLight("--main--button", "#1c1c1e")
        toggleLight("--main--text", "#aaaaaa")
        toggleLight("--main--color", "#ffffff")
        toggleLight("--main--tag--a", "#ffffff")
        toggleLight("--main--border", "#313133")
        toggleLight("--main--border-focus", "#424245")
        toggleLight("--selection--bg", "#171719")
        toggleLight("--selection--color", "#a1a1a1")
        toggleLight("--button-background", "#ffffff")
        toggleLight("--button-text", "#404042")
        toggleLight("--icon", "#2a2a2c")
        toggleLight("--circle-color", "rgba(64, 64, 66, 0.72)")
    }
})