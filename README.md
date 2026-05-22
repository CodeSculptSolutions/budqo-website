# Budqo Marketing Website

Marketing site for [Budqo](https://budqo.com) — built with Next.js 16, Tailwind CSS v4, shadcn/ui, and Framer Motion.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

---

## Editing Content

All copy lives in `/data/*.ts`. **No component code needs changing** — just edit the data files.

| File | What it controls |
|------|-----------------|
| `data/site.ts` | Site name, description, URL, keywords |
| `data/navbar.ts` | Nav links, CTA button text/link |
| `data/hero.ts` | Headline, subheadline, CTAs, screenshot paths |
| `data/features.ts` | Feature cards (6) + How It Works steps (3) |
| `data/pricing.ts` | Pricing tiers, features list per tier |
| `data/faq.ts` | FAQ questions and answers |
| `data/cta.ts` | Download/waitlist section copy and links |
| `data/footer.ts` | Footer columns, links, tagline |

Each file is TypeScript with full type definitions — hover over properties to see what's expected.

---

## Dropping In App Screenshots

Screenshots are served from `/public/data/images/`. Reference paths in the data files use `/data/images/...`.

**To add a screenshot:**

1. Drop your image into `/public/data/images/`
2. Name it `app-screenshot-1.png` (or update the path in `data/hero.ts`)

```
public/
  data/
    images/
      app-screenshot-1.png   ← drop it here
      app-screenshot-2.png
```

The `PhoneMockup` component shows a styled placeholder until the image loads. Once you add the real screenshot, it automatically appears.

**Hero screenshot path** is set in `data/hero.ts`:

```ts
screenshots: [
  '/data/images/app-screenshot-1.png',  // ← change filename here
  '/data/images/app-screenshot-2.png',
],
```

---

## Colors

Both light and dark mode use the Budqo brand palette defined in `src/app/globals.css`:

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--background` | `#F5F2EC` (warm linen) | `#0A0F0A` | Page background |
| `--primary` | `#2A5E45` (forest green) | `#4ADE80` (lime) | CTAs, active states |
| `--brand` | `#1B3A2D` | `#0F2A1A` | Hero card bg |
| `--ink` | `#141A14` | `#F0EDE7` | Body text |

To change colors, edit the `:root` and `.dark` blocks in `src/app/globals.css`.

---

## Fonts

- **Headings:** General Sans — loaded from [Fontshare](https://api.fontshare.com) CDN
- **Body:** Manrope — loaded via `next/font/google` (self-hosted by Next.js)
- **Numbers/stats:** Plus Jakarta Sans — loaded via `next/font/google`

To self-host General Sans instead of using the CDN, download the font files from Fontshare, place them in `public/fonts/`, and switch to `next/font/local` in `src/app/layout.tsx`.

---

## Sections

| Component | Section |
|-----------|---------|
| `src/components/Navbar.tsx` | Fixed top navbar with mobile menu |
| `src/components/Hero.tsx` | Hero + phone mockup + floating stats |
| `src/components/PhoneMockup.tsx` | Phone frame (swap screenshot in `/public/data/images/`) |
| `src/components/Features.tsx` | Feature grid + How It Works steps |
| `src/components/Pricing.tsx` | Pricing cards with monthly/annual toggle |
| `src/components/FAQ.tsx` | Accordion FAQ |
| `src/components/DownloadCTA.tsx` | App store CTA / waitlist section |
| `src/components/Footer.tsx` | Footer with nav columns + built-by link |

---

## Credits

Built by [CodeSculpt Solutions](https://codesculptsolutions.com/).
