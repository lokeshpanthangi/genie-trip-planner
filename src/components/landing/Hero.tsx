import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Compass, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero noise-overlay">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl animate-float"
          style={{ background: 'linear-gradient(135deg, hsl(165 80% 70%), hsl(200 80% 70%))' }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl animate-float-delayed"
          style={{ background: 'linear-gradient(135deg, hsl(260 70% 75%), hsl(35 90% 75%))' }}
        />
        
        {/* Floating icons */}
        <div className="absolute top-[20%] right-[15%] animate-float" style={{ animationDelay: "0s" }}>
          <div className="w-16 h-16 rounded-2xl glass-strong shadow-lg flex items-center justify-center">
            <Globe className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-[30%] left-[10%] animate-float-delayed" style={{ animationDelay: "1s" }}>
          <div className="w-14 h-14 rounded-xl glass-strong shadow-lg flex items-center justify-center">
            <Compass className="w-7 h-7 text-secondary" />
          </div>
        </div>
        <div className="absolute top-[40%] left-[20%] animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-12 h-12 rounded-lg glass-strong shadow-lg flex items-center justify-center">
            <Map className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong shadow-md mb-8 animate-scale-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Trip Planning</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Plan trips that{" "}
            <span className="text-gradient">everyone</span>{" "}
            actually agrees on
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.35s' }}
          >
            Our AI handles the chaos of budgets, preferences, and schedules. You focus on making memories.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/planner")}
              className="animate-pulse-glow group"
            >
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust indicator */}
          <p 
            className="mt-12 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            Trusted by travelers planning trips to 50+ destinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
