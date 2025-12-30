import { MapPin, Calendar, Hotel, Lightbulb, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

type NavSection = "budget" | "daily-plan" | "hotels" | "tips" | "overview";

interface PlannerNavbarProps {
  activeSection: NavSection;
  onSectionChange: (section: NavSection) => void;
}

const navItems = [
  { id: "budget" as NavSection, label: "Budget & Travel", icon: MapPin },
  { id: "daily-plan" as NavSection, label: "Daily Plan", icon: Calendar },
  { id: "hotels" as NavSection, label: "Hotels", icon: Hotel },
  { id: "tips" as NavSection, label: "Tips", icon: Lightbulb },
  { id: "overview" as NavSection, label: "Overview", icon: ClipboardList },
];

const PlannerNavbar = ({ activeSection, onSectionChange }: PlannerNavbarProps) => {
  return (
    <nav className="bg-card rounded-2xl shadow-soft p-2 mb-6">
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200",
                "hover:scale-[1.02] active:scale-[0.98]",
                isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default PlannerNavbar;
export type { NavSection };
