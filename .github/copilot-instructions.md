# rebond.eco - AI Assistant Instructions

## Project Overview
**rebond.eco** is a bilingual (FR/EN) Vue 3 + TypeScript website for a green finance platform that tokenizes renewable energy bonds. Built with Vite SSG for optimal SEO and deployed on Cloudflare Pages.

## Architecture & Tech Stack

### Core Framework
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** throughout - never use plain JavaScript
- **Vite SSG** for static site generation and optimal SEO
- **Tailwind CSS v4** with Iconify integration for icons
- **Cloudflare Pages** with Functions for backend functionality

### Key Patterns

#### 1. Bilingual Routing System
Routes use **locale-prefixed URLs** (`/fr/...`, `/en/...`) with translated slugs:
```typescript
// Route structure in src/router/index.ts
const ROUTE_SLUGS = {
  producers: { fr: 'producteurs-enr', en: 'renewable-energy-producers' }
}
```
- Always use `getRouteFor()` from `useLocalization()` composable for navigation
- Route names follow pattern: `"RouteName-{locale}"` (e.g., `"Home-fr"`, `"Investors-en"`)

#### 2. i18n Integration
- Translation keys organized by feature: `menu.*`, `seo.*`, `home.*`
- SEO metadata is **fully localized** in `src/locales/{locale}.json`
- Use `$t()` in templates, `t()` in composables
- Locale sync happens automatically via router guards

#### 3. Component Organization
```
src/components/
├── core/        # Reusable business components (ProcessusSvg.vue)
├── forms/       # Form components with validation
├── icons/       # Custom SVG icon components
├── logos/       # Brand logo components
└── ui/          # Generic UI components
```

#### 4. Cloudflare Functions Pattern
Backend API uses Cloudflare Pages Functions in `functions/api/`:
- Export `onRequestPost()` for POST endpoints
- Include comprehensive TypeScript interfaces
- Validate with Turnstile (Cloudflare's CAPTCHA)
- Use Brevo API for email services
- Always include CORS headers for cross-origin requests

## Development Workflows

### Build & Deploy Commands
```bash
yarn dev           # Development with HMR
yarn build        # Production build with type checking
yarn build-ssg    # Static site generation for deployment
yarn type-check   # TypeScript validation
```

### Environment Setup
- **Development**: Uses Vite dev server with Vue DevTools
- **Production**: Static files deployed to Cloudflare Pages
- **Secrets**: Managed via `wrangler secret put` (BREVO_API_KEY, TURNSTILE_SECRET_KEY)

## Code Conventions

### Vue Components
- Always use `<script setup lang="ts">` syntax
- Prefer Composition API over Options API
- Use `defineEmits` and `defineProps` for component interface
- Import types with `type` keyword: `import type { RouteRecordRaw } from 'vue-router'`

### Code Comments & Documentation
- **All code comments must be in English** - maintain consistency across the codebase
- Use JSDoc format for function/component documentation
- Prefer self-documenting code over excessive commenting
- Follow industry standards for comment formatting and content

### TypeScript Patterns
- Export interfaces for reusable types
- Use `const` assertions for read-only objects: `as const`
- Leverage template literal types for route names
- No `any` types - use proper interfaces or generics

### CSS & Styling
- **Tailwind-first** approach - avoid custom CSS when possible
- Use Iconify classes: `class="iconify mdi--home"` 
- Responsive design with mobile-first breakpoints
- Custom theme variables in `tailwind.config.ts`

### Internationalization
- Always consider both languages when adding content
- Use semantic keys: `home.hero.title` not `page1.text1`
- Include translations in same commit as features
- Maintain consistency between `en.json` and `fr.json` structure

## Infrastructure Architecture

### Cloudflare Stack
- **DNS**: Cloudflare manages zone records and routing
- **Edge**: CDN, WAF, caching, and DDoS protection
- **Pages**: Static site hosting with automatic deployments
- **Functions**: Serverless backend (`/api/paperboy`) for form processing
- **Turnstile**: Integrated CAPTCHA service

### Data Flow
```
User → Cloudflare Edge → Pages (Frontend)
                    ↘ Functions (/api/paperboy) → Brevo SMTP
```

## Integration Points

### External Services
- **Brevo**: Email service via REST API (`functions/api/paperboy.ts`)
- **Turnstile**: Cloudflare CAPTCHA integration
- **Iconify**: Icon system via Tailwind plugin

### Build Configuration
- **Asset handling**: Absolute paths with hash-based naming
- **SSG**: Pre-renders all routes for SEO optimization
- **Base path**: Configurable via `BASE_PATH` environment variable

## Common Tasks

### Adding New Pages
1. Add route slugs to `ROUTE_SLUGS` in `src/router/index.ts`
2. Create Vue component in `src/views/`
3. Add SEO metadata to both locale files
4. Update navigation in relevant components

### Form Integration
- Use Turnstile for bot protection
- Validate client-side with TypeScript interfaces
- Send to `/api/paperboy` endpoint
- Include proper error handling and user feedback

### Icon Usage
```vue
<!-- Use Iconify classes for icons -->
<span class="iconify mdi--email text-xl"></span>
```

When working on this codebase, prioritize multilingual considerations, TypeScript safety, and the SSG build process for optimal SEO performance.