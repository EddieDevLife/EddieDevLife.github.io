# 👁 Eye of Sauron Platform

> **Portfólio pessoal + plataforma de projetos em Inteligência Artificial e Análise de Dados**

[![Deploy](https://github.com/EddieDevLife/EddieDevLife.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/EddieDevLife/EddieDevLife.github.io/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://EddieDevLife.github.io)

---

## 🌐 Site ao Vivo

🔗 **[EddieDevLife.github.io](https://EddieDevLife.github.io)**

---

## 🔥 Sobre

Site portfólio híbrido com identidade tech/futurista, dark mode e três produtos de projetos:

| Marca | Cor | Foco |
|-------|-----|------|
| 👁 **Eye of Sauron** | Âmbar/Laranja | Análise de dados, combate à corrupção, mercado imobiliário |
| 🤖 **Devinho** | Verde Neon | Engenheiro de Software Autônomo (similar ao Devin) |
| 🧬 **Devinha** | Teal/Ciano | Engenheira de Dados & MLOps Autônoma (Lakehouse, Data Contracts, MLflow) |

> As três marcas compartilham o mesmo **alerta canônico** (`risco`/`hipotese`/`evidencia` + `limitacao`), o idioma comum de integração entre Devinha e Eye of Sauron.

---

## 📁 Estrutura

```
├── index.html                  ← Landing page principal
├── about.html                  ← Sobre mim
├── projects/
│   ├── index.html              ← Catálogo de projetos
│   ├── eye-of-sauron/
│   │   ├── index.html          ← Hub Eye of Sauron
│   │   ├── anti-corruption.html
│   │   ├── real-estate.html
│   │   └── log-analysis.html
│   └── devinho/
│       └── index.html          ← Hub Devinho
├── blog/
│   └── index.html              ← Blog técnico
├── assets/
│   ├── css/
│   │   ├── global.css          ← Design system
│   │   ├── home.css
│   │   ├── projects.css
│   │   ├── brand-hub.css
│   │   ├── about.css
│   │   └── blog.css
│   ├── js/
│   │   └── global.js           ← JS: i18n, particles, animações
│   └── images/
│       └── favicon.svg
└── .github/
    └── workflows/
        └── deploy.yml          ← GitHub Actions CI/CD
```

---

## ✨ Features

- 🌑 **Dark Mode** tech/futurista com neon e glassmorphism
- 🌐 **Bilíngue PT/EN** com toggle de idioma (localStorage)
- 🎯 **Partículas interativas** no hero (Canvas API)
- ⌨️ **Typed text** efeito no hero
- 🔍 **Filtro de projetos** por categoria
- 📱 **100% Responsivo**
- ⚡ **GitHub Actions CI/CD** — deploy automático no push
- 🎨 **SVG icons e ilustrações** inline (sem dependências externas)

---

## 🚀 Como Rodar Localmente

```bash
# Qualquer servidor estático funciona. Exemplo com Python:
python3 -m http.server 8000

# Ou com Node:
npx serve .
```

Abra `http://localhost:8000`

---

## 📦 Deploy

Push para a branch `main` — o GitHub Actions cuida do resto.

```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
```

---

## 📝 Personalização

Substitua os placeholders antes de publicar:

- `5512988622852` → seu número do WhatsApp
- `EddieDevLife` já está configurado como username do GitHub

---

## 🗂 Projetos

### 👁 Eye of Sauron
| Projeto | Status | Descrição |
|---------|--------|-----------|
| Detector de Sobrepreço | 🟢 Concluído | Compras acima do preço histórico com IsolationForest |
| Grafo Fornecedores & Sanções | 🟢 Concluído | Redes de relacionamento, entidade resolution |
| Doações Eleitorais × Fornecedores | 🟢 Concluído | Cruzamento TSE × contratos públicos |
| Mapa de Emendas Parlamentares | 🟢 Concluído | Geoespacial + corópleto por município |
| Monitor de Empresas Punidas | 🟢 Concluído | Matching CNPJ + timeline de viguência |
| Screening OpenSanctions | 🟡 Planejado | Entidades BR vs listas internacionais |
| Grafo Offshore Leaks | 🟡 Planejado | Panama/Paradise Papers com Neo4j |
| NLP de Contratos | 🟡 Planejado | spaCy + NER em editais |
| Agente RAG Investigativo | 🟡 Planejado | LLM + RAG + guardrails de ética |

### 🤖 Devinho
| Projeto | Status | Descrição |
|---------|--------|-----------|
| Devinho Core (v3) | 🟡 Em desenvolvimento | Eng. Dados & MLOps autônomo |

### 🔧 Outros
| Projeto | Status | Descrição |
|---------|--------|------|
| ServiceNow MCP | 🟢 Ativo | Servidor MCP corporativo para LLMs + ServiceNow |
| Gêmeo Digital VA | 🟢 Ativo | Gêmeo Digital do Virtual Agent ServiceNow |
| Robot Secretary | 🟢 Ativo | Assistente pessoal Telegram + Google Calendar/Sheets |

---

## 📄 Licença

MIT — use e adapte livremente.

---

*Feito com ❤️ & IA — Eye of Sauron Platform*
