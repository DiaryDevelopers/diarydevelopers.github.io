let btnOpenModal = document.querySelector(".burger");
let Modal = document.querySelector(".list");
let ModalNav = document.querySelector(".nav__menu");
let ModalIs = false;
let head = document.querySelector('header');

function ModalWindow() {
    if (ModalIs == true) {
        Modal.style.opacity = 0;
        window.navigator.vibrate(50);
        setTimeout(function() { 
            Modal.classList.toggle('deactivate');
            ModalNav.classList.toggle('deactivate');

            Modal.classList.toggle('activate');
            ModalNav.classList.toggle('activate');
    }, 200);
        ModalIs = false;
        btnOpenModal.classList.remove('open');
        head.style.zIndex = 0;
    } 
    else if (ModalIs == false) {
        Modal.classList.toggle('deactivate');
        ModalNav.classList.toggle('deactivate');
        Modal.classList.toggle('activate');
        ModalNav.classList.toggle('activate');
        Modal.style.transition = '.3s';
        Modal.style.opacity = 1;
        Modal.style.display = "block";

        ModalIs = true;
        btnOpenModal.classList.add('open');
        head.style.zIndex = 5000000;


        
    }
}