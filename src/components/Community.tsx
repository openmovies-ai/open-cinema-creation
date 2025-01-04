import { Users, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Community = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Connect With Creators
          </h2>
          <p className="text-lg mb-8 text-foreground/80">
            Join a thriving community of filmmakers, developers, and AI enthusiasts shaping the future of cinema
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline"
              className="bg-background/50 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              onClick={() => window.open('https://github.com/openmovies-ai', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              className="bg-background/50 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              onClick={() => window.open('https://twitter.com/openmoviesai', '_blank')}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline"
              className="bg-background/50 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              onClick={() => window.open('https://discord.gg/openmoviesai', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};