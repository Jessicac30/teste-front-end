# Vitrine de Produtos - Econverse

Projeto desenvolvido como teste técnico para a vaga de Desenvolvedor Front-End Jr na Econverse. Uma aplicação de e-commerce responsiva com vitrine de produtos, modal de detalhes e consumo de API.

## Demonstração

![Demonstração do Projeto](./src/assets/video1.gif)

## Tecnologias Utilizadas

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.1.10
- **Sass/SCSS** 1.93.2
- **Google Fonts** (Poppins, Outfit, Work Sans)

## Funcionalidades

- Vitrine de produtos responsiva com carrossel
- Consumo de API REST para listagem de produtos
- Modal de detalhes do produto
- Sistema de tabs para categorias
- Seção de parceiros com gradiente
- Newsletter com formulário
- Footer completo com links e redes sociais
- Design pixel-perfect seguindo layout do Figma
- Responsividade para desktop, tablet e mobile

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Jessicac30/teste-front-end.git
```

2. Acesse a pasta do projeto:
```bash
cd teste-front-end
```

3. Instale as dependências:
```bash
npm install
```

## Como Executar

### Modo de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento com hot-reload:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

Para compilar o projeto para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Categories/          # Seção de categorias
│   ├── Footer/              # Rodapé com links e redes sociais
│   ├── Header/              # Cabeçalho com navegação
│   ├── Hero/                # Banner principal
│   ├── Newsletter/          # Formulário de newsletter
│   ├── Partners/            # Seção de parceiros
│   ├── ProductModal/        # Modal de detalhes do produto
│   └── RelatedProducts/     # Vitrine de produtos
├── assets/
│   ├── icons/               # Ícones do projeto
│   ├── images/              # Imagens estáticas
│   └── logo/                # Logotipos
├── styles/
│   └── global.scss          # Estilos globais
├── App.tsx                  # Componente principal
└── main.tsx                 # Ponto de entrada da aplicação
```

## Arquitetura e Padrões

### Componentização

- Componentes funcionais com TypeScript
- Props tipadas com interfaces
- Uso de hooks (useState, useEffect, useRef)
- Separação de responsabilidades

### Estilização

- Metodologia BEM (Block Element Modifier)
- SCSS com variáveis e mixins
- Mobile-first approach
- Breakpoints: 767px (mobile), 1024px (tablet)

### Boas Práticas

- HTML Semântico (`<header>`, `<main>`, `<footer>`, `<section>`)
- SEO otimizado com meta tags
- Acessibilidade com atributos ARIA
- Code splitting por componente

## API

O projeto consome dados de produtos da API:
```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

## Responsividade

O projeto é totalmente responsivo e adaptado para:

- **Desktop**: 1440px (design original)
- **Tablet**: 768px - 1024px
- **Mobile**: até 767px

## Navegadores Suportados

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm run preview` - Preview da build de produção

## Autor

Desenvolvido como parte do processo seletivo para Econverse.

## Licença

Este projeto foi desenvolvido para fins de avaliação técnica.
