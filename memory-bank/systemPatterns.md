# System Patterns

Slide Rendering
- Central typed data source: constants/slideData.ts (SlideContent[]).
- Switch-based renderer in App.tsx selects component by slide.type.
- Each slide component expects strongly-typed props (see types.ts).

Navigation
- State: currentSlide index in App.tsx; wrap-around using modulo arithmetic.
- Controls: Footer buttons and keyboard handlers (ArrowRight/Space -> next, ArrowLeft -> prev).

Theming
- Theme stored in localStorage and applied via data-theme attribute on <html>.
- index.html defines light-mode CSS overrides for Tailwind utility classes to ensure proper contrast.

Styling
- Tailwind via CDN, augmented with custom CSS variables and green accent utility helpers (accent-shadow, accent-outline, etc.).
- Titles standardized to #1F9632 for slides 2–12.

Defensive Coding
- Ensure arrays passed to map exist (use optional chaining or validated props).
- Keep props aligned with SlideContent structure to avoid runtime undefined errors.