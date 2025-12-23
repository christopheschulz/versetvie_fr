# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **VersetVie**, a Christian mobile app providing daily Bible verses with personalized encouragements. Built with Astro and Tailwind CSS v4, deployed on GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

## Architecture

### Internationalization (i18n)
- **3 languages**: French (default), English, German
- All translations centralized in `src/i18n/ui.ts` as a typed object
- `src/i18n/utils.ts` provides `useTranslations(lang)` helper and store URLs/badges
- Routes use locale prefixes: `/fr/`, `/en/`, `/de/` (configured in `astro.config.mjs` with `prefixDefaultLocale: true`)
- Each locale has its own page files under `src/pages/{locale}/`

### Component Structure
Components in `src/components/` are locale-aware via URL parsing:
- `Header.astro` - Navigation with language switcher and theme toggle
- `Hero.astro` - Main hero section with app store links
- `Features.astro` - Feature grid
- `Testimonials.astro` - User reviews carousel
- `Pricing.astro` - Free/Premium comparison
- `FAQ.astro` - Accordion FAQ
- `DownloadCTA.astro` - Call-to-action section
- `Footer.astro` - Footer with legal links

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- CSS variables for theming in `src/styles/global.css`
- Dark/light mode toggle with `localStorage` persistence
- Custom fonts: Inter (sans) and Playfair Display (serif)

### Legal Pages
Each locale has privacy and terms pages:
- FR: `/fr/confidentialite`, `/fr/conditions`
- EN: `/en/privacy`, `/en/terms`
- DE: `/de/datenschutz`, `/de/nutzungsbedingungen`

## Development Guidelines

- **Separation of concerns**: Keep CSS in `.css` files or Tailwind classes, JS in `<script>` tags or separate files
- **Adding translations**: Add keys to all 3 language objects in `src/i18n/ui.ts`
- **Store URLs**: Update in `src/i18n/utils.ts` (`storeUrls` and `storeBadges` objects)

## Deployment

Deployed via GitHub Pages from the `dist/` folder. Custom domain configured in `public/CNAME`.
