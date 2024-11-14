let btnOpenModal = document.querySelector(".burger");
let Modal = document.querySelector(".list");
let ModalNav = document.querySelector(".nav__menu");
let ModalIs = false;
let head = document.querySelector('header');
let navWord1 = document.querySelector('.nav__word1');
let navWord2 = document.querySelector('.nav__word2');
let navWord3 = document.querySelector('.nav__word3');

function Open() {
    Modal.style.display = "block";
    Modal.style.opacity = 1;
}

function Close() {
    Modal.style.display = "none";
    Modal.style.opacity = 0;
}

function ModalWindow() {
    if (ModalIs == true) {
        Modal.style.opacity = 0;
        setTimeout(function() { 
            Modal.style.display = "none";
            navWord1.style.display = "none";
            navWord2.style.display = "none";
            navWord3.style.display = "none";
    }, 200);
        ModalIs = false;
        btnOpenModal.classList.remove('open');
        head.style.zIndex = 0;
    } 
    else if (ModalIs == false) {
        Modal.style.transition = '.3s';
        Modal.style.opacity = 1;
        Modal.style.display = "block";
        navWord1.style.display = "block";
        navWord2.style.display = "block";
        navWord3.style.display = "block";

        ModalIs = true;
        btnOpenModal.classList.add('open');
        head.style.zIndex = 5000000;


        
    }
}
