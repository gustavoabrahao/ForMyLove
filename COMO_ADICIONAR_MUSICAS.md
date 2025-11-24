# 🎵 Como Adicionar Músicas ao Site

## 📁 Estrutura de Pastas

Primeiro, crie uma pasta chamada `musicas` na mesma pasta onde está o `index.html`:

```
ForMyLove/
├── index.html
├── styles.css
├── script.js
├── img/
│   └── fundossite.jpg
└── musicas/          ← CRIE ESTA PASTA
    ├── musica1.mp3
    ├── musica2.mp3
    └── musica3.mp3
```

## 🎵 Adicionando Músicas

### Opção 1: Com Arquivos de Áudio (MP3)

1. **Baixe as músicas** em formato MP3
2. **Coloque os arquivos** na pasta `musicas/`
3. **Abra o arquivo `script.js`**
4. **Procure por:** `// Músicas dedicadas - ADICIONE SUAS MÚSICAS AQUI!`
5. **Edite o array de músicas:**

```javascript
const musicas = [
    {
        titulo: "Perfect",
        artista: "Ed Sheeran",
        arquivo: "musicas/perfect.mp3",  // Nome do arquivo que você salvou
        linkYoutube: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        dedicatoria: "Essa música me lembra o quanto você é perfeita pra mim!"
    },
    {
        titulo: "Sua Música Favorita",
        artista: "Artista",
        arquivo: "musicas/suamusica.mp3",
        linkYoutube: "https://www.youtube.com/watch?v=ID_AQUI",
        dedicatoria: "Toda vez que ouço essa música penso em você..."
    }
    // Adicione quantas quiser!
];
```

### Opção 2: Apenas com Links do YouTube

Se não quiser baixar as músicas, pode usar só os links do YouTube:

```javascript
const musicas = [
    {
        titulo: "Perfect",
        artista: "Ed Sheeran",
        arquivo: "",  // Deixe vazio
        linkYoutube: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        dedicatoria: "Essa música me lembra o quanto você é perfeita!"
    }
];
```

## 📝 Campos Explicados

- **titulo**: Nome da música
- **artista**: Nome do cantor/banda
- **arquivo**: Caminho do arquivo MP3 (ex: `"musicas/nomedamusica.mp3"`)
- **linkYoutube**: Link do YouTube (opcional, mas recomendado)
- **dedicatoria**: Sua mensagem romântica sobre a música

## 💡 Dicas

### Como baixar músicas do YouTube (legal):
1. Use sites como: `y2mate.com` ou `ytmp3.cc`
2. Cole o link do vídeo
3. Baixe em formato MP3
4. Salve na pasta `musicas/` com um nome simples (ex: `perfect.mp3`)

### Formatos aceitos:
- ✅ MP3 (recomendado)
- ✅ WAV
- ✅ OGG

### Tamanho dos arquivos:
- Músicas MP3 geralmente tem 3-8 MB cada
- Se o site ficar lento, use links do YouTube ao invés de arquivos

## 🎨 Funcionamento

Quando ela clicar em "Músicas para Você":
1. Abre um popup com todas as músicas
2. Cada música tem:
   - 🎵 Ícone animado
   - Nome da música e artista
   - Sua dedicatória
   - Player de áudio (se tiver arquivo)
   - Botão para YouTube (se tiver link)

## ✨ Exemplo Completo

```javascript
const musicas = [
    {
        titulo: "Eu te Amo",
        artista: "Projota",
        arquivo: "musicas/eu-te-amo.mp3",
        linkYoutube: "https://www.youtube.com/watch?v=2vO0vTfNpvY",
        dedicatoria: "Essa música resume tudo que sinto por você, cada verso é nós!"
    },
    {
        titulo: "Até Você Voltar",
        artista: "Henrique e Juliano",
        arquivo: "musicas/ate-voce-voltar.mp3",
        linkYoutube: "https://www.youtube.com/watch?v=example",
        dedicatoria: "Quando estamos longe, fico ouvindo essa e morrendo de saudades..."
    },
    {
        titulo: "Yellow",
        artista: "Coldplay",
        arquivo: "musicas/yellow.mp3",
        linkYoutube: "https://www.youtube.com/watch?v=yKNxeF4KMsY",
        dedicatoria: "Look at the stars, look how they shine for you... você ilumina minha vida! ⭐"
    }
];
```

## 🐛 Problemas Comuns

**Música não toca?**
- Verifique se o arquivo está na pasta `musicas/`
- Verifique se o nome no código está igual ao nome do arquivo
- Teste se o arquivo MP3 não está corrompido

**Link do YouTube não funciona?**
- Certifique-se que o link está completo
- Formato correto: `https://www.youtube.com/watch?v=ID_DO_VIDEO`

---

Criado com amor! 💙🎵

