# Tech Context

Stack
- React 19, ReactDOM 19
- Vite 6 (dev/build/preview)
- TypeScript ~5.8
- Tailwind CSS via CDN (no PostCSS pipeline)
- Google Fonts (Tajawal)

Project Setup
- Scripts: dev (vite), build (vite build), preview (vite preview)
- Dev server default: http://localhost:5173/
- Import maps in index.html point React/ReactDOM to CDN.

Structure
- App.tsx: navigation, theming, progress, slide renderer.
- constants/slideData.ts: full content model.
- components/slides/*: presentational slide components.
- index.html: Tailwind config, theme bootstrapping, light-mode overrides, accent utilities.

Performance
- Static assets, no runtime data fetching.
- Lightweight, fast reload through Vite HMR.