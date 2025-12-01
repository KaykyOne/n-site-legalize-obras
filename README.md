# 🏗️ Legalize Obras

> Site institucional especializado em consultoria tributária para redução legal de INSS de obras na construção civil.

## 📋 Sobre o Projeto

O **Legalize Obras** é uma plataforma web desenvolvida para uma consultoria especializada em redução legal de INSS (Instituto Nacional do Seguro Social) para obras da construção civil. O site oferece informações sobre serviços de planejamento tributário que podem gerar economia de até 80% nas contribuições previdenciárias de obras.

### 🎯 Objetivo

Apresentar os serviços da empresa de forma profissional e otimizada para SEO, garantindo que potenciais clientes encontrem facilmente informações sobre redução legal de INSS de obras através de mecanismos de busca.

## 🛠️ Tecnologias Utilizadas

### Core Framework
- **Astro 5.15.1** - Framework moderno para sites estáticos e SSR
- **Node.js** - Runtime JavaScript para servidor
- **TypeScript** - Superset tipado do JavaScript

### Frontend
- **React 19.2.0** - Biblioteca para componentes interativos
- **Tailwind CSS 4.1.16** - Framework de CSS utilitário
- **CSS personalizado** - Estilos customizados e animações

### Build e Deploy
- **Vite** - Build tool e bundler
- **PM2** - Gerenciador de processos para produção
- **Nginx** - Servidor web e proxy reverso

## 🏗️ Arquitetura e Estrutura

### Renderização
- **SSR (Server-Side Rendering)** completo com Astro
- Componentes React para interatividade quando necessário
- Geração de HTML otimizado para SEO

### Estrutura de Pastas
```
src/
├── components/          # Componentes reutilizáveis
│   ├── BlogPost*.tsx   # Componentes do blog
│   ├── Contact*.jsx    # Componentes de contato
│   ├── OptimizedImage.astro # Componente de imagem otimizada
│   ├── VLibras.astro   # Widget de acessibilidade
│   └── ...
├── layouts/
│   └── Layout.astro    # Layout principal com SEO
├── pages/              # Páginas do site
│   ├── index.astro     # Homepage
│   ├── sobre.astro     # Página sobre
│   ├── blog.astro      # Lista de posts do blog
│   ├── duvidas.astro   # FAQ
│   ├── reducao-legal-inss-obras.astro # Página de serviço
│   └── blog/[id].astro # Páginas dinâmicas do blog
├── types/              # Definições TypeScript
└── main.css           # Estilos globais
```

## 🔍 Otimizações SEO Implementadas

### Meta Tags e Structured Data
- **Meta tags otimizadas** para cada página (title, description, keywords)
- **Open Graph** completo para redes sociais
- **Twitter Cards** para melhor compartilhamento
- **Schema.org JSON-LD** para rich snippets
- **Canonical URLs** para evitar conteúdo duplicado

### Performance
- **Componente OptimizedImage** com suporte a WebP e fallbacks
- **Lazy loading** de imagens por padrão
- **Preconnect** para Google Fonts
- **CSS crítico** inline no head

### Estrutura e Conteúdo
- **Sitemap.xml** completo com prioridades e frequências de atualização
- **Robots.txt** para direcionamento de crawlers
- **URLs semânticas** e amigáveis
- **Breadcrumbs** implícitos na estrutura
- **Heading hierarchy** (H1, H2, H3) bem estruturada

### Acessibilidade
- **Widget VLibras** para tradução em Libras
- **Alt texts** em todas as imagens
- **HTML semântico** com landmarks apropriados
- **Contraste** adequado de cores

### Core Web Vitals
- **Server-Side Rendering** para First Contentful Paint rápido
- **Otimização de imagens** para reduzir Cumulative Layout Shift
- **CSS otimizado** para melhor Largest Contentful Paint

## 📱 Funcionalidades

### Páginas Principais
1. **Homepage** - Apresentação dos serviços e chamadas para ação
2. **Sobre** - Informações sobre a empresa e expertise
3. **Blog** - Artigos sobre tributação e construção civil
4. **Dúvidas (FAQ)** - Perguntas frequentes sobre INSS de obras
5. **Redução Legal INSS** - Página detalhada do serviço principal

### Componentes Interativos
- **Modal de contato** com React
- **Botões de compartilhamento** nas redes sociais
- **Navegação responsiva** com menu mobile
- **Animações CSS** suaves e otimizadas

### Blog Dinâmico
- Sistema de posts com roteamento dinâmico
- Páginas individuais para cada artigo
- Componentes reutilizáveis para listagem e exibição

## 🚀 Deploy e Produção

### Configuração de Produção
- **PM2** para gerenciamento de processos
- **Modo standalone** do Astro para bundle completo
- **Variáveis de ambiente** para configuração
- **Dockerfile** para containerização opcional

### Scripts Disponíveis
```bash
npm run dev      # Desenvolvimento local
npm run build    # Build de produção
npm run preview  # Preview do build
npm run deploy   # Build e deploy
npm run prod     # Execução em produção
```

### Otimizações de Bundle
- **SSR noExternal** para React e dependências
- **Bundle standalone** sem dependências externas
- **Tree shaking** automático do Vite
- **Minificação** de CSS e JavaScript

## 🔧 Configurações Especiais

### Tailwind CSS 4
- **Configuração @theme** com variáveis CSS customizadas
- **Cores primárias** definidas (#227899, #2A2D4C)
- **Font family** Inter importada do Google Fonts

### Animações CSS
- **Fade-in** controlado para melhor UX
- **Animações on-scroll** sem prejudicar SEO
- **Conteúdo sempre visível** para crawlers

### TypeScript
- **Strict mode** habilitado
- **Tipos customizados** para VLibras e componentes
- **Props interfaces** bem definidas

## 📊 Métricas e Performance

### Otimizações Implementadas
- ✅ **SSR completo** para SEO
- ✅ **Componentes de imagem otimizados**
- ✅ **Lazy loading** de recursos
- ✅ **Minificação** de assets
- ✅ **Preconnect** para recursos externos
- ✅ **Critical CSS** inline

### SEO Técnico
- ✅ **Sitemap XML** estruturado
- ✅ **Meta tags** completas
- ✅ **Schema markup** JSON-LD
- ✅ **URLs canônicas**
- ✅ **Robots.txt** otimizado

## 🎨 Design e UX

### Tema Visual
- **Paleta de cores** profissional (azul corporativo)
- **Tipografia** Inter para legibilidade
- **Layout responsivo** mobile-first
- **Gradient text** para destaques

### Cores:
    primary-color: #227899;
    secondary-color: #2A2D4C;

### Acessibilidade
- **Widget VLibras** integrado
- **Semântica HTML5** apropriada
- **Contraste** WCAG compliant
- **Navegação por teclado** funcional

---

**Desenvolvido com foco em performance, SEO e experiência do usuário para maximizar a conversão de visitantes em leads qualificados.**