import { Sparkles, Code2, Coins } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: "AI-Powered Creation",
    description: "Transform your ideas into stunning visuals with state-of-the-art AI technology",
  },
  {
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    title: "Open Source",
    description: "Join a thriving community of creators and developers building the future of film",
  },
  {
    icon: <Coins className="w-8 h-8 text-secondary" />,
    title: "NFT Integration",
    description: "Monetize your creations through Web3 technology and NFT marketplaces",
  },
];

export const Features = () => {
  return (
    <div className="py-20 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('/glitch-pattern.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          The Future of Filmmaking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background/30 backdrop-blur-md border border-primary/20 
                         hover:border-primary/40 transition-all duration-500 hover:scale-105 
                         hover:shadow-[0_0_30px_rgba(142,45,226,0.2)] group
                         relative overflow-hidden"
            >
              {/* Gradient overlay for cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500 
                              group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-sans text-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};