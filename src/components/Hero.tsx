import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 animate-fade-in" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          OpenMovies AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
          Create the Future of Cinema with AI
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-foreground px-8 py-6 text-lg"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
};