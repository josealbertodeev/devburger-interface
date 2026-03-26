# 🍔 DevBurger - Interface Frontend

> Sistema completo de delivery de hambúrgueres desenvolvido com React + Vite

## 🚀 Demo

🔗 **[Visualizar Demo Online](https://your-demo-link.vercel.app)**

## 📋 Sobre o Projeto

O **DevBurger** é uma aplicação completa de delivery de hambúrgueres com interface moderna e intuitiva. O projeto inclui área do cliente para pedidos e área administrativa para gerenciamento de produtos e pedidos.

### ✨ Funcionalidades

#### 👤 Área do Cliente
- ✅ Cadastro e autenticação de usuários
- ✅ Catálogo de produtos por categorias
- ✅ Carrinho de compras interativo
- ✅ Finalização de pedidos
- ✅ Integração com Stripe para pagamentos
- ✅ Histórico de pedidos

#### 🔧 Área Administrativa
- ✅ Dashboard administrativo
- ✅ Gerenciamento de produtos (CRUD)
- ✅ Gerenciamento de categorias
- ✅ Controle de pedidos e status
- ✅ Upload de imagens de produtos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[React Router DOM](https://reactrouter.com/)** - Roteamento
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Yup](https://github.com/jquense/yup)** - Validação de schemas
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notificações
- **[Phosphor Icons](https://phosphoricons.com/)** - Ícones
- **[Stripe](https://stripe.com/)** - Processamento de pagamentos

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Yarn ou NPM
- Backend da aplicação rodando

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/devburger-interface.git

# Entre na pasta do projeto
cd devburger-interface

# Instale as dependências
yarn install
# ou
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Configuração do .env

```env
VITE_BASE_URL=http://localhost:3001
```

### Executando

```bash
# Modo desenvolvimento
yarn dev
# ou
npm run dev

# Build para produção
yarn build
# ou
npm run build

# Preview da build
yarn preview
# ou
npm run preview
```

A aplicação estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/
│   ├── Header/
│   ├── Footer/
│   └── ...
├── containers/          # Páginas principais
│   ├── Home/
│   ├── Login/
│   ├── Menu/
│   ├── Cart/
│   └── Admin/
├── hooks/              # Context API e hooks customizados
│   ├── UserContext.jsx
│   └── CartContext.jsx
├── layouts/            # Layouts da aplicação
│   ├── UserLayout/
│   └── AdminLayout/
├── services/           # Configurações de API
│   └── api.js
├── styles/            # Estilos globais e temas
│   ├── globalStyles.js
│   └── themes/
└── routes/            # Configuração de rotas
    └── index.jsx
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com) 
3. Conecte seu repositório
4. Configure a variável de ambiente `VITE_BASE_URL`
5. Deploy automático! 🚀

### Netlify

```bash
# Build do projeto
yarn build

# Upload da pasta dist/ no Netlify
```

### Variáveis de Ambiente (Produção)
```env
VITE_BASE_URL=https://seu-backend-api.herokuapp.com
```

## 🔒 Autenticação

O sistema utiliza JWT (JSON Web Token) para autenticação:
- Token armazenado no localStorage
- Interceptor Axios para inserir token automaticamente
- Redirecionamento automático para login em caso de token inválido

## 🎨 Design System

- **Cores principais**: Tema escuro com detalhes roxos
- **Tipografia**: Fontes modernas e legíveis  
- **Responsividade**: Adaptado para mobile, tablet e desktop
- **Componentes**: Sistema de design consistente

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

```bash
yarn dev          # Inicia servidor de desenvolvimento
yarn build        # Build para produção
yarn preview      # Preview da build
yarn lint         # Linting do código
```

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/devburger-interface/issues) com:
- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do ambiente

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- E-mail: seu.email@exemplo.com

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐