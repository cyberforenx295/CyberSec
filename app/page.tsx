import { Hero } from '@/components/Hero';
import { ServiceCards } from '@/components/ServiceCards';
import { TrustedBy } from '@/components/TrustedBy';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <TrustedBy />
    </>
  );
}