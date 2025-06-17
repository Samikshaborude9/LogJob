// app/page.tsx
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <Footer />
    </main>
  );
}
