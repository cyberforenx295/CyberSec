export function TrustedBy() {
  const logos = [
    'VoltSecure',
    'ApexBank',
    'Nimbus Cloud',
    'Orion Health',
    'HelixTel'
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <p className="mb-6 text-center text-sm uppercase tracking-wider text-neutral-400">
        Trusted by security-first teams
      </p>
      <div className="grid grid-cols-2 place-items-center gap-4 text-neutral-400 sm:grid-cols-3 md:grid-cols-5">
        {logos.map((name) => (
          <div
            key={name}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}