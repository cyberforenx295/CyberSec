import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — CyberForenX'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h1>
      <p className="mb-8 text-neutral-300">
        Tell us about your challenge. Our team will get back to you within 24 hours.
      </p>
      <ContactForm />
      <div className="mt-8 rounded-lg border border-white/10 p-6 text-sm text-neutral-300">
        <p className="mb-2 font-semibold text-neutral-200">Head Office</p>
        <p>CyberForenX, Anywhere</p>
        <p className="mt-2">Email: contact@cyberforenx.com</p>
      </div>
    </div>
  );
}