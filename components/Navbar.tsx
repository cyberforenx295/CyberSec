'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-500" />
          <span className="text-lg font-bold tracking-tight">CyberForenX</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition hover:text-emerald-300 ${
                pathname === l.href ? 'text-emerald-400' : 'text-neutral-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Get Started
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="h-5 w-6 space-y-1.5">
            <span className="block h-0.5 w-full bg-neutral-200"></span>
            <span className="block h-0.5 w-full bg-neutral-200"></span>
            <span className="block h-0.5 w-full bg-neutral-200"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 md:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  pathname === l.href ? 'bg-emerald-500/10 text-emerald-300' : 'text-neutral-300 hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}