export const metadata = {
  title: 'Services — CyberForenX'
};

const sections = [
  {
    id: 'investigation',
    title: 'Cyber Crime Investigation',
    body:
      'Comprehensive digital investigations: OSINT, on-site triage, chain of custody, evidence analysis, and expert testimony-ready reporting.'
  },
  {
    id: 'pentest',
    title: 'Penetration Testing',
    body:
      'Web, API, mobile, network, and cloud penetration testing with real exploit demonstrations and prioritized remediation guidance.'
  },
  {
    id: 'intelligence',
    title: 'Threat Intelligence & Monitoring',
    body:
      'Continuous monitoring, dark web reconnaissance, and intelligence reporting tailored to your vertical and threat profile.'
  },
  {
    id: 'ir',
    title: 'Incident Response',
    body:
      'Rapid containment and eradication procedures, root cause analysis, and post-incident hardening with playbooks and tabletop exercises.'
  },
  {
    id: 'forensics',
    title: 'Digital Forensics',
    body:
      'Disk, memory, and mobile forensics with artifact reconstruction, timeline analysis, and litigation-grade documentation.'
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Our Services</h1>
      <p className="mb-8 text-neutral-300">
        We deliver pragmatic security outcomes that align with your business risk, culture, and
        regulatory environment.
      </p>

      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="card-glass p-6">
            <h2 className="mb-2 text-xl font-semibold">{s.title}</h2>
            <p className="text-neutral-300">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}