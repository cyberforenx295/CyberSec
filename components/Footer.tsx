import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 text-sm text-neutral-400 md:grid-cols-4 md:px-6">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/166294877?v=4"
              alt="CyberForenX logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            <span className="text-base font-semibold text-neutral-200">
              CyberForenX
            </span>
          </div>
          <p className="max-w-md">
            Securing the digital world with advanced cyber crime investigation,
            penetration testing, and incident response.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-neutral-200">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-emerald-300">About</Link></li>
            <li><Link href="/services" className="hover:text-emerald-300">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-emerald-300">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-neutral-200">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-emerald-300">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-emerald-300">Terms of Service</Link></li>
          </ul>
          <div className="mt-4">
            <p className="mb-2 font-semibold text-neutral-200">Social</p>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-emerald-300">LinkedIn</Link>
              <Link href="#" className="hover:text-emerald-300">GitHub</Link>
              <Link href="#" className="hover:text-emerald-300">X</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} CyberForenX. All rights reserved.
      </div>
    </footer>
  );
}