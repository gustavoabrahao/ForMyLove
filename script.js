// ====== CONFIGURAÇÕES - PERSONALIZE AQUI! ======

// Mensagens de amor aleatórias para cada período do dia
const mensagensAleatorias = {
    manha: [
        "Acordei pensando em você! Espero que seu dia seja tão lindo quanto você é! ☀️",
        "Que seu dia seja repleto de sorrisos e momentos especiais! Te amo! ☀️",
        "Começando o dia te amando muito! Você é meu raio de sol! ☀️",
        "Bom dia, meu amor! Que hoje seja um dia incrível para você! ☀️",
        "Acordei com saudades de você! Tenha um dia maravilhoso! ☀️",
        "Você é a primeira coisa que penso quando acordo! Te amo infinito! ☀️"
    ],
    tarde: [
        "Como está sendo seu dia? Espero que esteja incrível como você! 🌤️",
        "Pensando em você nesta tarde! Você ilumina meus dias! 🌤️",
        "Espero que sua tarde esteja sendo tão doce quanto você é! 🌤️",
        "Boa tarde, meu amor! Você está fazendo falta aqui! 🌤️",
        "Que sua tarde seja cheia de coisas boas! Te amo muito! 🌤️",
        "Tarde perfeita para pensar em você! Saudades! 🌤️"
    ],
    noite: [
        "Espero que seu dia tenha sido maravilhoso! Boa noite, meu amor! 🌙",
        "A noite fica mais bonita sabendo que você existe! Te amo! 🌙",
        "Boa noite, meu amor! Sonhe com a gente! 💫",
        "Que você tenha uma noite tranquila e cheia de sonhos lindos! 🌙",
        "Terminando o dia te amando muito! Durma bem, meu amor! 🌙",
        "Boa noite bebe, por você eu dormiria em um quarto com 1 milhão de baratas💫"
    ]
};

// Função para obter saudação baseada na hora
function getGreeting() {
    const agora = new Date();
    const hora = agora.getHours();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasSemana[agora.getDay()];
    
    let periodo, saudacao, mensagens;
    
    if (hora >= 5 && hora < 12) {
        periodo = 'manha';
        saudacao = '☀️Bom dia, meu amor!☀️';
    } else if (hora >= 12 && hora < 18) {
        periodo = 'tarde';
        saudacao = '🌤️Boa tarde, meu amor!🌤️';
    } else {
        periodo = 'noite';
        saudacao = '🌙Boa noite, meu amor!🌙';
    }
    
    mensagens = mensagensAleatorias[periodo];
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    return {
        saudacao: saudacao,
        diaSemana: diaSemana,
        mensagem: mensagemAleatoria
    };
}

// Função para exibir a saudação em popup (apenas uma vez)
function displayGreeting() {
    // Verifica se já mostrou o popup hoje
    const hoje = new Date().toDateString();
    const ultimaExibicao = localStorage.getItem('ultimaExibicaoSaudacao');
    
    // Se já mostrou hoje, não mostra de novo
    if (ultimaExibicao === hoje) {
        return;
    }
    
    const greetingPopup = document.getElementById('greeting-popup');
    const greetingBody = document.getElementById('greeting-popup-body');
    const greeting = getGreeting();
    
    greetingBody.innerHTML = `
        <span class="greeting-time">${greeting.saudacao}</span>
        <span class="greeting-day">Hoje é ${greeting.diaSemana}</span>
        <span class="greeting-love-message">${greeting.mensagem}</span>
    `;
    
    greetingPopup.style.display = 'block';
    
    // Salva que já mostrou hoje
    localStorage.setItem('ultimaExibicaoSaudacao', hoje);
}

// Função para fechar popup de saudação
function closeGreetingPopup() {
    const greetingPopup = document.getElementById('greeting-popup');
    greetingPopup.style.display = 'none';
}

// Função para forçar exibir o popup novamente (use no console se quiser testar)
function resetSaudacao() {
    localStorage.removeItem('ultimaExibicaoSaudacao');
    console.log('Popup de saudação resetado! Recarregue a página para ver novamente.');
}

// ====== FIM DAS CONFIGURAÇÕES ======

// Mensagens para dias ruins
const mensagens = {
    1: {
        titulo: "Você é Incrível!💙",
        texto: "Esse acredito que foi um dos dias mais felizes e importantes da minha vida, conheci a mulher da minha vida, quem me alegra, me faz sorrir, me faz ser feliz e me faz ser o homem que eu sou, com você eu aprendi a amar e a crescer. Você é incrível Alana!, nunca deixe alguém te dizer o contrario disso, porque eu mesmo nunca deixei e nunca vou deixar alguém te rebaixar, eu sei do que você é capaz e você tem um puta futuro brilhante, por onde você passa você ilumina o lugar que passa, e isso é incrível, eu sou muito grato por ter você na minha vida, e vou sempre estar aqui para você, eu te amo muito meu amor",
        imagem: "img/primeirafotojuntos.jpg", // Adicione o caminho da imagem aqui
        legendaImagem: "Este momento especial sempre me faz sorrir. Você ilumina minha vida de uma forma única!" // Texto ao clicar na imagem
    },
    2: {
        titulo: "Isso Também Vai Passar💙",
        texto: "KKKKKJKKKK olha como você é perfeita meu bem, seu nariz, sua boca, seus olhos, seu cabelo, seu corpo e tudo que você faz me encanta e me deixa cada vez mais louco por você, seu jeito único de ser é a coisa mais linda que eu já vi (perdendo pros seus olhos é claro), nunca me arrependi de te conhecer e quero poder viver a minha vida inteira ao seu lado, porque com você eu sou o homem mais feliz do mundo e tenho a minha melhor versão, se eu pudesse eu criaria um mundo somente pra nós, o antonio e a amelia, eu te amo de mais de mais de mais bebe, você só pode imaginar, e mesmo imaginando não tem nem noção do meu amor e do quanto eu torço pra você vencer na vida e realizar todos seus sonhos, e eu quero estar do seu lado pra ver isso acomtecer, porque eu sei que vai!",
        imagem: "img/narizempinado.jpg",
        legendaImagem: "Nós dois contra o mundo! Juntos podemos superar qualquer coisa, meu amor."
    },
    3: {
        titulo: "Você não está sozinha💙",
        texto: "Nunca se sinta sozinha, eu estive do seu lado até quando nos afastamos no passado, sempre estive orando por Deus pra guiar a sua vida e te fazer feliz, e agora que ele permitiu que a gente construa algo juntos, eu vou continuar aqui pra te ajudar, apoiar, aconselhar, amar, abraçar, brigar,sorrir, fofocar e tudo mais que a gente faz e vai fazer juntos. Alana eu te amo muito e eu nunca quero te ver mal, até porque te ver mal me faz mal em dobro, todas as flores que eu te dei tem um significado gigantesco, afinal você é a única mulher que eu mandei e vou continuar mandando flores até a gente ficar velhinhos juntos, você exala beleza igual as rosas vermelhas que te mandei dia 08/09/25, a diferença é que elas nao chegam nem aos seus pés KKJKKJKKK, já os girasois foram pra mostrar que independente de dia ou noite, você exala brilho e alegria por onde passa, você é simplesmente perfeita, e as rosas brancas que foram as últimas que te entreguei, pra mim tem um significado gigantesco porque eu apenas acordei e decidi te mandar, escolhi rosas brancas porque você me deixa em um estado de paz e equilibrio quando estou ao seu lado, mas é claro que igual as outras essas também não chegam nem aos seus pés, sua mãe conseguiu criar uma perfeição que me hipnotiza sempre que vejo, eu te amo nega veia, sempre vou estar aqui pra querer ver seu bem e te ajudar, conte comigo pra literalmente tudo, afinal além de namorados somos melhores amigos, e eu vou estar aqui pra te ajudar sempre que precisar ",
        imagem: "img/eucombuque.jpg",
        legendaImagem: "Cada momento ao seu lado é especial. Você é minha pessoa favorita no mundo inteiro!"
    },
    4: {
        titulo: "Meu Amor por Você💙",
        texto: "Ta sendo dificil escrever isso, mas meu amor por você ultrapassa a beleza e o brilho dos seus olhos, eu sou totalmente fissurado e apaixonado neles, quero que nossos filhos tenham todas suas qualidades e nenhum dos nossos defeitos. Meu amor por você é exponencial e a cada minuto que passa eu te amo dobrado, cada mensagem, cada risadas juntos, cada briga, cada tudo, tudo que eu faço e vivo com você faz eu te amar ainda mais, e eu quero que isso continue pra sempre, eu te amo muito meu amor e não quero nunca te perder porque você é o meu objetivo, sonho e minha vida, vamos ser muito mais feliz juntos ainda",
        imagem: "img/perfeita.jpg",
        legendaImagem: "Este sorriso seu é meu lugar favorito. Obrigado por existir na minha vida!"
    },
    5: {
        titulo: "Sorria, Meu Amor!💙",
        texto: "Eu sonho com você quase todos os dias desde que nos vimos pela primeira vez, a primeira e única mulher que me fez conhecer o explorar o amor é a mulher que eu planejo minha vida, uma familia e milhares de coisas que seria impossivel de colocar tudo aqui, não quero viver essa vida com outro algém Alana, eu quero estar do seu lado e ver a gente construir tudo juntos. Meu sonho era ser aceito pela sua familia, e adivinha oque aconteceu? sua familia apoia a gente KKJKKKJJK isso é louco de pensar não é? nos conhecemos pela internet e ficamos nessa de se ver apenas por telas por 5 anos, e hoje estamos se vendo, amando, conhecendo a familia um do outro e criando uma conexão ainda maior do que a que já tinhamos. Eu não acredito em amor a primeira vista porque eu não me apaixonei a primeira vista, eu me apaixonei pela primeira palavra trocada, isso tudo que eu estou vivendo com você é um sonho e quero muito poder realizar todos os outros sonhos que planejamos juntos, eu te amo bebezao do nariz empinado.",
        imagem: "img/foto bombinhas.jpg",
        legendaImagem: "Você torna cada dia mais bonito só por existir. Te amo mais do que as palavras podem expressar!"
    }
};

// Planos para o futuro - TEXTO ÚNICO (ESCREVA TUDO JUNTO AQUI)
const planosTexto = `
Tenho tantos planos que falar aqui não ia ter como, te conto um pouco deles se me perguntar, mas saiba que o meu maior plano é ter você ao meu lado, te fazer feliz, te amar e construirmos uma linda familia juntos. Eu te amo infinitamente mozao
`;

// Imagem para os planos (opcional)
const planosImagem = "img/ursao.jpg";
const planosLegenda = "Mal posso esperar para viver tudo isso ao seu lado! Te amo infinito! 💙";

// Músicas dedicadas - ADICIONE SUAS MÚSICAS AQUI!
const musicas = [
    {
        titulo: "Amor Dos Deuses",
        artista: "Fundo de Quintal",
        arquivo: "musicas/Amor Dos Deuses [yMwi16KYqFo].mp3", // Coloque o arquivo de áudio na pasta 'musicas'
        linkYoutube: "https://youtu.be/yMwi16KYqFo?si=LDGytLR9yQi2ojNU", // Link do YouTube (opcional)
        dedicatoria: "Roubei de você né KKJKJKKK eu te amo bebe, essa música descreve tudo"
    },
    {
        titulo: "Embrance",
        artista: "Clayton Santiago",
        arquivo: "musicas/Embrace (The End) [2fllbGuZ59U].mp3",
        linkYoutube: "https://youtu.be/2fllbGuZ59U?si=21HXa-_59H5sCt1S",
        dedicatoria: "É a música que eu ia te dedicar no primeiro buque"
    },
    {
        titulo: "2 Much",
        artista: "Justin Bieber",
        arquivo: "musicas/Justin Bieber - 2 Much (Tradução) [7xbPK_y1Dv8].mp3",
        linkYoutube: "https://youtu.be/xFJjczkU4So?si=f7leBbzLOz3PI8ef",
        dedicatoria: "Sei lá eu só sei te amar de mais, não existe texto dedicatório que descreva"
    }
    // Adicione quantas músicas quiser!
];

// Qualidades dela - TEXTO ÚNICO (ESCREVA TUDO JUNTO AQUI)
const qualidadesTexto = `
Vou repetir tudo que eu já te disse porque é pra isso entrar bem na sua cabeça mesmo.

Eu amo seu jeito de lidar com as coisas(tirando o fato de se esconder), você é uma das mulheres mais fortes que eu conheço, me impressiono cada vez mais com o tanto que você é capaz de superar e enfrentar os problemas, sua criatividade pras coisas também é algo de outro mundo, e acho sua criatividade foi a primeira qualidade que vez eu pensar "porra essa mulher é do caralho e realmente nenhuma chega aos pés dela", sua vontade de fazer as coisas darem certo(eu sei que você pode não demonstrar isso mas eu vejo que você tem uma vontade absurda de fazer as coisas darem certo), sua loucura KKKKJKKKJKK você é louca de mais fiota, e eu amo isso, seu arroz soltinho KJDJKAKDAJKDJAJD, seu olhar que me enlouquece e faz eu imaginar mais do que um futuro ao seu lado toda vez que você me olha desse seu jeito, seu nariz de porquinho que não cabe nem meu dedo direito, seu sorriso irradiante que contamina qualquer um que olha essa maravilha. De verdade meu bem, eu não consigo falar todas as suas qualidade porque você tem infinitas, e cada vez que eu acho que não tem como alguém se superar nessa questão você vem e me mostra mais coisas incriveis que você tem a oferecer, eu amo tudo que tem em você e vou amar até meu último suspiro nessa vida.

"Pois algum dia alguém lhe olhará com tanto amor que você sentirá arrepio na alma" Disse Jesus

e esse alguém vai continuar te amando até você começar a perceber suas qualidades, esquecer seus defeitos e criar uma história linda de amor, esse alguém sou eu.

`;

// Imagem para as qualidades (opcional)
const qualidadesImagem = "img/fundossite.jpg";
const qualidadesLegenda = "Todas essas qualidades fazem de você a pessoa mais especial do mundo! Te amo infinito! 💙";

// Puzzles sobre o casal
const puzzles = {
    1: {
        titulo: "Primeiro Lugar",
        pergunta: "Qual foi primeiro lugar em que saimos juntos?",
        opcoes: [
            "Mak",
            "Dallas",
            "Yummys",
        ],
        respostaCorreta: 1, // Índice da resposta correta (0 = primeira opção)
        mensagemAcerto: "Acho que nem o antonio vai errar essa de tanto que vamos contar nossa historia",
        mensagemErro: "Ta maluca fia?"
    },
    2: {
        titulo: "Nosso primeiro beijo",
        pergunta: "Qual é o nosso momento mais especial até agora?",
        opcoes: [
            "Nosso primeiro beijo",
            "Nossa primeira conversa",
            "Quando eu te pedi em namoro",
            "Todos os momentos juntos"
        ],
        respostaCorreta: 3,
        mensagemAcerto: "Isso mesmo! Cada momento com você é especial! ❤️",
        mensagemErro: "Na verdade, todos os nossos momentos são especiais! 💖"
    },
    3: {
        titulo: "Conhecendo Você",
        pergunta: "O que eu mais amo fazer com você?",
        opcoes: [
            "Assistir filmes juntinhos",
            "Conversar por horas",
            "Fazer você sorrir",
            "Todas as alternativas acima"
        ],
        respostaCorreta: 3,
        mensagemAcerto: "Perfeito! Amo fazer tudo isso com você! 🥰",
        mensagemErro: "Quase! Na verdade eu amo fazer tudo isso com você! 💕"
    }
};

// ====== FIM DAS CONFIGURAÇÕES ======

// Função para criar corações caindo
function createHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Função para criar tartaruga caindo
function createTurtle() {
    const heartsContainer = document.getElementById('hearts-container');
    const turtle = document.createElement('div');
    turtle.classList.add('turtle-particle');
    turtle.textContent = '🐢';
    
    turtle.style.left = Math.random() * 100 + '%';
    turtle.style.fontSize = (Math.random() * 20 + 30) + 'px';
    turtle.style.animationDuration = (Math.random() * 4 + 5) + 's';
    
    heartsContainer.appendChild(turtle);
    
    setTimeout(() => {
        turtle.remove();
    }, 9000);
}

// Função para criar coração branco caindo
function createWhiteHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const whiteHeart = document.createElement('div');
    whiteHeart.classList.add('white-heart-particle');
    whiteHeart.textContent = '🤍';
    
    whiteHeart.style.left = Math.random() * 100 + '%';
    whiteHeart.style.fontSize = (Math.random() * 15 + 20) + 'px';
    whiteHeart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    heartsContainer.appendChild(whiteHeart);
    
    setTimeout(() => {
        whiteHeart.remove();
    }, 7000);
}

// Criar corações ao clicar em qualquer lugar
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Criar tartarugas e corações brancos aleatoriamente
setInterval(() => {
    const random = Math.random();
    if (random > 0.85) {
        createTurtle();
    } else if (random > 0.65) {
        createWhiteHeart();
    }
}, 800);

// Funções para abrir categorias
function openCategory(category) {
    // Se for qualidades, mostra direto o popup com o texto completo
    if (category === 'qualidades') {
        showQualidadesCompletas();
        return;
    }
    
    // Se for planos, mostra direto o popup com o texto completo
    if (category === 'planos') {
        showPlanosCompletos();
        return;
    }
    
    // Se for músicas, carrega as músicas
    if (category === 'musicas') {
        loadMusicas();
    }
    
    const modal = document.getElementById(`modal-${category}`);
    modal.style.display = 'block';
}

function closeModal(category) {
    const modal = document.getElementById(`modal-${category}`);
    modal.style.display = 'none';
}


// Funções para mostrar mensagens
function showMessage(id) {
    const mensagem = mensagens[id];
    showPopup(mensagem);
}

// Função para mostrar todas as qualidades de uma vez
function showQualidadesCompletas() {
    const popup = document.getElementById('popup-display');
    const popupBody = document.getElementById('popup-body');
    
    let html = `<h3>Suas Qualidades Incríveis ✨</h3>`;
    html += `<p>${qualidadesTexto}</p>`;
    
    if (qualidadesImagem && qualidadesImagem !== "") {
        html += `<img src="${qualidadesImagem}" alt="Foto especial" onclick="openImageModal('${qualidadesImagem}', '${qualidadesLegenda}')">`;
    }
    
    popupBody.innerHTML = html;
    popup.style.display = 'block';
}

// Função para mostrar todos os planos de uma vez
function showPlanosCompletos() {
    const popup = document.getElementById('popup-display');
    const popupBody = document.getElementById('popup-body');
    
    let html = `<h3>Meus Planos com Você🐢</h3>`;
    html += `<p>${planosTexto}</p>`;
    
    if (planosImagem && planosImagem !== "") {
        html += `<img src="${planosImagem}" alt="Foto especial" onclick="openImageModal('${planosImagem}', '${planosLegenda}')">`;
    }
    
    popupBody.innerHTML = html;
    popup.style.display = 'block';
}

// Função para carregar as músicas
function loadMusicas() {
    const musicasList = document.getElementById('musicas-list');
    let html = '';
    
    musicas.forEach((musica, index) => {
        html += `
            <div class="musica-item">
                <div class="musica-header">
                    <div class="musica-icon">🎵</div>
                    <div class="musica-info">
                        <div class="musica-titulo">${musica.titulo}</div>
                        <div class="musica-artista">${musica.artista}</div>
                    </div>
                </div>
                <div class="musica-dedicatoria">${musica.dedicatoria}</div>
                ${musica.arquivo ? `<audio class="musica-player" controls>
                    <source src="${musica.arquivo}" type="audio/mpeg">
                    Seu navegador não suporta o elemento de áudio.
                </audio>` : ''}
                ${musica.linkYoutube ? `<a href="${musica.linkYoutube}" target="_blank" class="musica-link">🎥 Assistir no YouTube</a>` : ''}
            </div>
        `;
    });
    
    musicasList.innerHTML = html;
}

function showPopup(conteudo) {
    const popup = document.getElementById('popup-display');
    const popupBody = document.getElementById('popup-body');
    
    let html = `<h3>${conteudo.titulo}</h3>`;
    html += `<p>${conteudo.texto}</p>`;
    
    if (conteudo.imagem && conteudo.imagem !== "") {
        html += `<img src="${conteudo.imagem}" alt="Foto especial" onclick="openImageModal('${conteudo.imagem}', '${conteudo.legendaImagem || 'Momento especial nosso ❤️'}')">`;
    }
    
    popupBody.innerHTML = html;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup-display');
    popup.style.display = 'none';
}

// Funções para puzzles
function startPuzzle(id) {
    const puzzle = puzzles[id];
    const puzzlePopup = document.getElementById('puzzle-popup');
    const puzzleTitle = document.getElementById('puzzle-title');
    const puzzleQuestion = document.getElementById('puzzle-question');
    const puzzleOptions = document.getElementById('puzzle-options');
    const puzzleResult = document.getElementById('puzzle-result');
    
    puzzleTitle.textContent = puzzle.titulo;
    puzzleQuestion.textContent = puzzle.pergunta;
    puzzleResult.textContent = '';
    puzzleResult.className = '';
    
    puzzleOptions.innerHTML = '';
    
    puzzle.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.classList.add('puzzle-option');
        button.textContent = opcao;
        button.onclick = () => checkAnswer(index, puzzle.respostaCorreta, puzzle.mensagemAcerto, puzzle.mensagemErro, button);
        puzzleOptions.appendChild(button);
    });
    
    puzzlePopup.style.display = 'block';
}

function checkAnswer(selectedIndex, correctIndex, mensagemAcerto, mensagemErro, button) {
    const puzzleResult = document.getElementById('puzzle-result');
    const allButtons = document.querySelectorAll('.puzzle-option');
    
    // Desabilitar todos os botões após resposta
    allButtons.forEach(btn => {
        btn.style.pointerEvents = 'none';
    });
    
    if (selectedIndex === correctIndex) {
        button.classList.add('correct');
        puzzleResult.textContent = mensagemAcerto;
        puzzleResult.classList.add('correct-result');
        
        // Criar muitos corações para comemorar
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 50);
        }
    } else {
        button.classList.add('wrong');
        puzzleResult.textContent = mensagemErro;
        puzzleResult.classList.add('wrong-result');
        
        // Mostrar a resposta correta
        setTimeout(() => {
            allButtons[correctIndex].classList.add('correct');
        }, 500);
    }
}

function closePuzzle() {
    const puzzlePopup = document.getElementById('puzzle-popup');
    puzzlePopup.style.display = 'none';
}

// Funções para modal de imagem expandida
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('expanded-image');
    const captionText = document.getElementById('image-caption');
    
    modal.style.display = 'block';
    img.src = imageSrc;
    captionText.textContent = caption;
    
    // Criar muitos corações ao abrir a imagem
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 50);
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Fechar modal de imagem ao clicar fora da imagem
document.addEventListener('click', function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        closeImageModal();
    }
});

// Fechar popup de saudação ao clicar fora
window.onclick = function(event) {
    const greetingPopup = document.getElementById('greeting-popup');
    if (event.target === greetingPopup) {
        closeGreetingPopup();
    }
    
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    const popups = document.querySelectorAll('.popup-display');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

// Animação inicial
window.addEventListener('load', () => {
    // Exibir popup de saudação após 1 segundo
    setTimeout(() => {
        displayGreeting();
    }, 1000);
    
    // Criar algumas tartarugas e corações brancos iniciais
    for (let i = 0; i < 3; i++) {
        setTimeout(createTurtle, i * 600);
    }
    for (let i = 0; i < 5; i++) {
        setTimeout(createWhiteHeart, i * 400);
    }
});

