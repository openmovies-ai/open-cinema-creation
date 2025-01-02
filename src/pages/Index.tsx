import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Waitlist } from "@/components/Waitlist";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Waitlist />
    </div>
  );
};

export default Index;