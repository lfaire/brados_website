# Verification report

## Executed successfully

- TypeScript strict checking and ESLint.
- 11 component/helper tests: menu keyboard selection/wrapping; Alitas anchor/category/focus; direct-fragment resolution after mount; mobile disclosure/Escape/anchor focus; missing contact/subscription states; broken-image fallback and replacement; content visibility without observers; failed animation initialization; reduced-motion reveal suppression; CLP price formatting; safe contact URLs.
- Production builds using `/` and `/brados-preview/`.
- Static inspection of generated HTML/CSS: referenced JavaScript, stylesheets, and bundled fonts exist; repository-prefix asset paths contain the configured base; font-display is swap.
- Canonical and `og:url` omitted without configuration; correct values emitted using a temporary example URL for testing. The final root build contains no example domain or canonical URL.
- Primary text/focus color pairs: cream/charcoal 13.44:1; cream/brasa red 8.38:1. Orange is restricted to the oversized decorative hero period.
- npm installation audit: zero known vulnerabilities after updating Vitest to 4.1.11.
- Local development server at http://127.0.0.1:5173/ returned HTTP 200.
- Existing repository files and `design_prompt.md` preserved. No push, deployment, publishing, or workflow execution.

## Browser limitations

No browser connection was available. Screenshots, actual viewport layouts at 360/390/768/1440px, 200% zoom, horizontal overflow, visual cropping, native anchor offsets/reloads, live reduced-motion emulation, and browser console/network inspection were **not** verified. Component tests validate behavior in jsdom, not browser layout. Production base-path checks inspected generated artifacts; they were not browser end-to-end tests.

The reference site's text was inspected during planning, but its desktop/mobile visuals and animations could not be examined. Visual similarity is based on the supplied brief rather than an observed pixel comparison.

## Review next

### Header and typography refinement

The reference's public HTML/CSS was subsequently inspected: left-aligned logo and uppercase display navigation, a separate right-side outlined action, a compact scrolled header, and a mobile menu control. BRADOS now adapts those patterns with original code, its own palette, and a “Ver carta” action. Space Grotesk Bold is also used for buttons, tabs, navigation, and short interface labels. This is source-based inspection; live rendering and animation timing remain visually unverified.

Open the local URL and perform the viewport/keyboard checks listed in README. Replace provisional content only when confirmed business details and approved assets are available. The manual GitHub Pages workflow remains unexecuted and production hosting requires the documented policy review.
