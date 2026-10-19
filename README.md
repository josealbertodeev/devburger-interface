# DevBurger: interface

Front-end de um sistema de delivery de hambúrgueres, com área do cliente (cardápio, carrinho e pagamento com Stripe) e painel administrativo (pedidos e produtos). Consome a [DevBurger API](https://github.com/josealbertodeev/dev-burger-api).

**[Repositório da API](https://github.com/josealbertodeev/dev-burger-api)**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payment_Element-635BFF?logo=stripe&logoColor=white)

## Telas

| Login | Página inicial |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/cd62ccc5-f609-4fcc-8cd2-f99328fa7728" alt="Tela de login" width="400"> | <img src="https://github.com/user-attachments/assets/9fdfa421-9230-4641-a783-ee4b30aa43c5" alt="Página inicial" width="400"> |

| Cardápio | Carrinho |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/46f38cb9-cdd1-4f8f-9aa4-cfc41f570d19" alt="Cardápio" width="400"> | <img src="https://github.com/user-attachments/assets/85f05f17-e048-466a-bec9-45449a01eea1" alt="Carrinho" width="400"> |

| Pagamento | Painel de pedidos |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/edeab1ab-5edc-41d4-b5fa-c7bfc4bd132c" alt="Pagamento com Stripe" width="400"> | <img src="https://github.com/user-attachments/assets/5a53f1f7-3e56-4efd-bca1-c30a563a5100" alt="Painel administrativo de pedidos" width="400"> |

## Funcionalidades

### Cliente

- Cadastro e login, com validação de formulário
- Página inicial com carrosséis de categorias e de ofertas
- Cardápio com filtro por categoria. A categoria fica na URL (`/cardapio?categoria=2`), então o link pode ser compartilhado
- Carrinho com aumento e redução de quantidade, salvo no `localStorage`
- Pagamento com Stripe Payment Element
- Página de status do pagamento

### Administrador

- Lista de pedidos com filtro por status
- Atualização do status de cada pedido
- Detalhes do pedido em linha expansível
- Lista de produtos com indicação de oferta
- Cadastro e edição de produtos com upload de imagem

## Tecnologias

| Área | Bibliotecas |
| --- | --- |
| Base | React 19, Vite 7, React Router 7 |
| Estilo | styled-components, Material UI (tabelas do painel) |
| Formulários | React Hook Form, Yup |
| Dados | Axios |
| Pagamento | Stripe (`@stripe/react-stripe-js`) |
| Interface | React Toastify, Phosphor Icons, React Select, React Multi Carousel |

## Arquitetura

```
src/
├── routes/          # Rotas da área do cliente e do painel
├── layouts/
│   ├── UserLayout/  # Header e footer da área do cliente
│   └── AdminLayout/ # Menu lateral e proteção das rotas de admin
├── containers/      # Páginas (Home, Menu, Cart, Checkout, Login, Admin...)
├── components/      # Componentes reutilizáveis (cards, carrosséis, botão, carrinho)
├── hooks/           # Contextos de usuário e carrinho
├── services/api.js  # Instância do Axios com interceptors
├── config/          # Configuração do Stripe
├── styles/          # Estilos globais e tema
└── utils/           # Formatação de preço e data
```

### Estado global com Context API

- **`UserContext`** guarda os dados do usuário logado e o token, e sincroniza com o `localStorage` para manter a sessão ao recarregar a página
- **`CartContext`** centraliza as operações do carrinho (adicionar, aumentar, diminuir, remover, limpar) e também persiste no `localStorage`

### Autenticação com interceptors do Axios

O arquivo `services/api.js` tem dois interceptors:

- **Na requisição:** lê o token do `localStorage` e adiciona o header `Authorization: Bearer <token>` automaticamente
- **Na resposta:** se a API responder 401 (token expirado ou inválido), limpa a sessão e redireciona para o login

Assim, nenhuma página precisa lidar com o token manualmente.

### Fluxo de compra

1. O carrinho envia os itens para a API, que cria uma intenção de pagamento no Stripe e devolve o `clientSecret`
2. A página de checkout renderiza o Payment Element do Stripe com esse `clientSecret`
3. Com o pagamento confirmado, o front-end cria o pedido na API e limpa o carrinho

### Rotas do painel

O `AdminLayout` verifica se o usuário logado é administrador antes de renderizar as rotas do painel. Essa verificação no front-end serve só para a interface: a proteção real fica na API, que valida o token e a permissão em cada requisição.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 20.19 ou superior e a [DevBurger API](https://github.com/josealbertodeev/dev-burger-api) rodando.

```bash
git clone https://github.com/josealbertodeev/devburger-interface.git
cd devburger-interface
npm install
cp .env.example .env
npm run dev
```

No `.env`, aponte para a API:

```env
VITE_BASE_URL=http://localhost:3001
```

O projeto abre em `http://localhost:5173`.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Versão de produção em `dist/` |
| `npm run preview` | Serve a versão de produção localmente |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata o código com Prettier |

## Próximos passos

- Histórico de pedidos para o cliente
- Gerenciamento de categorias no painel
- Exclusão de produtos
- Criar o pedido pelo webhook do Stripe, e não pelo navegador, para garantir que todo pagamento confirmado vire pedido
- Testes com Vitest e Testing Library

## Autor

**José Alberto**: [LinkedIn](https://www.linkedin.com/in/josealbertofarias/) · [Portfólio](https://josealbertodeev.github.io/portfolio/)
