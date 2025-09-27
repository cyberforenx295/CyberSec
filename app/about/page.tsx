export const metadata = {
  title: 'About — CyberForenX'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">About CyberForenX</h1>
      <p className="text-neutral-300">
        CyberForenX is a cybersecurity firm specialized in cyber crime investigation, offensive
        security, and incident response. Our team brings hands-on experience from real-world
        engagements across finance, healthcare, telecom, and SaaS.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="card-glass p-6">
          <h3 className="mb-2 text-lg font-semibold">Mission</h3>
          <p className="text-sm text-neutral-300">
            To safeguard organizations by detecting, analyzing, and neutralizing cyber threats with
            precision and integrity.
          </p>
        </div>
        <div className="card-glass p-6">
          <h3 className="mb-2 text-lg font-semibold">Vision</h3>
          <p className="text-sm text-neutral-300">
            A safer digital world where every business can operate without fear of compromise.
          </p>
        </div>
        <div className="card-glass p-6">
          <h3 className="mb-2 text-lg font-semibold">Expertise</h3>
          <p className="text-sm text-neutral-300">
            Cyber/Electronic Ops, Digital Forensics, Penetration Testing, Threat Hunting,
            Malware Analysis, and OSINT-driven investigations.
          </p>
        </div>
      </div>
    </div>
  );
}