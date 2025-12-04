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

const catalogo = document.querySelector("#catalogo");

// Simulação de um fetch no backend
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
    {
        id: 5,
        nome: "TOYOTA COROLLA",
        marca: "TOYOTA",
        modelo: "COROLLA",
        desc: "1.8 FLEX ALTIS",
        litragem: 1.8,
        categoria: "SEDAN",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 210,
        imagem: "corolla.png",
    },
    {
        id: 6,
        nome: "HONDA CIVIC",
        marca: "HONDA",
        modelo: "CIVIC",
        desc: "2.0 FLEX EXL",
        litragem: 2.0,
        categoria: "SEDAN",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 220,
        imagem: "civic.png",
    },
    {
        id: 7,
        nome: "HYUNDAI HB20",
        marca: "HYUNDAI",
        modelo: "HB20",
        desc: "1.0 FLEX VISION",
        litragem: 1.0,
        categoria: "HATCH",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 140,
        imagem: "hb20.png",
    },
    {
        id: 8,
        nome: "CHEVROLET ONIX",
        marca: "CHEVROLET",
        modelo: "ONIX",
        desc: "1.0 FLEX PLUS",
        litragem: 1.0,
        categoria: "HATCH",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 145,
        imagem: "onix.png",
    },
    {
        id: 9,
        nome: "JEEP RENEGADE",
        marca: "JEEP",
        modelo: "RENEGADE",
        desc: "1.3 T270 FLEX LONGITUDE",
        litragem: 1.3,
        categoria: "SUV",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 260,
        imagem: "renegade.png",
    },
    {
        id: 10,
        nome: "FORD KA",
        marca: "FORD",
        modelo: "KA",
        desc: "1.0 FLEX SE",
        litragem: 1.0,
        categoria: "HATCH",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 130,
        imagem: "ka.png",
    },
    {
        id: 11,
        nome: "AUDI A3",
        marca: "AUDI",
        modelo: "A3",
        desc: "2.0 TFSI SPORTBACK",
        litragem: 2.0,
        categoria: "HATCH",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina"],
        preco: 320,
        imagem: "a3.png",
    },
    {
        id: 12,
        nome: "CHEVROLET TRACKER",
        marca: "CHEVROLET",
        modelo: "TRACKER",
        desc: "1.2 TURBO PREMIER",
        litragem: 1.2,
        categoria: "SUV",
        ano: 2026,
        kmRodados: 0,
        tipoMarcha: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 250,
        imagem: "tracker.png",
    },
];

// Função pra adicionar cada card de carro
function renderCars(cars) {
    cars.forEach((car) => {
        catalogo.insertAdjacentHTML(
            "beforeend",
            `<div class="card-car" data-carId="${car.id}">
                    <div class="car-img-container">
                        <img
                            src="./car-imgs/${car.imagem}"
                            alt="${car.nome}"
                            width="200"
                            loading="lazy"
                        />
                    </div>
                    <h2 class="nome">
                        ${car.marca} <span class="modelo">${car.modelo}</span>
                    </h2>

                    <div class="informacoes">
                        <div class="informacao">
                            <span class="desc">${car.desc}</span>
                        </div>

                        <div class="grupo-informacao">
                            <div class="informacao">
                                <img
                                    src="../assets/imgs/calendar.svg"
                                    alt="calendário"
                                    loading="lazy"
                                />
                                <span class="valor ano">${car.ano}</span>
                            </div>
                            <div class="informacao">
                                <div>
                                    <span class="atributo">
                                        <img
                                            src="../assets/imgs/odometer.svg"
                                            alt="Quantidade de km rodados"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span class="valor"
                                        ><span class="km-rodados">${
                                            car.kmRodados
                                        }</span>
                                        Km</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="grupo-informacao">
                            <div class="informacao">
                                <span class="atributo">
                                    <img
                                        src="../assets/imgs/marcha.svg"
                                        alt="tipo
                                de marcha"
                                        loading="lazy"
                                    />
                                </span>
                                <span class="valor marcha">${
                                    car.tipoMarcha
                                }</span>
                            </div>
                            <div class="informacao">
                                <span class="atributo">
                                    <img
                                        src="../assets/imgs/gasolina.svg"
                                        alt="gasolina"
                                    />
                                </span>
                                <span class="valor gasolina"
                                    >${car.combustivel.join("/")}</span
                                >
                            </div>
                        </div>

                        <div class="preco-container">
                            <span class="moeda">R$ </span>
                            <span class="preco"> ${formatarPreco(
                                car.preco
                            )}</span>
                            <span class="diaria">/ DIA</span>
                        </div>
                        <div class="detalhes-btn-container">
                            <button class="detalhes-btn">
                                <span class="btn-content">
                                    Ver detalhes
                                    <img
                                        src="../assets/imgs/pesquisa.svg"
                                        width="20"
                                        alt="lupa"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="categoria-badge">${car.categoria}</div>
                    <button class="favorito-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Favoritar">
                        <img
                            src="../assets/imgs/heart.svg"
                            width="30"
                            alt="Coração"
                        />
                    </button>
                </div>`
        );
    });
}

renderCars(carros);

const cardCarros = document.querySelectorAll(".card-car");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.4,
    }
);

cardCarros.forEach((card) => observer.observe(card));
