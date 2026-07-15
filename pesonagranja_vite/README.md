# Peso na Granja — Demo (Vite + React)

Versão de demonstração do app Flutter **Peso na Granja** (Suinocultura com IA), feita em Vite + React para incorporar no site. É apenas visual/interativa com dados fictícios — nenhuma câmera, API ou backend real é usado.

## Rodar localmente

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

## Gerar build para o site

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

Copie o conteúdo de `dist/` para o seu servidor, ou incorpore via `<iframe>`:

```html
<iframe src="/pesonagranja-demo/" style="border:0;width:420px;height:840px"></iframe>
```

> `base: './'` já está configurado em `vite.config.js`, então funciona em qualquer subpasta.

## Telas incluídas

- **Login** — tela de entrada (qualquer clique em Entrar acessa a demo)
- **Gerenciar Lotes** — lista de lotes com métricas (alojados, mortalidade, peso estimado/real, GPD)
- **Detalhes do Lote** — informações, rebanho, peso e ganho
- **Baias** — lista por lote, com contador de mortalidade +/− funcional
- **Detalhe da Baia** — resumo e histórico de medições
- **Medir Peso com IA** — câmera simulada que "analisa" e retorna um peso
- **Estatísticas** — progresso para abate (barras estimado vs. real)
- **Configurações** — opções ilustrativas

A navegação usa uma moldura de celular e uma barra de atalhos abaixo (Lotes / Estatísticas / Config. / Sair). Em telas pequenas (mobile) a moldura vira tela cheia.

## Estrutura

```
src/
  App.jsx              # navegacao entre telas + moldura
  data.js              # dados ficticios (lotes, baias, medicoes)
  components/
    Icon.jsx           # icones SVG estilo Material
    Shell.jsx          # AppBar e Drawer
  screens/             # Login, LotesList, LoteDetail, BaiasList,
                       # BaiaDetail, Camera, Statistics, Settings
public/pig.png         # logo (copiado do app Flutter)
```
