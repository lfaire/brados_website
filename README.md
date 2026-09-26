# BRADOS — Chicken & Wings

An asset-free restaurant website prototype for Linares, Chile. React, TypeScript, Vite, and standard CSS; entirely static after building. Customer-facing copy is Spanish. No backend, checkout, accounts, analytics, or email collection.

## Local review

Use Node 24 (`nvm use` if you use nvm).

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Other commands:

```sh
npm run check       # TypeScript, ESLint, and component/interaction tests
npm run build       # TypeScript check and static dist/ output
npm run preview     # Serve the production build locally
```

Keep `package-lock.json` with the source; installations and CI use `npm ci`.

## Public configuration

Copy `.env.example` to `.env.local` if needed. Every frontend value is public. Never put passwords, API secrets, or private credentials in source, `VITE_*`, or browser configuration.

| Setting          | Purpose                                                                            | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| `VITE_BASE_PATH` | Build base: `/REPOSITORY/` for project hosting, `/` for root/custom-domain hosting | `/`     |
| `VITE_SITE_URL`  | Full public site URL, including repository path; emits canonical and `og:url` tags | Omitted |

Use a trailing slash in the full site URL. No domain is assumed. An invalid configured URL or base fails the build. Page title, description, language, and Open Graph text are static in `index.html`.

```sh
VITE_BASE_PATH=/brados-preview/ npm run build
VITE_BASE_PATH=/brados-preview/ npm run preview
# Open http://127.0.0.1:4173/brados-preview/#carta

VITE_BASE_PATH=/ npm run build
npm run preview
```

Navigation uses document fragments, never application paths; the host needs no SPA rewrites. The compiled output needs no Node server and is portable to another static host.

## Content and components

- `src/config/brand.ts`: brand and navigation.
- `src/config/menu.ts`: categories, product descriptions, nullable CLP prices, provisional labels, and sauces with optional heat levels.
- `src/config/business.ts`: address/hours/phone, external links, and subscription unavailable state. Only Linares, Chile is confirmed. Enter phone numbers in international `+56…` format and full HTTP(S) URLs for external links.
- `src/config/media.ts`: every media slot, optional source/responsive sources, alt text, ratio, dimensions, and crop position.
- `src/components/BrandMark.tsx`: **temporary typography, not the final logo**. Replace its interior with an imported official SVG while retaining its outer layout and accessible link labels. Do not invent a new logo.

The menu intentionally contains a small set of explicitly provisional entries, not an invented commercial menu. Prices stay “Precio por confirmar” until confirmed numeric CLP amounts are configured. Remove provisional flags only after approval of the real information.

Subscription is deliberately unavailable and renders no form. A future provider integration must add appropriate consent and privacy information, validation, real success/error handling, and a public browser-compatible endpoint or hosted form. Configuration alone does not enable subscriptions. Never expose provider secrets or store subscribers in localStorage.

## Asset checklist

No image files are required. Every empty or failed image source falls back to a branded typographic composition. Placeholder captions identify future photography and are not claims about actual products.

| Asset                | Recommended dimensions      | Crop guidance                                                                             |
| -------------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| Official BRADOS logo | SVG with a correct viewBox  | Preserve proportions; supply a cream/dark-surface version and appropriate accessible name |
| Hero chicken         | 1600 × 1200, 4:3            | Central food grouping; leave edge breathing room                                          |
| Kitchen chicken      | 1200 × 1500, 4:5            | Vertical composition; avoid important details at the edges                                |
| Wings                | 1500 × 1000, 3:2            | Horizontal sharing composition, subject near center                                       |
| Sauces               | 1600 × 900, 16:9            | Wide composition; keep all sauce vessels inside the safe crop                             |
| Social preview       | 1200 × 630                  | Supply a real approved image before adding `og:image`                                     |
| Favicon              | Approved SVG and/or PNG/ICO | Add only when an official mark is available                                               |

Prefer optimized WebP/AVIF assets with suitable alternatives. Put photographs in `src/assets/`, import them into the media configuration, and set `src`, accurate `alt`, `width`, and `height`. Update `objectPosition` per image. Provide `srcSet` and `sizes` for responsive variants. Import every source so Vite rewrites its base path. For public-directory files, prefix references with `import.meta.env.BASE_URL`, not `/`. The hero image loads eagerly; other images load lazily. Fontsource Latin font subsets are bundled locally with `font-display: swap`.

For future favicon references in `index.html`, use `%BASE_URL%`. Social images require a real absolute public URL. Do not add references to missing files.

## Deployment preparation — not published

The workflow in `.github/workflows/pages.yml` has **only** `workflow_dispatch`. It is not triggered by pushes. No deployment has been requested or executed.

When production hosting has been approved:

1. Review the hosting-policy note below and confirm the destination.
2. In GitHub, select **Settings → Pages → Source → GitHub Actions**.
3. Make sure source and lockfile are in the repository.
4. Manually run the workflow with the correct `base_path` and optional confirmed `site_url`.

The workflow runs checks, builds `dist/`, uploads the official Pages artifact, and deploys through the `github-pages` environment with deployment concurrency and required permissions. Action versions follow the [official Pages guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [setup-node documentation](https://github.com/actions/setup-node). Do not add a CNAME until a custom domain is provided.

**Hosting-policy note:** GitHub Pages restricts sites primarily intended to run an online business or facilitate commercial transactions. Review the [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) before choosing it for BRADOS production hosting. Technical compatibility is not a policy determination. The same static build can move to another host without redesign.

## Verification

Tests cover menu keyboard navigation, the Alitas CTA, mobile menu state/focus, honest missing-data states, image-error fallback, and contact/price helpers. Component tests do not prove visual layout or actual browser rendering.

For browser review, check widths 360, 390, 768, and 1440px plus 200% zoom; inspect overflowing/clipped text, sticky offsets, direct fragment visits/reloads, keyboard navigation, tab visibility, reduced motion, and console/network failures. Repeat against root and repository-prefix production builds. Test a deliberately broken photo source and a real supplied photo before launch.

The reference site was readable as text during planning, but no browser connection was available for visual inspection of its layouts or animations. The prototype follows the supplied visual brief; it does not claim pixel-level fidelity to uninspected reference details. See `VERIFICATION.md` for actual executed checks and remaining limitations.
