import { Button } from "@/components/ui/button";
import { MapPin, Plane, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Theme Toggle in Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract map lines */}
        <svg className="absolute top-20 left-10 w-64 h-64 opacity-10" viewBox="0 0 200 200">
          <path
            d="M10,50 Q50,10 100,50 T190,50"
            fill="none"
            stroke="hsl(174 60% 40%)"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          <path
            d="M10,100 Q80,60 150,100 T190,100"
            fill="none"
            stroke="hsl(200 80% 55%)"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          <path
            d="M10,150 Q60,120 120,150 T190,150"
            fill="none"
            stroke="hsl(174 60% 40%)"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
        </svg>

        <svg className="absolute bottom-20 right-10 w-80 h-80 opacity-10" viewBox="0 0 200 200">
          <circle cx="50" cy="50" r="3" fill="hsl(174 60% 40%)" />
          <circle cx="150" cy="80" r="3" fill="hsl(200 80% 55%)" />
          <circle cx="100" cy="150" r="3" fill="hsl(174 60% 40%)" />
          <path
            d="M50,50 L150,80 L100,150 Z"
            fill="none"
            stroke="hsl(174 60% 40%)"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        </svg>

        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: "0s" }}>
          <div className="w-12 h-12 rounded-2xl bg-teal-light flex items-center justify-center">
            <Plane className="w-6 h-6 text-teal" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-10 h-10 rounded-xl bg-sky-light flex items-center justify-center">
            <MapPin className="w-5 h-5 text-sky" />
          </div>
        </div>
        <div className="absolute top-1/3 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
          <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-teal" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light text-teal text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Travel Planning
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            The Travel Agent That{" "}
            <span className="text-gradient">Negotiates</span>{" "}
            With Your Friends
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Plan group trips effortlessly. Our AI handles the chaos of different budgets, 
            preferences, and schedules — so you can focus on making memories.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => navigate("/auth")}
            className="animate-pulse-glow"
          >
            Start Planning
            <Plane className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
