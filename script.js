const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const tiposCarros = document.querySelectorAll(".tipo-carro");
let animationDelay = 0;
tiposCarros.forEach((tipo) => {
    tipo.style.animationDelay = `${animationDelay}s`;
    animationDelay += 0.1;
});

function toggleMenu() {
    header.classList.toggle("show");
}

menuBtn.addEventListener("click", toggleMenu);
