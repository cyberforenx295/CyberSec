import prisma from '@/lib/prisma';

export const metadata = {
  title: 'Case Studies — CyberForenX'
};

export default async function CaseStudiesPage() {
  const cases = await prisma.caseStudy.findMany({
    orderBy: { publishedAt: 'desc' },
    take: 12
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Case Studies</h1>
      <p className="mb-8 text-neutral-300">
        Real-world engagements and outcomes. Client identities are anonymized to respect confidentiality.
      </p>

      {cases.length === 0 ? (
        <div className="rounded-lg border border-dashed border-white/15 p-6 text-neutral-400">
          No case studies yet. Add some via Prisma Studio or a seed script.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.id} className="card-glass p-6">
              <div className="mb-2 text-xs uppercase tracking-wider text-emerald-300">
                {c.industry ?? 'General'}
              </div>
              <h2 className="mb-2 text-xl font-semibold">{c.title}</h2>
              <p className="text-sm text-neutral-300">{c.summary}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}