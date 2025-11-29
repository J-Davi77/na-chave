const header = document.querySelector('header');
const menuBtn = document.querySelector("#menu-btn");

function toggleMenu() {
    header.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleMenu);