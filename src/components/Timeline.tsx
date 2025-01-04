import { Milestone } from "lucide-react";

const timelineItems = [
  {
    title: "Phase 1: Community Launch",
    description: "Join early adopters and shape the future of AI filmmaking",
  },
  {
    title: "Phase 2: Creator Tools",
    description: "Access powerful AI-driven tools for scene generation and editing",
  },
  {
    title: "Phase 3: NFT Marketplace",
    description: "Monetize your creations through Web3 integration",
  },
];

export const Timeline = () => {
  return (
    <div className="py-20 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Roadmap
        </h2>
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 mb-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Milestone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};