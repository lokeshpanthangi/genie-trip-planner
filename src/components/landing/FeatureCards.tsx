import { MessageSquare, Users, Zap, Sparkles, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat to Plan",
    description: "Just describe your dream trip. Our AI handles the rest.",
    gradient: "from-primary/20 to-teal-light",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Group Harmony",
    description: "Balances everyone's budget and preferences automatically.",
    gradient: "from-secondary/20 to-purple-light",
    iconColor: "text-secondary",
  },
  {
    icon: Zap,
    title: "Instant Itineraries",
    description: "Get a complete day-by-day plan in seconds, not hours.",
    gradient: "from-accent/20 to-orange-light",
    iconColor: "text-accent",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "Personalized picks for foodies, adventurers, and more.",
    gradient: "from-sky/20 to-sky-light",
    iconColor: "text-sky",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-32 px-6 gradient-mesh noise-overlay">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why groups{" "}
            <span className="text-gradient">love</span>
            {" "}us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stop the endless group chats. Let AI find the perfect trip for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative p-8 rounded-3xl glass-strong shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
