import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TravelAI</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 TravelAI. Making group trips effortless.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
