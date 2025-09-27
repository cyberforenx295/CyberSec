export const metadata = {
  title: '404 — Page not found | CyberForenX'
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
        404 — Not Found
      </div>
      <h1 className="text-3xl font-bold md:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-prose text-neutral-300">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <a href="/" className="btn-primary mt-2">
        Back to Home
      </a>
    </div>
  );
}