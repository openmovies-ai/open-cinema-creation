import { Sparkles, Code2, Coins } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "AI-Powered Creation",
    description: "Transform your ideas into stunning visuals with state-of-the-art AI technology",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Open Source",
    description: "Join a thriving community of creators and developers building the future of film",
  },
  {
    icon: <Coins className="w-8 h-8 text-primary" />,
    title: "NFT Integration",
    description: "Monetize your creations through Web3 technology and NFT marketplaces",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          The Future of Filmmaking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};