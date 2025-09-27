'use client';

import { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to submit message');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-glass space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-neutral-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-neutral-100 outline-none ring-emerald-500/40 focus:ring"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-neutral-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-neutral-100 outline-none ring-emerald-500/40 focus:ring"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={onChange}
          className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-neutral-100 outline-none ring-emerald-500/40 focus:ring"
          placeholder="Tell us about your challenge..."
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={status === 'loading'}
          className="btn-primary disabled:opacity-60"
          type="submit"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && (
          <span className="text-sm text-emerald-300">Thanks! We&apos;ll be in touch.</span>
        )}
        {status === 'error' && error && (
          <span className="text-sm text-red-400">{error}</span>
        )}
      </div>
    </form>
  );
}