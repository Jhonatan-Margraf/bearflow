# Oficina Pro — Demonstração (Next.js)

Versão **somente frontend** e **interativa** do sistema de gestão para oficina mecânica,
feita para ser exibida em portfólio. Reproduz fielmente a interface do app desktop
original (CustomTkinter), mas **sem backend e sem persistência**: os dados vivem apenas
na memória do navegador e são restaurados ao recarregar a página.

> 🧪 É uma amostra visual. Nada é salvo de verdade — cadastros, edições e exclusões
> servem só para demonstrar o fluxo.

## O que dá para fazer

- **Clientes** — buscar, selecionar, adicionar, editar e excluir (em memória)
- **Estatísticas** — total de clientes, serviços pagos e em aberto
- **Histórico do cliente** — lista de serviços com filtro por status e busca
- **Ordem de Serviço** — formulário com itens e total calculado ao vivo
- **Ver / Imprimir OS** — prévia da ordem no layout de impressão

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Gerar versão estática (para o portfólio)

```bash
npm run build    # gera a pasta out/ com HTML/JS puro
```

A pasta `out/` pode ser hospedada em qualquer lugar (GitHub Pages, Vercel, Netlify,
ou embutida no seu site). Se for servir sob um subcaminho (ex.: `seusite.com/mecanica`),
ajuste `basePath` em `next.config.mjs`.

## Estrutura

```
app/
  layout.jsx        # metadata + estilos globais
  page.jsx          # estado em memória + navegação (Clientes/Detalhes/Ordem)
  globals.css       # design system (espelha o theme.py original)
components/
  Sidebar, StatCard, DemoBanner
  ClientesView, DetalhesView, OrdemView
  ModalCliente, ModalServico, OSPreview
lib/
  demoData.js       # clientes e serviços fictícios (equivalente ao seed.py)
  helpers.js        # formatação de moeda, status de pagamento, máscaras
```
