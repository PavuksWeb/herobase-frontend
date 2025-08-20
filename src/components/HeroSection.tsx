import type { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full">
      {/* <div className="absolute inset-0 bg-black opacity-50 z-10"></div> */}

      <main className="relative z-20 gap-4 h-full w-full">{children}</main>
    </div>
  );
}
