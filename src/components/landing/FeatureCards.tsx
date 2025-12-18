import { MessageSquare, Users, RefreshCw, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Lazy Chat",
    description: "Just tell us where and how much. We handle the rest.",
    color: "teal",
  },
  {
    icon: Users,
    title: "Group Compromise",
    description: "We solve budget conflicts and find the sweet spot for everyone.",
    color: "sky",
  },
  {
    icon: RefreshCw,
    title: "Live Rebalancing",
    description: "Auto-adjusts for price spikes and keeps you on budget.",
    color: "teal",
  },
  {
    icon: Sparkles,
    title: "Personality AI",
    description: "Plans tailored for Foodies, Adventurers, Culture Buffs & more.",
    color: "sky",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Groups Love Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planning a trip with friends shouldn't feel like herding cats. We've got the tools to make it smooth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group bg-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === "teal" ? "bg-teal-light" : "bg-sky-light"
                  }`}
                >
                  <feature.icon 
                    className={`w-7 h-7 ${
                      feature.color === "teal" ? "text-teal" : "text-sky"
                    }`} 
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
