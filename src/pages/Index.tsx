import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Community } from "@/components/Community";
import { Waitlist } from "@/components/Waitlist";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Timeline />
      <Community />
      <Waitlist />
    </div>
  );
};

export default Index;