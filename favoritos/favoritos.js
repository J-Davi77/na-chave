window.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (el) =>
            new bootstrap.Tooltip(el, {
                trigger: "hover",
            })
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
let carros = JSON.parse(localStorage.getItem("carros")) || [
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
        cambio: "Auto.",
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 340,
        imagem: "320i.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina"],
        preco: 190,
        imagem: "sentra.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 150,
        imagem: "polo.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 210,
        imagem: "corolla.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 220,
        imagem: "civic.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 140,
        imagem: "hb20.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 145,
        imagem: "onix.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 260,
        imagem: "renegade.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 130,
        imagem: "ka.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina"],
        preco: 320,
        imagem: "a3.png",
        favoritado: false,
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
        cambio: "Auto.",
        combustivel: ["Gasolina", "Álcool"],
        preco: 250,
        imagem: "tracker.png",
        favoritado: false,
    },
];

// Função pra adicionar cada card de carro
function renderCars(cars) {
    if (cars.length === 0) {
        catalogo.innerHTML = `<p class="not-found">Você ainda não favoritou nenhum carro :(</p>`;
    }
    cars.forEach((car) => {
        catalogo.insertAdjacentHTML(
            "beforeend",
            `<div class="card-car" data-car-id="${car.id}">
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
                                <span class="valor marcha">${car.cambio}</span>
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
                            src="../assets/imgs/${
                                car.favoritado ? "heart-filled" : "heart"
                            }.svg"
                            width="30"
                            alt="Coração"
                        />
                    </button>
                </div>`
        );
    });
}

const favoritos = carros.filter((car) => car.favoritado == true);

renderCars(favoritos);

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
        threshold: 0.3,
    }
);

function favoritar(id, button) {
    const carro = carros.find((car) => car.id == id);
    if (!carro) return;

    if (carro.favoritado) {
        button.querySelector("img").src = "../assets/imgs/heart.svg";
        carro.favoritado = false;
    } else {
        button.querySelector("img").src = "../assets/imgs/heart-filled.svg";
        carro.favoritado = true;
    }

    localStorage.setItem("carros", JSON.stringify(carros));
}

const favoritosBtns = document.querySelectorAll(".favorito-btn");

favoritosBtns.forEach((btn) => {
    const carId = btn.closest("[data-car-id]").dataset.carId;
    btn.addEventListener("click", () => favoritar(carId, btn));
});

cardCarros.forEach((card) => observer.observe(card));

// detalhes dos carros
const detalhesBtns = document.querySelectorAll(".detalhes-btn");

const telaDetalhes = document.querySelector("#detalhes-overlay");

function mostrarDetalhes(id) {
    const carro = carros.find((car) => car.id == id);

    telaDetalhes.innerHTML = `<div id="detalhes-carro">
                <h2 id="titulo">Detalhes do veículo</h2>
                <div id="detalhes-img-container">
                    <img src="./car-imgs/${carro.imagem}" alt="${carro.nome}" />
                </div>
                <div id="detalhes">
                    <h3 id="nome">
                        ${carro.marca} <span class="modelo">${
        carro.modelo
    }</span>
                    </h3>
                    <span id="desc">${carro.desc}</span>

                    <div id="informacoes">
                        <div class="detalhe-container">
                            <span class="detalhe">Ano</span>
                            <span class="detalhe-valor ano">${carro.ano}</span>
                            <img
                                src="../assets/imgs/calendar.svg"
                                alt="Calendário"
                            />
                        </div>

                        <div class="detalhe-container">
                            <span class="detalhe">Km rodados</span>
                            <span class="detalhe-valor"
                                ><span id="km-rodados">${
                                    carro.kmRodados
                                }</span> Km</span
                            >
                            <img
                                src="../assets/imgs/odometer.svg"
                                alt="Odômetro"
                            />
                        </div>

                        <div class="detalhe-container">
                            <span class="detalhe">Km/L</span>
                            <span class="detalhe-valor km/l">${
                                carro.litragem
                            }</span>
                            <img
                                src="../assets/imgs/gasolina.svg"
                                alt="gasolina"
                            />
                        </div>

                        <div class="detalhe-container">
                            <span class="detalhe">Carroceria</span>
                            <span class="detalhe-valor carroceria">${
                                carro.categoria
                            }</span>
                            <img
                                src="../assets/imgs/carro.svg"
                                alt="carroceria"
                            />
                        </div>

                        <div class="detalhe-container">
                            <span class="detalhe">Câmbio</span>
                            <span class="detalhe-valor cambio">${
                                carro.cambio
                            }</span>
                            <img src="../assets/imgs/marcha.svg" alt="cambio" />
                        </div>

                        <div class="detalhe-container">
                            <span class="detalhe">Combustível</span>
                            <span class="detalhe-valor combustivel"
                                >${carro.combustivel.join("/")}</span
                            >
                            <img
                                src="../assets/imgs/gasolina.svg"
                                alt="gasolina"
                            />
                        </div>
                    </div>
                    <div id="section-container">
                        <div class="section-cor-aluguel">
                            <div>
                                <h3 class="section-title">Cor</h3>
                                <div id="cores">
                                    <button class="cor azul active"></button>
                                    <button class="cor vermelho"></button>
                                    <button class="cor preto"></button>
                                    <button class="cor prata"></button>
                                    <button class="cor branco"></button>
                                </div>
                            </div>
                            <div>
                                <h3 class="section-title">Aluguel</h3>
                                <div id="valor-container">
                                    <span class="preco-diario">
                                        R$ ${formatarPreco(carro.preco)}
                                    </span>
                                    <span class="diaria">/DIA</span>
                                </div>
                            </div>
                            <div class="sobre">
                                <h3 class="section-title">Sobre o carro</h3>
                                <p id="sobre-carro">
                                    ${carro.sobre}
                                </p>
                            </div>
                        </div>
                        <form class="section-input">
                            <div class="input-container">
                                <label for="local-retirada"
                                    >Local de retirada</label
                                >
                                <select
                                    name="localRetirada"
                                    id="local-retirada"
                                >
                                    <option value="">Selecione...</option>
                                </select>
                            </div>
                            <div class="input-grupo">
                                <div class="input-container">
                                    <label for="data-retirada"
                                        >Data de retirada</label
                                    >

                                    <input
                                        type="date"
                                        id="data-retirada"
                                        name="dataRetirada"
                                    />
                                </div>

                                <div class="input-container">
                                    <label for="hora-retirada"
                                        >Hora de retirada</label
                                    >

                                    <select
                                        name="horaRetirada"
                                        id="hora-retirada"
                                    >
                                        <option value="00:00">00:00</option>
                                        <option value="00:30">00:30</option>
                                        <option value="01:00">01:00</option>
                                        <option value="01:30">01:30</option>
                                        <option value="02:00">02:00</option>
                                        <option value="02:30">02:30</option>
                                        <option value="03:00">03:00</option>
                                        <option value="03:30">03:30</option>
                                        <option value="04:00">04:00</option>
                                        <option value="04:30">04:30</option>
                                        <option value="05:00">05:00</option>
                                        <option value="05:30">05:30</option>
                                        <option value="06:00">06:00</option>
                                        <option value="06:30">06:30</option>
                                        <option value="07:00">07:00</option>
                                        <option value="07:30">07:30</option>
                                        <option value="08:00">08:00</option>
                                        <option value="08:30">08:30</option>
                                        <option value="09:00">09:00</option>
                                        <option value="09:30">09:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>
                                        <option value="11:30">11:30</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option>
                                        <option value="15:00">15:00</option>
                                        <option value="15:30">15:30</option>
                                        <option value="16:00">16:00</option>
                                        <option value="16:30">16:30</option>
                                        <option value="17:00">17:00</option>
                                        <option value="17:30">17:30</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                        <option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option>
                                        <option value="22:30">22:30</option>
                                        <option value="23:00">23:00</option>
                                        <option value="23:30">23:30</option>
                                    </select>
                                </div>
                            </div>

                            <div class="input-container">
                                <label for="local-devolucao"
                                    >Local de devolução</label
                                >

                                <select
                                    name="localDevolucao"
                                    id="local-devolucao"
                                >
                                    <option value="">Selecione...</option>
                                </select>
                            </div>
                            <div class="input-grupo">
                                <div class="input-container">
                                    <label for="data-devolucao"
                                        >Data de devolução</label
                                    >

                                    <input
                                        type="date"
                                        id="data-devolucao"
                                        name="dataDevolucao"
                                    />
                                </div>

                                <div class="input-container">
                                    <label for="hora-devolucao"
                                        >Hora de devolução</label
                                    >

                                    <select
                                        name="horaDevolucao"
                                        id="hora-devolucao"
                                    >
                                        <option value="00:00">00:00</option>
                                        <option value="00:30">00:30</option>
                                        <option value="01:00">01:00</option>
                                        <option value="01:30">01:30</option>
                                        <option value="02:00">02:00</option>
                                        <option value="02:30">02:30</option>
                                        <option value="03:00">03:00</option>
                                        <option value="03:30">03:30</option>
                                        <option value="04:00">04:00</option>
                                        <option value="04:30">04:30</option>
                                        <option value="05:00">05:00</option>
                                        <option value="05:30">05:30</option>
                                        <option value="06:00">06:00</option>
                                        <option value="06:30">06:30</option>
                                        <option value="07:00">07:00</option>
                                        <option value="07:30">07:30</option>
                                        <option value="08:00">08:00</option>
                                        <option value="08:30">08:30</option>
                                        <option value="09:00">09:00</option>
                                        <option value="09:30">09:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>
                                        <option value="11:30">11:30</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option>
                                        <option value="15:00">15:00</option>
                                        <option value="15:30">15:30</option>
                                        <option value="16:00">16:00</option>
                                        <option value="16:30">16:30</option>
                                        <option value="17:00">17:00</option>
                                        <option value="17:30">17:30</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                        <option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option>
                                        <option value="22:30">22:30</option>
                                        <option value="23:00">23:00</option>
                                        <option value="23:30">23:30</option>
                                    </select>
                                </div>
                                </div>
                                </form>
                    </div>
                    <button id="pagamento-btn">
                        <img
                            src="../assets/imgs/cartao.svg"
                            alt="cartão de crédito"
                        />
                        <span>Reservar e ir para pagamento</span>
                        </button>
                        </div>
                        </div>
                        <button id="voltar-btn">
                        <img src="../assets/imgs/seta.svg" alt="seta" width="30" />
                        <span>Voltar ao catálogo</span>
                        </button>`;

    const voltarBtn = telaDetalhes.querySelector("#voltar-btn");

    voltarBtn.addEventListener("click", () =>
        telaDetalhes.classList.remove("show")
    );

    telaDetalhes.classList.add("show");
}

detalhesBtns.forEach((btn) => {
    const carId = btn.closest("[data-car-id").dataset.carId;

    btn.addEventListener("click", () => mostrarDetalhes(carId));
});
