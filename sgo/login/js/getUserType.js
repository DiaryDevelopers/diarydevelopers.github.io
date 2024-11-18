const student = document.querySelector('.student__type');
const teacher = document.querySelector('.teacher__type');
const userTypeBtn = document.getElementById('userType');

teacher.onclick = switchTypeOnTeacher;
student.onclick = switchTypeOnStudent;


function switchTypeOnTeacher() {
    if (student.classList.contains = ('active')) {
        student.classList.remove('active');
        teacher.classList.add('active');
    }
    else {
        console.error("ERROR!!! switchType() not worked!");
    }
}

function switchTypeOnStudent() {
    if(teacher.classList.contains = ('active')) {
        teacher.classList.remove('active');
        student.classList.add('active');
    }
    else {
        console.error("ERROR!!! switchType() not worked!");
    }
}