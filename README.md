# CyberForenX — Website (Next.js + Tailwind + Prisma)

Production-ready starter for a cybersecurity company website with a database-backed contact form and case studies.

## Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS v4
- Prisma ORM (SQLite by default; Postgres-ready)

## Getting Started

1) Install dependencies:

```bash
npm install
```

2) Create your environment file:

```bash
cp .env.example .env
```

By default it uses SQLite at `prisma/dev.db`. To use Postgres, replace `DATABASE_URL` with your Postgres connection string.

3) Initialize the database (generate client + migrate):

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

Optionally open Prisma Studio to view/edit data:

```bash
npm run prisma:studio
```

4) Start the dev server:

```bash
npm run dev
```

Visit http://localhost:3000

## Pages

- `/` Home (Hero, Services Highlights, Trusted By)
- `/about` Company mission, vision, expertise
- `/services` Detailed services with anchors
- `/case-studies` Lists case studies from the database
- `/contact` Contact form (POST /api/contact) persists messages to DB

## Database Schema (Prisma)

- `ContactMessage` — stores contact form submissions
- `CaseStudy` — title, summary, industry, timestamps
- `TeamMember` — basic team profile fields

Schema file: `prisma/schema.prisma`

## Seeding Data (optional)

You can add case studies using Prisma Studio:

```bash
npm run prisma:studio
```

Or write a small seed script that uses `@prisma/client`.

## Deploy

- For SQLite: prefer running a Postgres database in production.
- Set `DATABASE_URL` accordingly (e.g., on Vercel, Railway, Fly.io, Render, etc.).
- Run `prisma migrate deploy` during CI/CD or first boot to apply migrations.

## License

Proprietary © CyberForenX