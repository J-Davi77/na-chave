const select = document.getElementById("duvida");
const section = document.querySelectorAll(".faq");

select.addEventListener("change", function () {
    section.forEach((atual) => (atual.style.display = "none"));

    const escolha = select.value;
    const secao_escolhida = document.getElementById(escolha);

    if (secao_escolhida) {
        secao_escolhida.style.display = "block";
        const melhor = document.getElementById("melhor");
        melhor.style.textAlign = "center";
    }
});

const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");

function toggleMenu() {
    header.classList.toggle("show");
}

menuBtn.addEventListener("click", toggleMenu);
