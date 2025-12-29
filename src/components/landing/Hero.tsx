import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, MapPin, Calendar, Wallet, Play, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { value: "50K+", label: "Trips Planned" },
    { value: "120+", label: "Countries" },
    { value: "4.9", label: "User Rating" },
    { value: "2M+", label: "Happy Travelers" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-violet-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-amber-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-foreground">AI-Powered Trip Planning</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Plan trips that
            <span className="relative mx-3">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                everyone
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#hero-underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="hero-underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#10b981" />
                    <stop offset="0.5" stopColor="#14b8a6" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            actually agrees on
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Stop the endless group chats. Our AI handles budgets, preferences, and schedules—so you can focus on making memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="h-14 px-8 text-base bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"
            >
              Start Planning Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base group border-border/50 hover:bg-muted/50"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="hidden lg:block absolute top-1/3 left-10 animate-float">
          <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">Destination Found</p>
                <p className="text-xs text-muted-foreground">Bali, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">7 Days Planned</p>
                <p className="text-xs text-muted-foreground">Aug 15 - 22, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-1/4 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">Budget Optimized</p>
                <p className="text-xs text-muted-foreground">$2,400 / person</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
