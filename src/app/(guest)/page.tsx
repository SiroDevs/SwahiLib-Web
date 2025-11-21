import Features from "@/presentation/pages/home/features";
import HeroSection from "@/presentation/pages/home/hero.section";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <Features />
    </div>
  );
};
