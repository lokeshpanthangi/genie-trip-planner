import { Plane, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">TravelAI</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 TravelAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
