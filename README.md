<img width="1774" height="887" alt="5fd9f188-7b82-4a94-92b0-b3f5e42a5b9e" src="https://github.com/user-attachments/assets/890591b7-1eac-478a-aa09-70301a98817e" />

</br>

<p align=center>Landing page institucional da Fiscal Cred, criada como uma página estática em HTML, CSS e JavaScript puro.</p>

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

## Testes automatizados

O projeto possui testes Cypress em `cypress/e2e`.

Specs atuais:

- `navigation.cy.js`: CTAs de WhatsApp, âncoras internas, botões principais, Instagram e menu mobile.
- `content.cy.js`: metadados, seções principais, esteira de clientes, cards de serviços e fotos dos fundadores.
- `interactions.cy.js`: FAQ, contadores, canvas de partículas, botão flutuante de WhatsApp e mapa.
- `responsive.cy.js`: navegação desktop, menu mobile e presença dos principais cards em telas pequenas.

Para instalar dependências e rodar contra produção:

```powershell
npm install
npm run test:e2e
```

## Rotina semanal

O workflow `.github/workflows/weekly-cypress.yml` roda os testes Cypress automaticamente toda quarta-feira às 12h no horário de São Paulo.

Ele também pode ser executado manualmente pelo `workflow_dispatch` no GitHub Actions.

Os testes usam a URL de produção configurada em `cypress.config.js`: `https://fiscalcred.vercel.app`.

Na rotina Cypress semanal são executadas as seguintes validações:

- Links de WhatsApp apontam para o `wa.me` oficial da Fiscal Cred.
- Links internos apontam para seções existentes da página.
- Botões principais preservam seus destinos esperados.
- Link do Instagram no rodapé aponta para o perfil correto.
- Menu mobile abre, fecha e mantém a navegação funcionando.
- Metadados básicos, favicon e estrutura principal da página existem.
- Seções principais da landing page renderizam em produção.
- Esteira de clientes possui os nomes esperados e itens duplicados para animação contínua.
- Cards de serviços renderizam com imagens e links de contato.
- Cards dos fundadores usam as fotos esperadas de Gilmar e Renata.
- FAQ abre corretamente e atualiza `aria-expanded`.
- Contadores da seção de resultados animam quando a seção entra na tela.
- Canvas de partículas da seção Serviços é renderizado sem bloquear links.
- Botão flutuante de WhatsApp permanece disponível.
- Mapa carrega com a query do endereço da Av. Paulista.
- Layout desktop exibe navegação completa.
- Layout mobile usa menu hambúrguer.
- Cards principais continuam presentes em telas pequenas.

## Workflows de segurança

O projeto open source possui workflows gratuitos de segurança e qualidade no GitHub Actions:

- `.github/workflows/codeql.yml`: análise CodeQL para workflows GitHub Actions e JavaScript/TypeScript.
- `.github/workflows/osv-scanner.yml`: varredura de vulnerabilidades em dependências com OSV Scanner.
- `.github/workflows/dependency-review.yml`: revisão de mudanças em dependências em pull requests.
- `.github/workflows/scorecard.yml`: análise OSSF Scorecard da postura de segurança do repositório.
- `.github/workflows/weekly-cypress.yml`: testes Cypress contra produção.

Na rotina semanal de segurança são executadas as seguintes validações:

- CodeQL analisa workflows GitHub Actions e JavaScript/TypeScript.
- OSV Scanner verifica vulnerabilidades em dependências do projeto.
- OSSF Scorecard avalia práticas de segurança do repositório open source.

Em pull requests, a rotina adicional `Dependency Review` verifica mudanças introduzidas nas dependências.

## Observações para manutenção

- Para alterar textos, prefira editar `content` em `index.js`.
- Para alterar layout, prefira editar classes em `index.css`.
- Para adicionar uma nova seção, crie uma função `renderNovaSecao()` em `index.js` e inclua essa função no array `app.innerHTML`.
- Evite editar diretamente o HTML gerado dentro do navegador, porque a página é renderizada pelo JavaScript.
- Se trocar URLs de imagens, valide se elas carregam em janela anônima ou fora do painel administrativo do WordPress (onde podem originalmente estar hospedadas).
