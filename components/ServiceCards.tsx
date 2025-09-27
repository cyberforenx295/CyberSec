import Link from 'next/link';

const services = [
  {
    title: 'Cyber Crime Investigation',
    description:
      'End-to-end digital investigations, evidence preservation, OSINT, and expert reporting for legal processes.',
    href: '/services#investigation'
  },
  {
    title: 'Penetration Testing',
    description:
      'Web, mobile, network, and cloud pentests with exploit proof-of-concepts and prioritized remediation.',
    href: '/services#pentest'
  },
  {
    title: 'Threat Intelligence',
    description:
      'Continuous monitoring, dark web intel, malware analysis, and threat hunting tailored to your sector.',
    href: '/services#intelligence'
  }
];

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Services Built for Real-World Threats
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-300">
        We combine offensive and defensive expertise to help you prevent, detect, and respond
        to cyber attacks.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="card-glass block p-6 transition hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25)]">
            <h3 className="mb-2 text-xl font-semibold text-neutral-100">{s.title}</h3>
            <p className="text-sm text-neutral-300">{s.description}</p>
            <div className="mt-4 text-emerald-300">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}