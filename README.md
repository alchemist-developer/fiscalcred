# Fiscal Cred landing page

Landing page institucional da Fiscal Cred, criada como uma página estática em HTML, CSS e JavaScript puro.

## Estrutura dos arquivos

- `index.html`: estrutura base da página, metadados, favicon, fontes, link do CSS e chamada do JavaScript.
- `index.css`: todo o visual da página, incluindo responsividade, animações, cards, header, footer e seções.
- `index.js`: conteúdo textual, URLs de imagens, renderização das seções e scripts de interação.

## Como a página é montada

O HTML possui apenas o contêiner principal:

```html
<div id="app"></div>
```

O arquivo `index.js` renderiza todas as seções dentro desse contêiner usando funções `render...`.

Ordem atual de renderização:

1. Header
2. Hero
3. Clientes atendidos
4. Resultados
5. Soluções estratégicas
6. Para quem é
7. Serviços
8. Diferenciais
9. Autoridade e confiança
10. FAQ
11. Sobre/Fundadores
12. CTA final
13. Mapa
14. Footer
15. Botão flutuante de WhatsApp

## Onde editar conteúdo

O conteúdo principal fica no objeto `content`, no início de `index.js`.

Principais áreas:

- `content.brand`: logo, WhatsApp, Instagram, endereço e copyright.
- `content.nav`: links do menu.
- `content.hero`: chamada principal da primeira dobra.
- `content.testimonials`: depoimentos exibidos no card do hero.
- `content.stats`: métricas e bloco de resultados.
- `content.howItWorks`: seção "Soluções estratégicas".
- `content.qualification`: seção "Para quem é".
- `content.services`: cards de serviços e imagens.
- `content.differentials`: diferenciais da Fiscal Cred.
- `content.authority`: provas de autoridade.
- `content.faq`: perguntas frequentes.
- `content.founders`: fundadores e fotos.
- `content.cta`: chamada final de contato.

## Seções principais

### Hero

Usa imagem de fundo do site da Fiscal Cred e card rotativo de depoimentos.

Interações:

- rotação automática dos depoimentos;
- animação de entrada do texto;
- CTA para WhatsApp.

### Clientes atendidos

Faixa com esteira horizontal de nomes de clientes.

Características:

- nomes em preto e branco;
- fontes variadas por cliente;
- animação contínua;
- pausa ao passar o mouse.

### Resultados

Bloco de resultado com métricas animadas quando a seção entra na viewport.

Métricas atuais:

- clientes satisfeitos;
- anos de experiência;
- impostos economizados;
- impostos recuperados.

### Soluções estratégicas

Seção full width, com metade da tela para o card de tecnologia e metade para os blocos de apoio.

Foi alinhada visualmente com a seção de resultados para manter proporção e continuidade.

### Serviços

Seção escura com canvas animado de partículas no fundo.

Características:

- card principal em destaque;
- cards laterais em estilo glass/dark;
- imagens reais do site;
- interação leve com o mouse no fundo.

### Fundadores

Seção séria e fotográfica, próxima ao estilo original.

Fotos atuais:

- Gilmar: `https://fiscalcred.com/wp-content/uploads/2026/03/2-1.png`
- Renata: `https://fiscalcred.com/wp-content/uploads/2026/03/3-1.png`

## Interações JavaScript

Funções principais em `index.js`:

- `initTestimonials()`: alterna depoimentos do hero.
- `initCounters()`: anima contadores da seção de resultados.
- `initFAQ()`: abre e fecha perguntas da FAQ.
- `initHeaderScroll()`: altera o header ao rolar.
- `initMobileMenu()`: controla menu mobile.
- `initReveal()`: ativa animações de entrada.
- `initServiceParticles()`: desenha partículas no fundo da seção Serviços.

## Design e responsividade

Breakpoints principais no CSS:

- `max-width: 900px`: tablet/mobile, menu hambúrguer, grids em coluna, ajustes de padding.
- `901px a 1180px`: adaptação intermediária dos cards de serviços.
- `max-width: 560px`: ajustes finos para celulares menores.

Padrões visuais:

- paleta principal: preto, branco, cinza e laranja Fiscal Cred;
- cards com borda máxima de 8px;
- seções full width para blocos estratégicos;
- CTAs principais direcionam para WhatsApp;
- navegação usa âncoras internas.

## Assets externos

A página usa imagens hospedadas no domínio da Fiscal Cred:

- logo;
- favicon;
- hero;
- serviços;
- depoimentos;
- fundadores.

Também usa Google Fonts para `Inter`.

## Validação feita

Durante o desenvolvimento, a sintaxe do JavaScript foi validada com Node:

```powershell
node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const m=html.match(/<script>([\s\S]*)<\/script>/); new Function(m[1]); console.log('JS syntax OK');"
```

Depois da separação dos arquivos, a validação mais adequada é:

```powershell
node --check index.js
```

## Observações para manutenção

- Para alterar textos, prefira editar `content` em `index.js`.
- Para alterar layout, prefira editar classes em `index.css`.
- Para adicionar uma nova seção, crie uma função `renderNovaSecao()` em `index.js` e inclua essa função no array `app.innerHTML`.
- Evite editar diretamente o HTML gerado dentro do navegador, porque a página é renderizada pelo JavaScript.
- Se trocar URLs de imagens, valide se elas carregam em janela anônima ou fora do painel administrativo do WordPress.
