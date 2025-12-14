# 📱 Document Scanner Features Showcase

🌐 **Live Site:** [https://yunus5112.github.io/Scan/](https://yunus5112.github.io/Scan/)

A modern, responsive React application showcasing Document Scanner app features with interactive animations.

## ✨ Features

- 🎨 **5 Main Features:**
  - Document Scanner
  - Sign & Stamp
  - Batch Scanning
  - Advanced Filters
  - Export & Share

- 📱 **Fully Responsive Design**
  - Optimized for desktop, tablet, and mobile devices
  - Desktop-first approach with consistent breakpoints

- 🎭 **Smooth Animations**
  - Smooth tab transitions with icon animations
  - Phone display slide-up animations
  - Overlay image animations with delays
  - Scroll snap support for mobile tabs

- ♿ **Accessibility**
  - ARIA attributes (role, aria-selected, aria-controls)
  - Keyboard navigation support
  - Focus-visible states
  - Prefers-reduced-motion support

- 🎯 **Type Safety**
  - Full TypeScript support
  - Strict type checking
  - Type-safe feature IDs and overlay positions

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **GitHub Actions** - CI/CD deployment
- **GitHub Pages** - Hosting

## 📦 Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (ESLint, TypeScript, Stylelint)
npm run lint

# Format code (Prettier, Stylelint)
npm run format
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── icons/          # SVG icon components
│   └── images/         # Phone mockups and overlay images
├── components/
│   └── features/       # Feature-specific components
│       ├── FeatureContent/    # Right-side content display
│       ├── FeatureTabs/       # Bottom tab navigation
│       └── PhoneDisplay/      # Phone mockup with overlays
├── constants/
│   └── features.ts     # Features data configuration
├── styles/
│   ├── variables.css   # CSS custom properties
│   ├── reset.css       # CSS reset
│   └── global.css      # Global styles
└── types/
    └── features.ts     # TypeScript type definitions
```

## 🎨 Design

Figma design URL:

```
https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1
```

Example implementation videos:

```
https://drive.google.com/drive/folders/1kkicvHG7UMc-MY9npv_fy4gW1cZF3QiO?usp=drive_link
```

## 🏗️ Architecture Highlights

- **SOLID Principles** - Clean component architecture
- **DRY** - CSS variables for consistent theming
- **KISS** - Simple, maintainable code structure
- **CSS Variables** - Centralized color, spacing, and layout values
- **Type Safety** - Strict TypeScript with custom types
- **Component Composition** - Small, reusable components

## 🌐 Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions. Every push to `main` or `master` branch triggers the deployment workflow.

Deployment workflow: `.github/workflows/deploy.yml`

## 📝 Code Quality

- ✅ **ESLint** - JavaScript/TypeScript linting
- ✅ **Prettier** - Code formatting
- ✅ **Stylelint** - CSS linting
- ✅ **TypeScript** - Type checking with `tsc --noEmit`

## 📄 License

This project is a frontend assignment project.
