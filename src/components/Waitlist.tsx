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
      // Open email client with pre-filled details
      window.location.href = `mailto:develop@bixory.ai?subject=Openmovies AI waitlist&body=Please add me to the waitlist. My email is: ${email}`;
      
      toast({
        title: "Thanks for your interest!",
        description: "We have you registered for FREE trial and will keep you updated!",
      });
      setEmail("");
    }
  };

  return (
    <div id="waitlist" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Be Part of the Future
        </h2>
        <p className="font-sans text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Get early access to our AI-powered filmmaking platform and shape the next generation of cinema
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