import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/lovable-uploads/297668f2-70d6-4fd2-83da-5cbd14b2153f.png')",
            filter: "brightness(0.7)"
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/70 to-background/80" />
      </div>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 bg-[url('/glitch-pattern.png')] opacity-5 mix-blend-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
          OpenMovies AI
        </h1>
        <p className="font-sans text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Create the Future of Cinema with AI
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-foreground px-8 py-6 text-lg font-heading animate-glow hover:scale-105 transition-transform duration-300"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
};