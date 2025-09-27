import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CyberForenX — Securing the Digital World',
  description:
    'CyberForenX provides Cyber Crime Investigation, Penetration Testing, Threat Intelligence, Incident Response, and Digital Forensics.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black text-neutral-100">
      <body className="min-h-screen antialiased">
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_50%)]"
        />
      </body>
    </html>
  );
}