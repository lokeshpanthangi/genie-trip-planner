import { MessageSquare, Users, Zap, Route, ArrowRight } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat-Based Planning",
    description: "Simply describe your dream trip in natural language. Our AI understands context, preferences, and creates magic.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Users,
    title: "Group Harmony",
    description: "Automatically balances everyone's budget, dietary needs, and activity preferences. No more endless debates.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Route,
    title: "Smart Itineraries",
    description: "Optimized routes, perfect timing, and hidden gems. Get day-by-day plans that actually make sense.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get a complete travel plan in seconds, not hours. Real-time updates as your group refines preferences.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm font-medium text-violet-600 dark:text-violet-400 mb-4">
            <Zap className="w-4 h-4" />
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to plan the{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">perfect trip</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful AI features that make group travel planning actually enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-background to-muted/30 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-foreground`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
