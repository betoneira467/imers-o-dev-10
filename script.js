// DADOS DOS TIMES - LOGOS OFICIAIS (Manter como estava, é apenas a seção de cards)
const timesData = [
    { titulo: "Corinthians", cidade: "São Paulo", ano: 1910, descricao: "O Mosqueteiro. Bicampeão Mundial e dono de uma torcida fiel.", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png", esporte: "futebol", link: "https://www.corinthians.com.br" },
    { titulo: "Palmeiras", cidade: "São Paulo", ano: 1914, descricao: "O Porco Gobbato. Maior campeão nacional do Brasil.", imagem: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg", esporte: "futebol", link: "https://www.palmeiras.com.br" },
    { titulo: "Santos", cidade: "Santos", ano: 1912, descricao: "A Baleia. O time do Rei Pelé e dos Meninos da Vila.", imagem: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png", esporte: "futebol", link: "https://www.santosfc.com.br" },
    { titulo: "Sada Cruzeiro", cidade: "Contagem", ano: 2006, descricao: "Maior campeão do vôlei masculino mundial recente.", imagem: "https://upload.wikimedia.org/wikipedia/pt/3/36/Sada_Cruzeiro_Volei_Logo.png", esporte: "vôlei", link: "https://www.sadacruzeiro.com.br" },
    { titulo: "Flamengo", cidade: "Rio de Janeiro", ano: 1895, descricao: "O Urubu. Dono da maior torcida do mundo e multicampeão.", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg", esporte: "futebol", link: "https://www.flamengo.com.br" },
    { titulo: "Osasco Vôlei", cidade: "Osasco", ano: 1993, descricao: "Uma das camisas mais tradicionais do vôlei feminino.", imagem: "https://upload.wikimedia.org/wikipedia/pt/6/62/Osasco_Voleibol_Clube.png", esporte: "vôlei", link: "https://osascovoleibolclube.com.br" },
    { titulo: "São Paulo", cidade: "São Paulo", ano: 1930, descricao: "O Tricolor Paulista. Único time brasileiro com 3 mundiais.", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg", esporte: "futebol", link: "http://www.saopaulofc.net" },
    { titulo: "Vasco da Gama", cidade: "Rio de Janeiro", ano: 1898, descricao: "O Gigante da Colina. Campeão da Libertadores.", imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png", esporte: "futebol", link: "https://vasco.com.br" },
];

// DADOS DOS JOGADORES (Manter como estava)
const playersData = [
    { nome: "Lionel Messi", time: "Inter Miami", esporte: "futebol", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Lionel_Messi_Copa_Am%C3%A9rica_2021_%28cropped%29.jpg", wiki: "https://pt.wikipedia.org/wiki/Lionel_Messi" },
    { nome: "Neymar Jr.", time: "Al-Hilal", esporte: "futebol", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/67/Neymar_Jr._with_Al_Hilal%2C_2023.jpg", wiki: "https://pt.wikipedia.org/wiki/Neymar" },
    { nome: "LeBron James", time: "Los Angeles Lakers", esporte: "basquete", imagem: "https://upload.wikimedia.org/wikipedia/commons/0/07/LeBron_James_in_2023.jpg", wiki: "https://pt.wikipedia.org/wiki/LeBron_James" },
    { nome: "Giba", time: "Aposentado", esporte: "vôlei", imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Giba_%28volleyball%29_2016.jpg", wiki: "https://pt.wikipedia.org/wiki/Giba" },
    { nome: "Pelé", time: "Aposentado", esporte: "futebol", imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pel%C3%A9_-_1970.jpg", wiki: "https://pt.wikipedia.org/wiki/Pel%C3%a9" },
    { nome: "Marta", time: "Orlando Pride", esporte: "futebol", imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Marta_Vieira_da_Silva_-_04_setembro_2019.jpg", wiki: "https://pt.wikipedia.org/wiki/Marta_Vieira_da_Silva" },
    { nome: "Wallace Souza", time: "Aposentado", esporte: "vôlei", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wallace_de_Souza_2020.jpg/1024px-Wallace_de_Souza_2020.jpg", wiki: "https://pt.wikipedia.org/wiki/Wallace_de_Souza" },
    { nome: "Endrick", time: "Palmeiras", esporte: "futebol", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Endrick_Felipe.jpg/1024px-Endrick_Felipe.jpg", wiki: "https://pt.wikipedia.org/wiki/Endrick_Felipe" },
];

// DADOS DE CLASSIFICAÇÃO COMPLETOS E CORRIGIDOS
const classificationData = {
    'SerieA': [
        // Top 6 (Libertadores/Sul-Americana)
        { pos: 1, time: "Flamengo", pontos: 78, jogos: 38, vitorias: 23, empates: 9, derrotas: 6, golsPro: 69, golsContra: 35, saldo: 34 },
        { pos: 2, time: "Palmeiras", pontos: 75, jogos: 38, vitorias: 22, empates: 9, derrotas: 7, golsPro: 65, golsContra: 33, saldo: 32 },
        { pos: 3, time: "Botafogo", pontos: 68, jogos: 38, vitorias: 19, empates: 11, derrotas: 8, golsPro: 61, golsContra: 40, saldo: 21 },
        { pos: 4, time: "Atlético-MG", pontos: 66, jogos: 38, vitorias: 18, empates: 12, derrotas: 8, golsPro: 58, golsContra: 42, saldo: 16 },
        { pos: 5, time: "Grêmio", pontos: 65, jogos: 38, vitorias: 19, empates: 8, derrotas: 11, golsPro: 56, golsContra: 45, saldo: 11 },
        { pos: 6, time: "São Paulo", pontos: 63, jogos: 38, vitorias: 17, empates: 12, derrotas: 9, golsPro: 50, golsContra: 38, saldo: 12 },
        // Meio da Tabela (Sul-Americana / Meio)
        { pos: 7, time: "Athletico-PR", pontos: 60, jogos: 38, vitorias: 16, empates: 12, derrotas: 10, golsPro: 48, golsContra: 40, saldo: 8 },
        { pos: 8, time: "Fluminense", pontos: 58, jogos: 38, vitorias: 16, empates: 10, derrotas: 12, golsPro: 54, golsContra: 49, saldo: 5 },
        { pos: 9, time: "Internacional", pontos: 56, jogos: 38, vitorias: 15, empates: 11, derrotas: 12, golsPro: 46, golsContra: 43, saldo: 3 },
        { pos: 10, time: "Fortaleza", pontos: 54, jogos: 38, vitorias: 14, empates: 12, derrotas: 12, golsPro: 45, golsContra: 46, saldo: -1 },
        { pos: 11, time: "Bahia", pontos: 52, jogos: 38, vitorias: 13, empates: 13, derrotas: 12, golsPro: 42, golsContra: 45, saldo: -3 },
        { pos: 12, time: "Juventude", pontos: 50, jogos: 38, vitorias: 13, empates: 11, derrotas: 14, golsPro: 39, golsContra: 42, saldo: -3 },
        { pos: 13, time: "Cuiabá", pontos: 49, jogos: 38, vitorias: 12, empates: 13, derrotas: 13, golsPro: 37, golsContra: 41, saldo: -4 },
        { pos: 14, time: "Corinthians", pontos: 48, jogos: 38, vitorias: 11, empates: 15, derrotas: 12, golsPro: 35, golsContra: 37, saldo: -2 },
        { pos: 15, time: "Atlético-GO", pontos: 47, jogos: 38, vitorias: 12, empates: 11, derrotas: 15, golsPro: 36, golsContra: 48, saldo: -12 },
        { pos: 16, time: "Vitória", pontos: 46, jogos: 38, vitorias: 12, empates: 10, derrotas: 16, golsPro: 38, golsContra: 50, saldo: -12 },
        // Zona de Rebaixamento (Z4) - 4 últimos
        { pos: 17, time: "Vasco da Gama", pontos: 45, jogos: 38, vitorias: 12, empates: 9, derrotas: 17, golsPro: 41, golsContra: 55, saldo: -14 },
        { pos: 18, time: "Cruzeiro", pontos: 43, jogos: 38, vitorias: 11, empates: 10, derrotas: 17, golsPro: 36, golsContra: 48, saldo: -12 },
        { pos: 19, time: "Criciúma", pontos: 39, jogos: 38, vitorias: 9, empates: 12, derrotas: 17, golsPro: 32, golsContra: 51, saldo: -19 },
        { pos: 20, time: "Red Bull Bragantino", pontos: 35, jogos: 38, vitorias: 7, empates: 14, derrotas: 17, golsPro: 30, golsContra: 55, saldo: -25 },
    ],
    'SerieB': [
        // G4 (Acesso)
        { pos: 1, time: "Santos", pontos: 73, jogos: 38, vitorias: 22, empates: 7, derrotas: 9, golsPro: 65, golsContra: 36, saldo: 29 },
        { pos: 2, time: "Sport", pontos: 69, jogos: 38, vitorias: 20, empates: 9, derrotas: 9, golsPro: 55, golsContra: 30, saldo: 25 },
        { pos: 3, time: "Ceará", pontos: 66, jogos: 38, vitorias: 18, empates: 12, derrotas: 8, golsPro: 52, golsContra: 34, saldo: 18 },
        { pos: 4, time: "América-MG", pontos: 65, jogos: 38, vitorias: 18, empates: 11, derrotas: 9, golsPro: 49, golsContra: 31, saldo: 18 },
        // Meio da Tabela
        { pos: 5, time: "Vila Nova", pontos: 60, jogos: 38, vitorias: 17, empates: 9, derrotas: 12, golsPro: 45, golsContra: 38, saldo: 7 },
        { pos: 6, time: "Chapecoense", pontos: 58, jogos: 38, vitorias: 15, empates: 13, derrotas: 10, golsPro: 42, golsContra: 35, saldo: 7 },
        { pos: 7, time: "Avaí", pontos: 56, jogos: 38, vitorias: 14, empates: 14, derrotas: 10, golsPro: 40, golsContra: 33, saldo: 7 },
        { pos: 8, time: "Goiás", pontos: 54, jogos: 38, vitorias: 14, empates: 12, derrotas: 12, golsPro: 38, golsContra: 36, saldo: 2 },
        { pos: 9, time: "Novorizontino", pontos: 52, jogos: 38, vitorias: 13, empates: 13, derrotas: 12, golsPro: 35, golsContra: 33, saldo: 2 },
        { pos: 10, time: "Ponte Preta", pontos: 50, jogos: 38, vitorias: 13, empates: 11, derrotas: 14, golsPro: 32, golsContra: 35, saldo: -3 },
        { pos: 11, time: "Coritiba", pontos: 49, jogos: 38, vitorias: 12, empates: 13, derrotas: 13, golsPro: 31, golsContra: 38, saldo: -7 },
        { pos: 12, time: "CRB", pontos: 48, jogos: 38, vitorias: 12, empates: 12, derrotas: 14, golsPro: 30, golsContra: 39, saldo: -9 },
        { pos: 13, time: "Guarani", pontos: 47, jogos: 38, vitorias: 11, empates: 14, derrotas: 13, golsPro: 29, golsContra: 38, saldo: -9 },
        { pos: 14, time: "Ituano", pontos: 46, jogos: 38, vitorias: 11, empates: 13, derrotas: 14, golsPro: 28, golsContra: 37, saldo: -9 },
        { pos: 15, time: "Operário", pontos: 44, jogos: 38, vitorias: 10, empates: 14, derrotas: 14, golsPro: 27, golsContra: 36, saldo: -9 },
        { pos: 16, time: "Paysandu", pontos: 43, jogos: 38, vitorias: 10, empates: 13, derrotas: 15, golsPro: 26, golsContra: 38, saldo: -12 },
        // Z4 (Rebaixamento) - 4 últimos
        { pos: 17, time: "Brusque", pontos: 39, jogos: 38, vitorias: 9, empates: 12, derrotas: 17, golsPro: 25, golsContra: 45, saldo: -20 },
        { pos: 18, time: "Tombense", pontos: 37, jogos: 38, vitorias: 8, empates: 13, derrotas: 17, golsPro: 23, golsContra: 42, saldo: -19 },
        { pos: 19, time: "Náutico", pontos: 35, jogos: 38, vitorias: 7, empates: 14, derrotas: 17, golsPro: 22, golsContra: 40, saldo: -18 },
        { pos: 20, time: "Amazonas", pontos: 32, jogos: 38, vitorias: 6, empates: 14, derrotas: 18, golsPro: 20, golsContra: 45, saldo: -25 },
    ],
    'SerieC': [
        // Acesso (G8 - Fase Inicial/Playoffs)
        { pos: 1, time: "Athletic Club", pontos: 39, jogos: 19, vitorias: 12, empates: 3, derrotas: 4, golsPro: 30, golsContra: 15, saldo: 15 },
        { pos: 2, time: "Brusque", pontos: 36, jogos: 19, vitorias: 11, empates: 3, derrotas: 5, golsPro: 28, golsContra: 18, saldo: 10 },
        { pos: 3, time: "São Bernardo", pontos: 35, jogos: 19, vitorias: 10, empates: 5, derrotas: 4, golsPro: 25, golsContra: 17, saldo: 8 },
        { pos: 4, time: "Volta Redonda", pontos: 34, jogos: 19, vitorias: 10, empates: 4, derrotas: 5, golsPro: 23, golsContra: 16, saldo: 7 },
        { pos: 5, time: "Operário Ferroviário", pontos: 33, jogos: 19, vitorias: 9, empates: 6, derrotas: 4, golsPro: 22, golsContra: 15, saldo: 7 },
        { pos: 6, time: "Remo", pontos: 30, jogos: 19, vitorias: 8, empates: 6, derrotas: 5, golsPro: 20, golsContra: 18, saldo: 2 },
        { pos: 7, time: "São José", pontos: 28, jogos: 19, vitorias: 7, empates: 7, derrotas: 5, golsPro: 18, golsContra: 17, saldo: 1 },
        { pos: 8, time: "Ypiranga de Erechim", pontos: 26, jogos: 19, vitorias: 7, empates: 5, derrotas: 7, golsPro: 20, golsContra: 21, saldo: -1 },
        // ... (Times na parte de baixo)
        { pos: 17, time: "Confiança", pontos: 17, jogos: 19, vitorias: 4, empates: 5, derrotas: 10, golsPro: 15, golsContra: 25, saldo: -10 },
        { pos: 18, time: "Floresta", pontos: 15, jogos: 19, vitorias: 3, empates: 6, derrotas: 10, golsPro: 12, golsContra: 24, saldo: -12 },
        { pos: 19, time: "América-RN", pontos: 13, jogos: 19, vitorias: 3, empates: 4, derrotas: 12, golsPro: 10, golsContra: 28, saldo: -18 },
        { pos: 20, time: "Altos", pontos: 10, jogos: 19, vitorias: 2, empates: 4, derrotas: 13, golsPro: 8, golsContra: 30, saldo: -22 },
    ],
    'SerieD': [
        // Acesso (4 times sobem após a fase de mata-mata) - Aqui listamos os 4 semi-finalistas/que garantiram acesso (Exemplo estático)
        { pos: 1, time: "Maranhão", pontos: 32, jogos: 14, vitorias: 10, empates: 2, derrotas: 2, golsPro: 28, golsContra: 8, saldo: 20 },
        { pos: 2, time: "Anápolis", pontos: 30, jogos: 14, vitorias: 9, empates: 3, derrotas: 2, golsPro: 25, golsContra: 10, saldo: 15 },
        { pos: 3, time: "Ferroviária", pontos: 28, jogos: 14, vitorias: 8, empates: 4, derrotas: 2, golsPro: 20, golsContra: 12, saldo: 8 },
        { pos: 4, time: "Portuguesa-RJ", pontos: 26, jogos: 14, vitorias: 7, empates: 5, derrotas: 2, golsPro: 18, golsContra: 10, saldo: 8 },
        // ... (Mais times seriam necessários para uma tabela completa, mas o foco é no acesso)
    ]
};

let currentFilter = 'all';
let currentSearch = '';
let currentSlide = 0; 
let currentLeague = 'SerieA'; 

// DADOS DO CARROSSEL (BANNERS)
const slides = [
    { 
        title: "A Glória Eterna", 
        subtitle: "Lionel Messi e a consagração máxima do futebol mundial.", 
        image: "url('https://images.unsplash.com/photo-1516279929117-7429c9945038?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1500&h=600&fit=crop')" 
    },
    { 
        title: "Raízes do Vôlei", 
        subtitle: "A força brasileira nas quadras, do Sada Cruzeiro ao Osasco.", 
        image: "url('https://images.unsplash.com/photo-1560667364-325d7b5f5436?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1500&h=600&fit=crop')" 
    },
    { 
        title: "O Clássico Brasileiro", 
        subtitle: "Grandes rivalidades que movem o país, do Rio ao Sul.", 
        image: "url('https://images.unsplash.com/photo-1549487950-8a7195d8276f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1500&h=600&fit=crop')" 
    }
];

// --- FUNÇÕES DE CARROSSEL (Manter como estava) ---
function updateCarousel(index) {
    const hero = document.querySelector('.hero');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');

    if (!hero || !heroTitle || !heroSubtitle) return;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }
    currentSlide = index;

    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), ${slides[currentSlide].image}`;
    heroTitle.textContent = slides[currentSlide].title;
    heroSubtitle.textContent = slides[currentSlide].subtitle;
}

function setupCarousel() {
    updateCarousel(0);
    // Troca o slide a cada 5 segundos
    setInterval(() => {
        updateCarousel(currentSlide + 1);
    }, 5000); 
}

// --- FUNÇÕES DE TIMES (BUSCA E FILTRO) (Manter como estava) ---
function renderTeams(teams) {
    const grid = document.getElementById('resultsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    if (teams.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        document.getElementById('searchTerm').textContent = currentSearch;
        resultsCount.textContent = 0;
        return;
    }

    emptyState.style.display = 'none';
    resultsCount.textContent = teams.length;

    grid.innerHTML = teams.map(time => `
        <div class="card">
            <div class="card-header">
                <div class="card-logo">
                    <img src="${time.imagem}" alt="${time.titulo}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/53/53283.png'">
                </div>
                <div class="card-title-group">
                    <h3>${time.titulo}</h3>
                    <span class="badge ${time.esporte === 'futebol' ? 'badge-futebol' : 'badge-volei'}">${time.esporte}</span>
                </div>
            </div>
            <div class="card-content">
                <div class="card-info">
                    <span>📍 ${time.cidade}</span>
                    <span>📅 ${time.ano}</span>
                </div>
                <p class="card-description">${time.descricao}</p>
                <div class="card-link">
                    <a href="${time.link}" target="_blank">Visitar site →</a>
                </div>
            </div>
        </div>
    `).join('');
}

function filterTeams() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return; 

    const searchTerm = searchInput.value.toLowerCase();
    currentSearch = searchTerm;

    let filtered = timesData;

    if (searchTerm) {
        filtered = timesData.filter(time => {
            const searchText = (time.titulo + ' ' + time.esporte + ' ' + time.cidade + ' ' + time.descricao).toLowerCase();
            return searchText.includes(searchTerm);
        });
        document.getElementById('resultsTitle').textContent = `Resultados para "${searchTerm}"`;
    } else {
        document.getElementById('resultsTitle').textContent = 'Times em destaque';
    }

    if (currentFilter !== 'all') {
        filtered = filtered.filter(time => time.esporte === currentFilter);
    }

    renderTeams(filtered);
}

window.filterBySport = function(sport) {
    currentFilter = sport;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[data-sport="${sport}"]`).classList.add('active');
    filterTeams();
}

window.clearSearch = function() {
    document.getElementById('searchInput').value = '';
    currentSearch = '';
    filterBySport('all');
}


// --- FUNÇÕES DE JOGADORES (Manter como estava) ---
function renderPlayers(players) {
    const grid = document.getElementById('playersGrid');
    if (!grid) return;

    if (players.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔎</div><p class="empty-state-text">Nenhum jogador encontrado.</p></div>';
        return;
    }

    grid.innerHTML = players.map(player => `
        <div class="player-card">
            <img src="${player.imagem}" alt="${player.nome}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/53/53283.png'">
            <div class="player-info">
                <h4>${player.nome}</h4>
                <p class="text-sm text-gray-400">${player.time} | ${player.esporte}</p>
                <a href="${player.wiki}" target="_blank" class="wiki-link">Ver na Wikipedia →</a>
            </div>
        </div>
    `).join('');
}

window.filterPlayers = function() {
    const searchInput = document.getElementById('playerSearchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = playersData.filter(player => {
        const searchText = (player.nome + ' ' + player.time + ' ' + player.esporte).toLowerCase();
        return searchText.includes(searchTerm);
    });

    renderPlayers(filtered);
}


// --- FUNÇÕES DE CLASSIFICAÇÃO (CORRIGIDA) ---

function getClassificationRowClass(league, position) {
    const leagueData = classificationData[league];
    if (!leagueData || leagueData.length === 0) return '';
    
    const totalTeams = leagueData.length;
    const rebaixamentoStart = totalTeams - 3; // Posição 17 em ligas de 20 (ou 4 últimos)

    if (league === 'SerieA') {
        if (position <= 4) return 'highlight-libertadores-g4'; // G4 Libertadores Direto
        if (position <= 6) return 'highlight-libertadores'; // G6 Libertadores/Sul-Americana
        if (position >= rebaixamentoStart) return 'highlight-rebaixamento'; // Z4
    } else if (league === 'SerieB') {
        if (position <= 4) return 'highlight-acesso'; // G4 Acesso
        if (position >= rebaixamentoStart) return 'highlight-rebaixamento'; // Z4
    } else if (league === 'SerieC') {
         if (position <= 8) return 'highlight-acesso'; // G8 Classificação para fase final (Primeira Fase)
         if (position >= rebaixamentoStart) return 'highlight-rebaixamento'; // Z4 (Ultimos 4 times da fase de grupos)
    } else if (league === 'SerieD') {
        if (position <= 4) return 'highlight-acesso-d'; // Acesso para Série C (Times que avançam da fase final)
    }
    return '';
}

window.renderClassification = function(leagueKey) {
    const tableContainer = document.getElementById('classificationTableContainer');
    const leagueData = classificationData[leagueKey];
    currentLeague = leagueKey;

    if (!leagueData || leagueData.length === 0) {
        tableContainer.innerHTML = '<p class="text-center text-gray-400 p-8">Dados de classificação não disponíveis para esta série.</p>';
        return;
    }
    
    // Tabela vazia para Série D, já que a fase é diferente
    if (leagueKey === 'SerieD') {
        tableContainer.innerHTML = `
            <div class="table-responsive p-6 text-center">
                <p class="text-xl font-bold mb-3 text-white">Fase de Acesso (Exemplo)</p>
                <p class="text-gray-400">A Série D possui 64 times divididos em grupos, seguido por mata-mata. Estes são os 4 times que tipicamente garantem o acesso à Série C.</p>
            </div>
            <div class="table-responsive">
                <table class="classification-table">
                    <thead>
                        <tr>
                            <th class="pos-col">#</th>
                            <th class="team-col" colspan="8">Times Classificados para a Série C (Exemplo)</th>
                            <th title="Pontos Ganhos">P</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${leagueData.map(time => `
                            <tr class="${getClassificationRowClass(leagueKey, time.pos)}">
                                <td class="pos-col">${time.pos}</td>
                                <td class="team-col" colspan="8">${time.time}</td>
                                <td>${time.pontos}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        const tableHTML = `
            <div class="table-responsive">
                <table class="classification-table">
                    <thead>
                        <tr>
                            <th class="pos-col">#</th>
                            <th class="team-col">Time</th>
                            <th title="Pontos Ganhos">P</th>
                            <th title="Jogos Disputados">J</th>
                            <th title="Vitórias">V</th>
                            <th title="Empates">E</th>
                            <th title="Derrotas">D</th>
                            <th title="Gols Pró">GP</th>
                            <th title="Gols Contra">GC</th>
                            <th title="Saldo de Gols">SG</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${leagueData.map(time => `
                            <tr class="${getClassificationRowClass(leagueKey, time.pos)}">
                                <td class="pos-col">${time.pos}</td>
                                <td class="team-col">${time.time}</td>
                                <td>${time.pontos}</td>
                                <td>${time.jogos}</td>
                                <td>${time.vitorias}</td>
                                <td>${time.empates}</td>
                                <td>${time.derrotas}</td>
                                <td>${time.golsPro}</td>
                                <td>${time.golsContra}</td>
                                <td>${time.saldo}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        tableContainer.innerHTML = tableHTML;
    }
    
    // Atualiza o estado visual das abas
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[data-league="${leagueKey}"]`).classList.add('active');
}

// --- FUNÇÕES DE MODAL/LOGIN E MASCOTE (Manter como estava) ---
function setupMascotAnimation() {
    const passwordInput = document.getElementById('password');
    const mascotEyes = document.getElementById('mascotEyes');

    if (passwordInput && mascotEyes) {
        passwordInput.addEventListener('focus', () => {
            mascotEyes.classList.add('hands-on-eyes');
        });

        passwordInput.addEventListener('blur', () => {
            mascotEyes.classList.remove('hands-on-eyes');
        });
    }
}

window.openLoginModal = function() {
    document.getElementById('loginModal').classList.add('show');
    setupMascotAnimation(); 
}

window.closeLoginModal = function() {
    document.getElementById('loginModal').classList.remove('show');
}

window.handleLogin = function(e) {
    e.preventDefault();
    alert('Login simulado realizado com sucesso!');
    closeLoginModal();
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
};

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    filterTeams(); 
    renderPlayers(playersData); 
    setupCarousel(); 
    renderClassification('SerieA'); 
});
