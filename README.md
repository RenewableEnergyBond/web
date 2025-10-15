<div align="center">
  <img src="./public/assets/logo-rebond.svg" alt="rebond logo" width="200"/>
  
  # rebond.eco
  
  [![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🚀 About

**rebond** is an innovative platform that bridges green finance and digital assets to accelerate the energy transition. We select, structure and tokenize bonds issued by renewable energy producers, offering a hybrid solution between traditional finance and blockchain innovation.

## 🛠️ Tech Stack

This website is built with modern and performant technologies:

### Frontend
- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework with Composition API
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for better code robustness
- **[Vue Router](https://router.vuejs.org/)** - Official SPA routing for Vue.js
- **[Vue I18n](https://vue-i18n.intlify.dev/)** - Internationalization (FR/EN)

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Next-generation utility-first CSS framework
- **Responsive design** - Interface optimized for all screen sizes
- **Custom theme** - Visual identity aligned with our values

### Build & Development
- **[Vite](https://vitejs.dev/)** - Ultra-fast build tool with Hot Module Replacement
- **[Vite SSG](https://github.com/antfu/vite-ssg)** - Static generation for better SEO performance
- **[Vue DevTools](https://devtools.vuejs.org/)** - Integrated development tools

### Stack Benefits

✅ **Optimal Performance** : Vite provides instant startup and optimized builds  
✅ **Developer Experience** : Hot reload, TypeScript, and modern tooling  
✅ **SEO-friendly** : Static generation with Vite SSG  
✅ **Maintainability** : Structured, typed and modular code  
✅ **Internationalization** : Native multi-language support  
✅ **Responsive Design** : Interface adapted to all devices  

## 📖 Documentation

This project includes comprehensive documentation to help developers and contributors:

| Document | Description | Audience |
|----------|-------------|----------|
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Infrastructure architecture and data flows | Developers & DevOps |
| **[CONTRIBUTING.md](./CONTRIBUTING.md)** | Development workflow and contribution guidelines | Contributors |
| **[SECURITY.md](./SECURITY.md)** | Security policies and vulnerability reporting | Security & Compliance |

## 🏗️ Architecture

**rebond.eco** uses a full-stack Cloudflare architecture for optimal performance and security:

```mermaid
flowchart LR
    U[User] --> CF[Cloudflare Edge]
    CF --> P[Pages Frontend]
    P --> W[Worker /api/paperboy]
    W --> B[Brevo SMTP]
```

📋 **For detailed infrastructure documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md)**

## 🚀 Development

### Prerequisites
- Node.js 18+
- Yarn or npm

### Installation

```bash
# Clone the project
git clone https://github.com/RenewableEnergyBond/web.git
cd web

# Install dependencies
yarn install
```

### Available Scripts

```bash
# Development server with hot reload
yarn dev

# Production build with type checking
yarn build

# Static generation (SSG)
yarn build-ssg

# TypeScript type checking
yarn type-check

# Build preview
yarn preview
```

## 🌍 Internationalization

The website is available in French and English, with dynamic translation management via Vue I18n.

## 📈 Performance & SEO

- **Static generation** with Vite SSG for optimal loading times
- **Optimized images** and modern formats
- **Dynamic meta tags** for optimal SEO
- **Core Web Vitals** optimized

## 🤝 Contributing

We welcome contributions! Please read our documentation before getting started:

1. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Development workflow and Git conventions
2. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Understanding the technical architecture  
3. **[SECURITY.md](./SECURITY.md)** - Security policies and reporting guidelines

### Quick Start for Contributors
```bash
git clone https://github.com/RenewableEnergyBond/web.git
cd web
yarn install
yarn dev
```

---

<div align="center">
  <p><strong>rebond.eco</strong> - Accelerating the energy transition</p>
  <p>🌱 Green Finance • 🔗 Blockchain • 🌍 Positive Impact</p>
</div>
