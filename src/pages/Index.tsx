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
      <Community />
      <Timeline />
      <Waitlist />
      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OpenMovies AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;