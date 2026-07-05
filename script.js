const carros = [
    { nome: "Jetta 2.5 5 Cilindros (2010)", marca: "volkswagen", preco: "R$ 65.900", km: "60.000 km", imagem: "Jetta.jpg" },
    { nome: "Mobi 1.0 (Zero Km)", marca: "fiat", preco: "R$ 80.000", km: "0 km", imagem: "Mobi.jpg" },
    { nome: "911 Carrera GTS", marca: "porsche", preco: "R$ 850.000", km: "12.000 km", imagem: "Porsche.jpg" },
    { nome: "Civic Type R", marca: "honda", preco: "R$ 360.000", km: "5.000 km", imagem: "Civic.jpg" },
    { nome: "Corolla XEI", marca: "toyota", preco: "R$ 125.000", km: "45.000 km", imagem: "Corolla.jpg" },
    { nome: "Onix Premier Turbo", marca: "chevrolet", preco: "R$ 89.900", km: "30.000 km", imagem: "Onix.jpg" }
];

const vitrine = document.getElementById('vitrine');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function renderizarCarros(listaFiltro) {
    vitrine.innerHTML = ""; 
    
    if (listaFiltro.length === 0) {
        vitrine.innerHTML = `<p style="grid-column: 1/-1; color: #ef4444; font-size: 18px;">Nenhum veículo encontrado para essa marca.</p>`;
        return;
    }

    listaFiltro.forEach(carro => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="car-img-container">
                <img src="${carro.imagem}" alt="${carro.nome}" class="car-img">
            </div>
            <h3>${carro.nome}</h3>
            <p class="car-brand">${carro.marca}</p>
            <p class="car-km">📈 ${carro.km}</p>
            <p class="car-price">${carro.preco}</p>
        `;
        vitrine.appendChild(card);
    });
}

function filtrarMarcas() {
    const termo = searchInput.value.toLowerCase().trim();
    if (termo === "") {
        renderizarCarros(carros);
    } else {
        const carrosFiltrados = carros.filter(carro => carro.marca.includes(termo));
        renderizarCarros(carrosFiltrados);
    }
}

searchBtn.addEventListener('click', filtrarMarcas);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') filtrarMarcas();
});

renderizarCarros(carros);
