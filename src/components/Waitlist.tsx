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
      // Here you would typically integrate with your email service
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setEmail("");
    }
  };

  return (
    <div id="waitlist" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Join the Revolution
        </h2>
        <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Be among the first to experience the future of AI-powered filmmaking
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 border-primary/20 text-foreground"
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-foreground">
            Join Waitlist
          </Button>
        </form>
      </div>
    </div>
  );
};