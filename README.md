# CyberForenX — Website (Next.js + Tailwind, Static Export)

Production-ready cybersecurity company website designed for static hosting platforms.

## Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS v4
- Static export (no server or database required)

## Getting Started

1) Install dependencies:

```bash
npm install
```

2) Create your environment file:

```bash
cp .env.example .env
```

Contact form configuration (Web3Forms):
- `NEXT_PUBLIC_WEB3FORMS_KEY` — required to enable submissions via https://api.web3forms.com/submit
- `NEXT_PUBLIC_CONTACT_EMAIL` — fallback mailto address (used only if no Web3Forms key is set)

3) Start the dev server:

```bash
npm run dev
```

Visit http://localhost:3000

4) Build a static site:

```bash
npm run build
```

This generates a static site in the `out/` folder (configured via `output: 'export'`).

Deploy the contents of `out/` to any static host (GitHub Pages, Netlify static, Cloudflare Pages static, S3, etc.).

## Pages

- `/` Home (Hero, Services Highlights, Trusted By)
- `/about` Company mission, vision, expertise
- `/services` Detailed services with anchors
- `/case-studies` Static case studies (editable in `data/case-studies.ts`)
- `/contact` Contact form
  - Uses Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is set
  - Otherwise, falls back to opening a mail client (mailto)

## Customization

- Brand colors and global styles: `app/globals.css`
- Navbar/Footer: `components/Navbar.tsx`, `components/Footer.tsx`
- Logo: using a remote image via `next/image`; update the URL or move a logo to `/public/` and reference it
- Case Studies: edit `data/case-studies.ts`

## Deploy

- Run `npm run build` and deploy the generated `out/` directory.
- The project is static-only and does not require a Node server.

## License

Proprietary © CyberForenX