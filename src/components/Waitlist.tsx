import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setEmail("");
    }
  };

  return (
    <div id="waitlist" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/glitch-pattern.png')] opacity-[0.02] mix-blend-overlay" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Join the Revolution
        </h2>
        <p className="font-sans text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Be among the first to experience the future of AI-powered filmmaking
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 border-primary/20 text-foreground focus:border-secondary/50 transition-colors backdrop-blur-sm"
            required
          />
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading animate-glow hover:scale-105 transition-transform duration-300"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </div>
  );
};