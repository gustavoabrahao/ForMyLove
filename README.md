# Site do Amor 💙

Um site especial e romântico criado com carinho!

## 🎨 Características

- ✨ Design profissional com tema azul
- 💙 Foto do casal como fundo
- 🎯 Popups interativos com mensagens de amor
- 🧩 Puzzles personalizados sobre o casal
- ❤️ Animações de corações caindo
- 📱 100% Responsivo (funciona em celular)
- 🖼️ Galeria de fotos com legendas românticas

## 📝 Como Personalizar

### 1. Abrir o arquivo `script.js`

No topo do arquivo você encontrará todas as configurações:

#### Mensagens para Dias Ruins
```javascript
const mensagens = {
    1: {
        titulo: "Você é Incrível! 💖",
        texto: "Sua mensagem aqui...",
        imagem: "img/suafoto.jpg",
        legendaImagem: "Texto que aparece ao clicar na foto"
    }
}
```

#### Nossos Planos
```javascript
const planos = {
    1: {
        titulo: "Viagem dos Sonhos ✈️",
        texto: "Descrição do plano...",
        imagem: "img/suafoto.jpg",
        legendaImagem: "Texto ao clicar na foto"
    }
}
```

#### Suas Qualidades
```javascript
const qualidades = {
    1: {
        titulo: "Seu Sorriso 😊",
        texto: "Texto sobre a qualidade...",
        imagem: "img/suafoto.jpg",
        legendaImagem: "Texto ao clicar na foto"
    }
}
```

#### Puzzles
```javascript
const puzzles = {
    1: {
        titulo: "Nossa Primeira...",
        pergunta: "Qual foi a primeira coisa que mais me chamou atenção em você?",
        opcoes: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
        respostaCorreta: 0, // 0 = primeira opção, 1 = segunda, etc
        mensagemAcerto: "Isso mesmo! 💕",
        mensagemErro: "Quase! 😊"
    }
}
```

### 2. Adicionar Mais Fotos

1. Coloque suas fotos na pasta `img/`
2. No `script.js`, altere o caminho da imagem:
   ```javascript
   imagem: "img/nome-da-sua-foto.jpg"
   ```

### 3. Adicionar Mais Popups

Para adicionar mais mensagens, planos ou qualidades:

```javascript
const mensagens = {
    1: { ... },
    2: { ... },
    3: { ... },
    6: {  // Nova mensagem
        titulo: "Título Novo",
        texto: "Texto novo...",
        imagem: "img/foto.jpg",
        legendaImagem: "Legenda..."
    }
}
```

E adicione o botão no HTML (arquivo `index.html`):
```html
<button class="message-btn" onclick="showMessage(6)">Mensagem 6</button>
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Clique nos cards para explorar cada categoria
3. Clique nas fotos para ver em tamanho grande com legendas românticas
4. Aproveite as animações de corações! ❤️

## 💡 Dicas

- Adicione fotos especiais de vocês dois
- Personalize as mensagens com momentos únicos
- Crie puzzles com perguntas que só vocês sabem
- Use emojis para deixar mais fofo! 💕

---

Feito com muito amor! ❤️

