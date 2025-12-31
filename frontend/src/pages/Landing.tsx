import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";
import {
  Plane,
  Sparkles,
  MapPin,
  Users,
  Wallet,
  ArrowRight,
  MessageSquare,
  Route,
  Star,
  ChevronRight,
  Play,
  Zap,
  Heart,
  Clock,
  Globe2,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      icon: Wallet,
      title: "Budget Tracking",
      description: "Real-time cost breakdowns, split expenses fairly, and never go over budget again.",
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500/10",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Tell Us Your Dream",
      description: "Share your destination, dates, and what matters most to your group.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "AI Works Its Magic",
      description: "Our AI creates a personalized itinerary balancing everyone's preferences.",
      icon: Zap,
    },
    {
      num: "03",
      title: "Refine Together",
      description: "Collaborate in real-time, vote on activities, and perfect your plan.",
      icon: Users,
    },
    {
      num: "04",
      title: "Travel & Enjoy",
      description: "Hit the road with a perfectly organized trip. Make memories, not stress.",
      icon: Plane,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Adventure Traveler",
      content: "We planned a 2-week Europe trip for 6 people with completely different budgets. TravelAI somehow made everyone happy. Absolute game-changer!",
      location: "San Francisco, CA",
    },
    {
      name: "Marcus Johnson",
      role: "Digital Nomad",
      content: "I've tried every travel planning app out there. This is the first one that actually understands what I want. Saved me 10+ hours of research.",
      avatar: "MJ",
      location: "Austin, TX",
    },
    {
      name: "Priya Sharma",
      role: "Family Trip Organizer",
      content: "Coordinating a family reunion across 3 generations seemed impossible. TravelAI found activities everyone loved. Pure magic!",
      avatar: "PS",
      location: "Mumbai, India",
    },
  ];

  const stats = [
    { value: "50K+", label: "Trips Planned" },
    { value: "120+", label: "Countries" },
    { value: "4.9", label: "User Rating" },
    { value: "2M+", label: "Happy Travelers" },
  ];

  return (
    <>
      <Helmet>
        <title>TravelAI - Plan Perfect Group Trips with AI</title>
        <meta
          name="description"
          content="Stop the endless group chats. Let AI create the perfect trip that balances everyone's budget, preferences, and schedules."
        />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Navigation - Modern Liquid Glass Design */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-2" 
            : "py-4"
        }`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className={`relative flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? "bg-background/60 backdrop-blur-2xl border border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20" 
                : "bg-background/30 backdrop-blur-xl border border-white/10 dark:border-white/5"
            }`}>
              {/* Liquid gradient background effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className={`absolute -top-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-50'}`} />
                <div className={`absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-2xl transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-50'}`} />
              </div>

              {/* Logo */}
              <div className="relative flex items-center gap-2.5 group cursor-pointer z-10" onClick={() => navigate("/")}>
                <div className="relative">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-105">
                    <Plane className="w-4 h-4 md:w-5 md:h-5 text-white transform -rotate-45" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  TravelAI
                </span>
              </div>

              {/* Desktop Nav - Center Pills */}
              <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 p-1 rounded-full bg-muted/40 backdrop-blur-sm border border-border/30">
                  {[
                    { name: "Features", href: "#features" },
                    { name: "How It Works", href: "#how-it-works" },
                    { name: "Reviews", href: "#reviews" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-full hover:bg-background/80 hover:shadow-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-2 relative z-10">
                <ThemeToggle />
                <div className="w-px h-6 bg-border/50 mx-1" />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigate("/auth")} 
                  className="text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-full px-4"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => navigate("/auth")} 
                  className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 rounded-full px-5 group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden relative z-10 p-2 rounded-full hover:bg-background/60 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute left-0 w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1'}`} />
                  <span className={`absolute left-0 top-2.5 w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                  <span className={`absolute left-0 w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'}`} />
                </div>
              </button>
            </div>

            {/* Mobile Menu - Glassmorphism Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
            }`}>
              <div className="bg-background/70 backdrop-blur-2xl border border-border/50 rounded-2xl p-4 shadow-xl">
                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {[
                    { name: "Features", href: "#features" },
                    { name: "How It Works", href: "#how-it-works" },
                    { name: "Reviews", href: "#reviews" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="h-px bg-border/50 my-3" />
                
                {/* Actions */}
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigate("/auth")} 
                    className="flex-1 rounded-xl h-10"
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => navigate("/auth")} 
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl h-10 shadow-lg shadow-emerald-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
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
                    <path d="M2 10C50 4 150 4 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up mx-auto" style={{ animationDelay: "0.3s" }}>
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

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-scroll" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 md:py-32 relative">
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
                    <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ WebkitTextStroke: '0.5px currentColor' }} />
                    <feature.icon className={`w-7 h-7 absolute bg-gradient-to-br ${feature.color} [&>*]:stroke-[url(#icon-gradient-${index})]`} />
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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 md:py-32 relative bg-gradient-to-b from-muted/30 to-background">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-600 dark:text-amber-400 mb-4">
                <Clock className="w-4 h-4" />
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                From idea to adventure in{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">4 simple steps</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                No more spreadsheets, endless emails, or compromise. Just smart planning.
              </p>
            </div>

            {/* Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="flex gap-6 p-6 rounded-2xl bg-background border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/25">
                          {step.num}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className="w-5 h-5 text-amber-500" />
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && index !== 1 && (
                      <div className="hidden md:block absolute -bottom-4 left-12 w-0.5 h-8 bg-gradient-to-b from-amber-500/50 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm font-medium text-pink-600 dark:text-pink-400 mb-4">
                <Heart className="w-4 h-4" />
                Reviews
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Loved by travelers{" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">worldwide</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands who've discovered stress-free group planning.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-b from-background to-muted/30 border-2 border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-black/20 min-h-[320px] flex flex-col justify-center">
                {/* Quote Icon */}
                <div className="absolute top-6 left-8">
                  <MessageSquare className="w-10 h-10 text-pink-500 fill-pink-500/20" />
                </div>

                {/* Active Testimonial */}
                <div className="relative z-10 text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed min-h-[96px] flex items-center justify-center">
                    "{testimonials[activeTestimonial].content}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold text-lg">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}</p>
                    </div>
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? "w-8 bg-gradient-to-r from-emerald-500 to-teal-500" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-6">
            <div className="relative max-w-4xl mx-auto">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_60%)] rounded-3xl" />

              {/* Content */}
              <div className="relative z-10 p-10 md:p-16 text-center text-white">
                <Globe2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ready for your next adventure?
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                  Join travelers who use AI to create unforgettable group trips. Start planning your dream journey today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate("/auth")}
                    className="h-14 px-8 text-base bg-white text-emerald-600 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    Start Planning Free
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
                <p className="mt-6 text-sm opacity-75">
                  Free forever • No credit card required • Setup in 2 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white transform -rotate-45" />
                </div>
                <span className="font-bold text-foreground">TravelAI</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                <a href="#" className="hover:text-foreground transition-colors">Blog</a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © 2025 TravelAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
