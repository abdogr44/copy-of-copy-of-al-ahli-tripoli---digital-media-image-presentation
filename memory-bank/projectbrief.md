# Project Brief

Project: Al Ahli Tripoli — Digital Media Image Presentation

Purpose
- Deliver an interactive, RTL Arabic slide presentation that communicates key findings of the study on the club’s digital image via Facebook.

Scope & Core Requirements
- 12 slides total, ordered:
  1) Title, 2) مقدمة العرض, 3) مشكلة الدراسة, 4) أهداف الدراسة, 5) تساؤلات الدراسة, 6) نتائج الدراسة التحليلية (جداول), 7) تقييم الجمهور (ديموغرافيا), 8) محور تقييم جودة المحتوى (مخططات), 9) محور إدارة الصفحة والمحتوى المثير للجدل (مخططات), 10) محور تأثير الصفحة على صورة النادي وثقته (مخططات), 11) أبرز مقترحات الجمهور, 12) الخاتمة
- Simple, reliable navigation:
  - UI buttons for Next/Back
  - Keyboard: ArrowRight/Space for next, ArrowLeft for previous
  - Wrap-around between first and last slides
- Theme toggle (dark/light) with persistence in localStorage and immediate UI update via data-theme attribute.
- Progress indicator (percentage-based) reflecting current slide index.
- Arabic-first UX: RTL layout, Tajawal font, high readability and contrast in both themes.
- Styling via Tailwind CDN with project-specific light-mode overrides.
- Visual identity: Titles on slides 2–12 use forest green (#1F9632). Legacy accent jonquil (#F3CB13) remains on controls unless otherwise requested.

Non-Goals
- No backend or data fetching. All content is static and typed.
- No heavy charting libs; charts are simple visual summaries from static data.

Acceptance Criteria
- All slides render without runtime errors across navigation boundaries.
- Theme toggle works and persists.
- Titles on slides 2–12 are green (#1F9632) and consistent.
- Adequate contrast in light mode for body, descriptions, and highlights.