import { MapPin, Plane, Train } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapPlaceholder = () => {
  const route = [
    { name: "Delhi", type: "start" },
    { name: "Leh", type: "flight" },
    { name: "Pangong Lake", type: "drive" },
    { name: "Nubra Valley", type: "drive" },
    { name: "Leh", type: "drive" },
  ];

  return (
    <Card className="bg-card border-0 shadow-soft rounded-2xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MapPin className="w-5 h-5 text-teal" />
          Route Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Map Visual */}
        <div className="relative h-48 bg-gradient-to-br from-teal-light to-sky-light rounded-xl mb-4 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            {/* Mountain silhouettes */}
            <path
              d="M0,180 L80,100 L120,140 L180,60 L220,120 L280,40 L340,100 L400,80 L400,200 L0,200 Z"
              fill="hsl(174 60% 40% / 0.15)"
            />
            <path
              d="M0,200 L50,150 L100,180 L160,120 L200,160 L260,100 L320,140 L400,110 L400,200 L0,200 Z"
              fill="hsl(200 80% 55% / 0.15)"
            />
            
            {/* Route path */}
            <path
              d="M50,150 Q100,100 150,120 T250,80 T350,100"
              fill="none"
              stroke="hsl(174 60% 40%)"
              strokeWidth="3"
              strokeDasharray="8,4"
              className="animate-pulse"
            />
            
            {/* Location markers */}
            <circle cx="50" cy="150" r="8" fill="hsl(174 60% 40%)" />
            <circle cx="150" cy="120" r="6" fill="hsl(200 80% 55%)" />
            <circle cx="250" cy="80" r="6" fill="hsl(200 80% 55%)" />
            <circle cx="350" cy="100" r="6" fill="hsl(174 60% 40%)" />
          </svg>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 text-xs font-medium text-teal bg-card/80 px-2 py-1 rounded">
            Delhi
          </div>
          <div className="absolute top-1/3 left-1/3 text-xs font-medium text-sky bg-card/80 px-2 py-1 rounded">
            Leh
          </div>
          <div className="absolute top-1/4 right-1/3 text-xs font-medium text-sky bg-card/80 px-2 py-1 rounded">
            Pangong
          </div>
        </div>

        {/* Transport Details */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 px-3 py-2 bg-sky-light rounded-lg">
            <Plane className="w-4 h-4 text-sky" />
            <span className="font-medium text-foreground">Delhi → Leh</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-teal-light rounded-lg">
            <Train className="w-4 h-4 text-teal" />
            <span className="font-medium text-foreground">Local Transport</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapPlaceholder;
