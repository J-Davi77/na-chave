window.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (el) => new bootstrap.Tooltip(el)
    );
});
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");

function toggleMenu() {
    header.classList.toggle("show");
}

menuBtn.addEventListener("click", toggleMenu);

function formatarPreco(num) {
    return num.toFixed(2).replace(".", ",");
}

const carros = [
    {
        id: 1,
        nome: "VOLKSWAGEN NIVUS",
        marca: "VOLKSWAGEN",
        modelo: "NIVUS",
        desc: "200 FLEX TSI HIGHLINE",
        litragem: 1,
        categoria: "SUV",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 230,
        imagem: "nivus.png",
    },
    {
        id: 2,
        nome: "BMW 320I",
        marca: "BMW",
        modelo: "320I",
        desc: "TURBO FLEX SPORT GP",
        litragem: 2,
        categoria: "SEDAN",
        ano: 2025,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 340,
        imagem: "320i.png",
    },

    {
        id: 3,
        nome: "NISSAN SENTRA",
        marca: "NISSAN",
        modelo: "SENTRA",
        desc: "ADVANCE XTRONIC",
        litragem: 2,
        categoria: "SEDAN",
        ano: 2025,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina"],
        preco: 190,
        imagem: "sentra.png",
    },

    {
        id: 4,
        nome: "VOLKSWAGEN POLO",
        marca: "VOLKSWAGEN",
        modelo: "POLO",
        desc: "170 FLEX TSI HIGHLINE",
        litragem: 1,
        categoria: "HATCH",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 150,
        imagem: "polo.png",
    },
];
