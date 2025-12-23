import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollReveal } from "@/hooks/use-scroll-animation";
import { Helmet } from "react-helmet";
import {
  Plane,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  ArrowRight,
  Menu,
  X,
  Zap,
  Shield,
  Globe,
  Star,
  Check,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Planning",
      description: "Smart algorithms craft your perfect itinerary in seconds.",
      gradient: "from-primary to-sky",
    },
    {
      icon: Users,
      title: "Group Coordination",
      description: "Seamlessly manage everyone's preferences and budgets.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: DollarSign,
      title: "Smart Budgeting",
      description: "Transparent breakdowns that keep everyone happy.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: MapPin,
      title: "Personalized Routes",
      description: "Custom itineraries tailored to your travel style.",
      gradient: "from-sky to-primary",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security for your travel data.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Plan trips anywhere with local insights.",
      gradient: "from-secondary to-sky",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Share Your Vision",
      description: "Tell our AI about your dream destination and preferences.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "AI Creates Your Plan",
      description: "Get a personalized itinerary crafted just for you.",
      icon: Calendar,
    },
    {
      num: "03",
      title: "Collaborate & Refine",
      description: "Invite friends, vote on options, adjust in real-time.",
      icon: Users,
    },
    {
      num: "04",
      title: "Book & Explore",
      description: "Everything organized—now go make memories.",
      icon: Plane,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Adventure Traveler",
      content: "Planning our Europe trip was effortless. The AI nailed everyone's preferences!",
      avatar: "SC",
    },
    {
      name: "Michael R.",
      role: "Digital Nomad",
      content: "Saved me hours of research. The itinerary was perfectly balanced.",
      avatar: "MR",
    },
    {
      name: "Priya Sharma",
      role: "Family Planner",
      content: "Coordinating our family reunion was so simple and actually fun!",
      avatar: "PS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>TravelAI - AI-Powered Group Trip Planning</title>
        <meta
          name="description"
          content="Plan group trips effortlessly with AI. Handle different budgets, preferences, and schedules automatically."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xl border-b border-border/50 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">TravelAI</span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </a>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />
                <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
                <Button size="sm" onClick={() => navigate("/auth")} className="gradient-primary shadow-lg">
                  Get Started
                </Button>
              </div>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pt-4 pb-6 space-y-3 animate-fade-in">
                <a href="#features" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Features
                </a>
                <a href="#how-it-works" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  How It Works
                </a>
                <a href="#testimonials" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Reviews
                </a>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <ThemeToggle />
                  <Button variant="outline" size="sm" onClick={() => navigate("/auth")} className="flex-1">
                    Sign In
                  </Button>
                  <Button size="sm" onClick={() => navigate("/auth")} className="flex-1 gradient-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 gradient-hero overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-bl from-secondary/15 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong shadow-md mb-8 animate-scale-in"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI-Powered Trip Planning</span>
              </div>
              
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up"
                style={{ animationDelay: '0.1s' }}
              >
                Plan trips that{" "}
                <span className="text-gradient">everyone</span>{" "}
                loves
              </h1>
              
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                Stop arguing about budgets and schedules. Let AI create the perfect itinerary 
                that makes every traveler happy.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")} 
                  className="gradient-primary text-base px-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start Planning Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Demo
                </Button>
              </div>

              {/* Compact trust bar */}
              <div 
                className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  Free to start
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  120+ countries
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything you need
              </h2>
              <p className="text-muted-foreground text-lg">
                Powerful features that make group travel planning actually enjoyable.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-md`}>
                        <feature.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 gradient-mesh">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How it works
              </h2>
              <p className="text-muted-foreground text-lg">
                From idea to adventure in four simple steps.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-primary text-xs font-bold text-primary-foreground flex items-center justify-center shadow-md">
                        {step.num.slice(-1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Loved by travelers
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands who've discovered stress-free group planning.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary-foreground">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-3xl mx-auto">
              <Card className="border-0 overflow-hidden shadow-2xl">
                <div className="gradient-primary p-px rounded-xl">
                  <div className="bg-card rounded-xl p-10 md:p-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Ready for your next adventure?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                      Join travelers using AI to create unforgettable group trips. 
                      Start planning for free today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button 
                        size="lg" 
                        onClick={() => navigate("/auth")} 
                        className="gradient-primary text-base px-8 shadow-lg"
                      >
                        Start Planning Free
                        <Sparkles className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground">
                      Free forever · No credit card required
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Plane className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">TravelAI</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                © 2024 TravelAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
