import { MapPin, Wallet, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LiveSummaryProps {
  destination: string | null;
  budget: string | null;
  travelers: number | null;
  dates: string | null;
}

const LiveSummary = ({ destination, budget, travelers, dates }: LiveSummaryProps) => {
  const items = [
    { icon: MapPin, label: "Destination", value: destination, color: "text-teal" },
    { icon: Wallet, label: "Budget", value: budget, color: "text-sky" },
    { icon: Users, label: "Travelers", value: travelers ? `${travelers} people` : null, color: "text-teal" },
    { icon: Calendar, label: "Dates", value: dates, color: "text-sky" },
  ];

  return (
    <Card className="bg-card border-2 border-teal/20 shadow-soft rounded-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Live Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground">
                {item.value || <span className="text-muted-foreground italic">[Pending]</span>}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LiveSummary;
