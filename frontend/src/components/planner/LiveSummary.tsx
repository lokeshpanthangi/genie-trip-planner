import { MapPin, Wallet, Users, Calendar, CheckCircle2, Circle, Navigation } from "lucide-react";

interface LiveSummaryProps {
  destination: string | null;
  budget: string | null;
  travelers: number | null;
  dates: string | null;
  source?: string | null;
  no_of_days?: number | null;
}

const LiveSummary = ({ destination, budget, travelers, dates, source }: LiveSummaryProps) => {
  const items = [
    { icon: MapPin, label: "Destination", value: destination, color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-500/10" },
    { icon: Navigation, label: "From", value: source, color: "from-cyan-500 to-sky-500", bgColor: "bg-cyan-500/10" },
    { icon: Wallet, label: "Budget", value: budget, color: "from-amber-500 to-orange-500", bgColor: "bg-amber-500/10" },
    { icon: Users, label: "Travelers", value: travelers ? `${travelers} people` : null, color: "from-violet-500 to-purple-500", bgColor: "bg-violet-500/10" },
    { icon: Calendar, label: "Dates", value: dates, color: "from-sky-500 to-blue-500", bgColor: "bg-sky-500/10" },
  ];

  const completedCount = items.filter(item => item.value).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="bg-gradient-to-b from-background to-muted/30 border border-border/50 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Trip Summary
          </h3>
          <span className="text-xs text-muted-foreground">{completedCount}/{items.length} completed</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="p-4 space-y-3">
        {items.map((item) => (
          <div 
            key={item.label} 
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
              item.value ? 'bg-muted/30' : 'bg-transparent'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
              <item.icon className={`w-5 h-5 ${item.value ? 'text-foreground' : 'text-muted-foreground'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className={`text-sm font-medium truncate ${item.value ? 'text-foreground' : 'text-muted-foreground italic'}`}>
                {item.value || "Waiting..."}
              </p>
            </div>
            {item.value ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground/30 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSummary;
