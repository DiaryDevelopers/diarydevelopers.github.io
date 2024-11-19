const student = document.querySelector('.student__type')
const teacher = document.querySelector('.teacher__type')
const authUserButton = document.querySelector('.auth__user')
const loginField = document.querySelector('.login_field')
const passwordField = document.querySelector('.password_field')

let teacherSelected = false

const hours = 2
const apiUrl = 'http://localhost:3000'

// function saveToken(token) {
//     document.cookie = `token=${token}; expires=${new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString()};path=/; secure; HttpOnly; SameSite=Lax`;
// }

function saveToken(token) {
    document.cookie = `token=${token}; expires=${new Date(Date.now() + 2 * 60 * 60 * 1000).toUTCString()}; path=/; secure`;
}

teacher.onclick = () => {
    if (student.classList.contains('active')) {
        student.classList.remove('active')
        teacher.classList.add('active')
    }
    teacherSelected = true
}

student.onclick = () => {
    if (teacher.classList.contains('active')) {
        teacher.classList.remove('active')
        student.classList.add('active')
    }
    teacherSelected = false
}

authUserButton.onclick = async () => {
    const email = loginField.value
    const password = passwordField.value

    const response = await fetch(`${apiUrl}/login${teacherSelected ? 'Teacher' : 'Student'}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    const { token, message } = await response.json()
    if (token) {
        saveToken(token)
        location.href = '/diarydevelopers.github.io/sgo/diary/index.html'
    } else {
        // todo send error message
    }
}