import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";
import {
  Plane,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Zap,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  Heart,
  Star,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Planning",
      description: "Let AI handle the complex logistics while you focus on the excitement of your upcoming adventure.",
    },
    {
      icon: Users,
      title: "Group Coordination",
      description: "Manage different budgets, preferences, and schedules seamlessly for groups of any size.",
    },
    {
      icon: DollarSign,
      title: "Smart Budgeting",
      description: "Get transparent cost breakdowns and optimize spending across transportation, stays, and activities.",
    },
    {
      icon: MapPin,
      title: "Personalized Routes",
      description: "Discover hidden gems and create custom itineraries tailored to your interests and pace.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your travel data is encrypted and protected with enterprise-grade security.",
    },
    {
      icon: Globe,
      title: "Global Destinations",
      description: "Plan trips anywhere in the world with local insights and real-time recommendations.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Share Your Vision",
      description: "Tell us where you want to go, your budget, and travel dates through our conversational AI.",
      icon: Sparkles,
    },
    {
      step: "02",
      title: "AI Creates Your Plan",
      description: "Our intelligent system crafts a personalized itinerary with accommodations, activities, and routes.",
      icon: Calendar,
    },
    {
      step: "03",
      title: "Collaborate & Refine",
      description: "Invite your travel buddies, vote on options, and adjust plans together in real-time.",
      icon: Users,
    },
    {
      step: "04",
      title: "Book & Explore",
      description: "Get everything organized in one place and embark on your perfectly planned adventure.",
      icon: Plane,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Adventure Traveler",
      content: "TravelAI made planning our 12-person Europe trip effortless. Everyone's preferences were considered, and we stayed under budget!",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Digital Nomad",
      content: "The best travel planning tool I've used. It saved me hours of research and gave me a perfectly balanced itinerary.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Priya Sharma",
      role: "Family Vacation Planner",
      content: "Coordinating dates and budgets for our family reunion was always stressful. TravelAI made it so simple and fun!",
      rating: 5,
      avatar: "PS",
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Travelers" },
    { value: "120+", label: "Countries Covered" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "AI Support" },
  ];

  return (
    <>
      <Helmet>
        <title>TravelAI - The Travel Agent That Negotiates With Your Friends</title>
        <meta
          name="description"
          content="Plan group trips effortlessly with AI. Handle different budgets, preferences, and schedules automatically."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">TravelAI</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />
                <Button variant="ghost" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
                <Button onClick={() => navigate("/auth")} className="gradient-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden pt-4 pb-6 space-y-4 animate-fade-in">
                <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                  Features
                </a>
                <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                  How It Works
                </a>
                <a href="#testimonials" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                  Testimonials
                </a>
                <a href="#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <ThemeToggle />
                  <Button variant="ghost" onClick={() => navigate("/auth")} className="flex-1">
                    Sign In
                  </Button>
                  <Button onClick={() => navigate("/auth")} className="flex-1">
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-2" variant="secondary">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Trip Planning
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Plan Group Trips That
                <span className="text-gradient block mt-2">Everyone Will Love</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Stop arguing about budgets and schedules. Let our AI negotiate the perfect itinerary 
                that makes every traveler happy — from backpackers to luxury seekers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button size="lg" onClick={() => navigate("/auth")} className="gradient-primary text-lg px-8">
                  Start Planning Free
                  <Plane className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4" variant="outline">
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Everything You Need for Perfect Trips
              </h2>
              <p className="text-lg text-muted-foreground">
                Powerful features designed to make group travel planning simple, fun, and stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4" variant="outline">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Four Simple Steps to Your Dream Trip
              </h2>
              <p className="text-lg text-muted-foreground">
                From idea to adventure in minutes, not weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 w-full">
                      <ArrowRight className="w-6 h-6 text-primary/30 absolute -right-12" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4" variant="outline">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Loved by Travelers Worldwide
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of happy travelers who've discovered stress-free group planning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-sky p-1">
                <div className="bg-card p-12 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Ready to Plan Your Next Adventure?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of travelers using AI to create perfect group trips. 
                    Start planning for free — no credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" onClick={() => navigate("/auth")} className="gradient-primary text-lg px-8">
                      Start Planning Free
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Free forever • No credit card required
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Plane className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold text-foreground">TravelAI</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Making group travel planning effortless with the power of AI.
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 TravelAI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
