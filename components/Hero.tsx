import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 text-center md:py-28 md:px-6">
          <p className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            CyberForenX — Your Shield Against Cyber Threats
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-neutral-50 md:text-6xl">
            Securing the Digital World, One Threat at a Time
          </h1>
          <p className="text-balance max-w-2xl text-neutral-300 md:text-lg">
            Experts in Cyber Crime Investigation, Penetration Testing, Threat Intelligence,
            Incident Response, and Digital Forensics.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Ambient light blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
      />
    </section>
  );
}