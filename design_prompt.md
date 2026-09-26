Act as a senior frontend developer and restaurant-brand web designer. Build a polished, responsive single-page website for BRADOS — Chicken & Wings.

Implement the website in this repository, not just a proposal. The first deliverable must run locally for visual review. Do not push, publish, or deploy anything yet.

IMPORTANT: I am NOT supplying images, logo files, or other brand assets in the repository at this stage. Do not block implementation or ask me to upload them. Follow the asset-free prototype requirements below.

## 1. PRIMARY WEBSITE REFERENCE

https://artsdistrictkitchen.com/

This is the primary design reference, not a passing example. I love its overall direction and want a BRADOS website closely inspired by its visual presentation and browsing experience.

Inspect the reference before implementation if browser tools are available. Examine:
- Desktop and mobile composition.
- Typography scale and hierarchy.
- Navigation.
- Image placement and cropping.
- Section proportions and spacing.
- Animation and interaction patterns.

Do not claim to have inspected visual details or animations you could not access. If access is unavailable, explain the limitation briefly and proceed using this prompt. Screenshots can be incorporated later.

Aim for a similar design approach: modern, dark-oriented, oversized typography, simple navigation, strong editorial composition, and tasteful animations.

Create original code and BRADOS-specific content. Do not copy the reference’s source code, photography, logo, or text.

## 2. BRAND CONTEXT

BRADOS is a pollo a la brasa and wings brand in Linares, Chile, focused on takeaway and delivery.

Brand descriptor: “Chicken & Wings”.
Main slogan: “Sabor que prende.”

Positioning:
- “Premium accesible”: quality and distinctive presentation without feeling exclusive or formal.
- Peruvian culinary inspiration combined with Chilean warmth and familiarity.
- Contemporary, approachable, youthful, and full of character.
- Food made for sharing: chicken at the center of the table, wings, sauces, and good moments together.

The Peruvian influence should be a spark, not a folkloric costume.

Personality:
- Warm, confident, modern, and clean.
- Controlled irreverence and playful energy.
- Youthful without being childish.
- Bold without being aggressive or excessively masculine.

Voice:
- Customer-facing content must be in Spanish.
- Preserve “Chicken & Wings” as the brand descriptor.
- Use short, clear, energetic copy with tasteful humor.
- Emphasize flavor, fire, appetite, and sharing.
- Avoid generic fast-food messaging, luxury-restaurant language, excessive slang, and constant promotional shouting.
- Do not invent recipes, ingredients, cooking-method claims, awards, testimonials, founding dates, or business history.

These requirements summarize the branding direction. Do not assume a separate branding document exists in the repository.

## 3. DEFINED COLOR PALETTE

Use these exact colors:

| Color | Hex | Role |
|---|---|---|
| Brasa red | #7A272B | Signature brand color |
| Warm cream | #F5EDDC | Signature companion color |
| Charcoal | #252321 | Supporting dark neutral |
| Ember orange | #D65A35 | Optional, restrained accent |

Centralize them in CSS custom properties.

Application:
- Charcoal is the main dark canvas, rather than pure black.
- Warm cream is the primary text and headline color on dark sections.
- Use brasa red in selected full-width sections, brand details, and buttons.
- Include occasional cream sections for warmth and breathing room.
- Preserve red + cream as the signature brand pairing.
- Use ember orange sparingly, or omit it when unnecessary.
- Do not add unrelated decorative colors or gradients.
- Check contrast for text, controls, focus indicators, and hover states.
- Avoid small red text on charcoal.

The dark website is an adaptation of the existing brand, not a new identity.

## 4. TYPOGRAPHY AND TEMPORARY BRAND MARK

No official logo file is supplied yet.

For this prototype:
- Display “BRADOS” as a temporary typographic brand mark.
- Place “Chicken & Wings” beneath or alongside it where appropriate.
- Do not invent a chicken, flame, wing symbol, or replacement logo.
- Encapsulate this in a BrandMark component so an official SVG can replace it later without restructuring the layout.
- Document that this is temporary typography, not the final logo.

Use:
- Space Grotesk Bold for display headings and the temporary BRADOS mark.
- DM Sans for body copy and interface elements.

Load fonts through build-compatible font packages where possible, so the compiled font assets are served with the site. Include sensible fallback fonts and font-display: swap. If font installation is unavailable, proceed with fallbacks and document it.

Typography should provide major visual impact:
- Oversized headings.
- Strong line breaks.
- Controlled line lengths.
- Responsive sizing with clamp().
- No clipping or horizontal overflow.

## 5. ASSET-FREE PROTOTYPE REQUIREMENTS

No supplied photographs, videos, logo files, or social-sharing images should be required to run the website.

Create a complete, visually intentional prototype using:
- Typography.
- Brand-color surfaces.
- CSS geometry and restrained graphic details.
- Well-composed media placeholders with the intended final aspect ratios.

For future photography areas:
- Build a reusable MediaPlaceholder component.
- Use tasteful branded compositions rather than browser broken-image icons or generic gray boxes.
- Add discreet Spanish labels such as “Foto de pollo a la brasa”, “Foto de alitas”, or “Foto de salsas”.
- Keep placeholder labels visually secondary.
- Make clear they are prototype placeholders, not actual product photography.

Do not:
- Reference nonexistent files.
- Download random stock photos.
- Hotlink external images.
- Copy imagery from the reference site.
- Generate fake product photography.
- Ask me for images before continuing.

Keep media definitions in one typed configuration file. Each slot should support:
- Optional image source.
- Alt text.
- Aspect ratio.
- Object position.
- Placeholder label.

When an image source is absent or fails to load, render the designed fallback.

The hero should still feel strong and complete without photography. Do not let an empty rectangle dominate it.

Provide an asset checklist in the README for later replacement, including recommended dimensions and cropping guidance.

When actual images are added later, support responsive sizing, explicit dimensions, and lazy loading below the fold. Do not lazy-load the hero image.

## 6. VISUAL DIRECTION

The result should feel like a distinctive contemporary food brand, not a generic restaurant template.

Use:
- Large editorial sections.
- Generous spacing.
- Strong composition and hierarchy.
- Contrasting section proportions.
- Restrained graphic details.
- A clear visual rhythm.

Avoid:
- Repeated rounded-card grids.
- Corporate/SaaS layouts.
- Glassmorphism, neon, and excessive shadows.
- Rustic steakhouse styling, wood textures, and distressed typography.
- Folkloric clichés.
- Excessive badges, decorations, or promotions.
- Identical layouts for every section.

Usually keep two dominant brand colors per section.

## 7. PAGE STRUCTURE

Build one continuous page with anchor navigation and no full-page reloads.

Main navigation:
Inicio / Carta / Nosotros / Contacto / Suscríbete.

Inicio encompasses:
Hero / Nuestra cocina / Salsas / Alitas.

### A. HERO

Include:
- Temporary BRADOS typographic brand mark.
- Oversized headline: “SABOR QUE PRENDE.”
- A short description of pollo a la brasa and alitas in Linares.
- A designed media placeholder or typographic composition prepared for a future food photograph.
- Primary CTA: “Ver carta”.
- Secondary CTA: “Conócenos”.

Make the composition striking on desktop and mobile without depending on images.

### B. NUESTRA COCINA

Introduce pollo a la brasa and Peruvian–Chilean inspiration through short, warm copy and a future-photography area.

Do not invent preparation techniques or operational details.

### C. SALSAS

Create an expressive section prepared for sauce photography:
- Configurable names, descriptions, and optional heat levels.
- A simple, distinctive layout.
- Clearly marked sample content when needed.

Do not represent invented sauces or recipes as confirmed offerings.

### D. ALITAS

A prominent section with:
- A designed future-photography area.
- A short, bold headline.
- Brief supporting copy.
- CTA linking to the Alitas category in the menu.

This CTA must both scroll to Carta and activate Alitas.

### E. CARTA

Build a readable HTML menu.

Categories:
- Pollo a la brasa.
- Alitas.
- Acompañamientos.
- Bebidas.

Requirements:
- Accessible category controls.
- Product names, concise descriptions, and configurable prices.
- Keep content in a separate typed data file.
- Format confirmed prices with Intl.NumberFormat using es-CL and CLP, without decimal places.
- Mark sample menu content clearly as provisional.
- Prefer “Precio por confirmar” over fabricated prices.
- No PDF dependency.
- No shopping cart, checkout, payments, or customer accounts.

### F. NOSOTROS

A concise brand introduction emphasizing:
- Contemporary pollo a la brasa and wings.
- Peruvian inspiration and Chilean familiarity.
- Flavor and sharing.

Do not invent founders’ biographies, milestones, or testimonials.

### G. CONTACTO

Provide configurable fields for:
- Address.
- Opening hours.
- Phone.
- WhatsApp.
- Instagram.
- Map link.

Only Linares, Chile is confirmed here. Do not invent the remaining information.

Show a tasteful pending-information state where appropriate. Render actionable links only when valid destinations are configured.

Use a simple map link rather than an embedded map. No contact-message processing backend is required.

### H. SUSCRÍBETE

Build the visual newsletter section for opening news and promotions.

GitHub Pages cannot process subscriptions itself. For this first version:
- Render the section in an explicitly unavailable state.
- Explain: “Pronto podrás suscribirte a nuestras novedades.”
- Do not collect, store, or submit email addresses.
- Do not simulate successful subscription.
- Do not use localStorage as a subscriber database.

Keep the component ready for a future externally hosted signup form or public browser-compatible subscription endpoint.

When a provider is configured later, it must support the necessary consent, privacy information, validation, and real success/error handling without exposing secrets.

Do not implement that external integration now.

### I. FOOTER

Keep it minimal:
- Temporary BRADOS brand mark.
- “Chicken & Wings”.
- Section links.
- Configured social links only.
- Copyright.
- Privacy link only when a real destination exists.

## 8. ANIMATION AND INTERACTION

Use motion to communicate controlled energy:
- Brief hero entrance.
- Subtle text and section reveals.
- Refined button and navigation interactions.
- Gentle movement of graphic elements.
- Smooth menu-category transitions.

Use CSS first. Use GSAP only when coordinated animations genuinely benefit from it.

Animations must run entirely in the browser and require no backend.

Avoid:
- Scroll hijacking.
- Custom cursors.
- Long loading sequences.
- Constant bouncing or shaking.
- Flame particles.
- Excessive parallax.
- Effects that block reading or interaction.

Respect prefers-reduced-motion. Content must remain visible if animation initialization fails. Clean up animation instances and event listeners correctly.

## 9. MOBILE AND ACCESSIBILITY

- Sticky header with correct anchor offsets.
- Normal same-document anchors.
- Logical heading hierarchy.
- Accessible mobile navigation.
- Keyboard operation and Escape to close.
- Appropriate focus management and visible focus states.
- Adequate contrast and touch targets.
- No horizontal page overflow.
- Menu controls usable at narrow widths.
- Reduced-motion support for smooth scrolling as well as animations.

Do not merely shrink the desktop layout. Give mobile its own considered composition.

## 10. GITHUB PAGES–COMPATIBLE TECHNICAL REQUIREMENTS

Build a client-rendered SPA using:
- React.
- TypeScript.
- Vite.
- Standard CSS with custom properties.
- Optional browser-side GSAP.

The production output must be static HTML, CSS, JavaScript, fonts, and any bundled assets in dist/.

Node.js is for local development and the CI build only. The deployed website must not require a running Node.js server.

Do not add:
- Server-side rendering.
- Server actions.
- API routes.
- Express or another backend.
- Serverless functions.
- A database.
- Authentication.
- Filesystem writes at runtime.
- A CMS.
- A service worker.
- A client-side page router.
- Host-specific middleware or rewrite rules.

Keep dependencies minimal.

### Navigation

Use same-document fragment links such as:
- #inicio
- #carta
- #nosotros
- #contacto
- #suscribete

Do not use history-based paths such as /menu or /about. GitHub Pages should not need an SPA fallback or rewrite configuration.

Verify direct visits and reloads with section fragments.

### Base paths and assets

Support both:
- https://USERNAME.github.io/REPOSITORY/
- https://USERNAME.github.io/ or a future custom domain.

Configure Vite base at build time:
- /REPOSITORY/ for a project site.
- / for a root-domain site.

Use a documented non-secret build variable or equivalent configuration. Do not hard-code a guessed repository name.

Use Vite-managed asset imports, or import.meta.env.BASE_URL where appropriate. Do not introduce root-relative asset URLs that break under a repository prefix.

The same rules apply to fonts, favicon references, and future images.

### Configuration and secrets

All frontend configuration is public.

Never place private credentials in:
- Source files.
- VITE_* variables.
- Compiled JavaScript.
- A browser-visible configuration file.

Only public values such as the base path, public website URL, and public contact links belong in client configuration.

### Metadata

Include:
- lang="es".
- Static page title.
- Meta description.
- Appropriate Open Graph text metadata.

Do not reference nonexistent favicon or social-preview images. Document how to add them later.

Only emit canonical and absolute social URLs when a real public site URL is configured. Do not invent a domain.

### Deployment preparation

Prepare a GitHub Actions deployment workflow using the current official GitHub Pages deployment approach.

It must:
- Be manually triggered with workflow_dispatch only for now.
- Use a Node.js version compatible with the installed Vite release.
- Install reproducibly with npm ci and a committed lockfile.
- Run checks and the production build.
- Upload dist/ as the Pages artifact.
- Use the official configure-pages, upload-pages-artifact, and deploy-pages actions.
- Declare the required contents: read, pages: write, and id-token: write permissions.
- Use the github-pages environment and deployment concurrency controls.
- Apply the configured base path correctly.

Verify current supported action versions from official documentation if browsing is available. Do not guess that outdated examples are current.

Creating the workflow is allowed; triggering it, pushing changes, and publishing are not.

Document Settings → Pages → Source → GitHub Actions.

Do not add a CNAME file until I provide a custom domain.

### Hosting-policy caveat

Technical compatibility does not establish that production use complies with GitHub Pages policies.

Include a concise README note that GitHub Pages restricts websites primarily intended to run an online business or facilitate commercial transactions. This must be reviewed before using it for BRADOS’s production website.

Keep the static build portable to another host without redesigning the website.

## 11. CODE ORGANIZATION

Use clear, reusable components and separate typed configuration for:
- Brand information.
- Media slots.
- Menu categories and products.
- Business details.
- External links.
- Subscription availability.

Avoid unnecessary abstraction. Make future replacement of placeholders straightforward.

## 12. WORKFLOW AND VERIFICATION

1. Inspect the repository and project instructions. Preserve unrelated changes.
2. Inspect the reference if possible.
3. Briefly summarize the design direction and implementation plan.
4. Proceed without asking for missing images, logo files, or unconfirmed contact information.
5. Implement the complete first version.
6. Run type checking, linting where configured, and the production build.
7. Test representative mobile, tablet, and desktop sizes.
8. Verify:
   - No broken images or requests to nonexistent assets.
   - No horizontal overflow or clipped headings.
   - Navigation and sticky-header offsets.
   - Mobile-menu keyboard behavior.
   - Menu-category switching.
   - Alitas CTA selecting the correct category.
   - Reduced-motion behavior.
   - Subscription remaining explicitly unavailable.
   - Missing contact information producing no dead links.
   - Production build working under both / and a test repository subpath.
   - Direct navigation and reload with section fragments.
9. Inspect screenshots and browser console/network errors if browser-testing tools are available.
10. Fix observed issues before handing off.
11. Report what was actually tested and any remaining limitations. Do not claim browser verification if it was unavailable.

## 13. DELIVERABLES

Provide:
- A complete locally runnable website.
- Clean, maintainable source code.
- Working development, build, preview, and type-check scripts.
- A manually triggered GitHub Pages workflow, not executed.
- A README covering setup, configuration, deployment preparation, and hosting limitations.
- An asset checklist and instructions for adding the official logo and real photography later.

The result should feel visually intentional even with no supplied assets: bold typography, BRADOS colors, excellent spacing, polished motion, and an unmistakable relationship to the design approach of https://artsdistrictkitchen.com/.