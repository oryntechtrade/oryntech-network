import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StrategyCanvas from "@/components/StrategyCanvas";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <Hero />
      <StrategyCanvas />
      <Features />
    </main>
  );
}
