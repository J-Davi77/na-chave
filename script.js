const tiposCarros = document.querySelectorAll(".tipo-carro");
let animationDelay = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated')
        } else {
            entry.target.classList.remove('animated')
            entry.target.classList.add('hide')
        }
    })
}, {
    threshold: 0.1
})


tiposCarros.forEach((tipo) => {
    tipo.style.animationDelay = `${animationDelay}s`;
    animationDelay += 0.1;
    observer.observe(tipo);
});



const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");

function toggleMenu() {
    header.classList.toggle("show");
}

menuBtn.addEventListener("click", toggleMenu);
