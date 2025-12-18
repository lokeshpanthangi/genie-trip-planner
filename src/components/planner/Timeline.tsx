import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const itinerary = [
  {
    day: 1,
    title: "Arrival & Acclimatization",
    activities: ["Land at Leh Airport", "Rest at hotel", "Evening walk at Leh Market"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
  },
  {
    day: 2,
    title: "Monastery Trail",
    activities: ["Hemis Monastery", "Thiksey Monastery", "Shey Palace"],
    tags: [{ label: "Spiritual", type: "spiritual" }],
  },
  {
    day: 3,
    title: "Pangong Lake Adventure",
    activities: ["Drive to Pangong Lake", "Camping under stars", "Photography session"],
    tags: [{ label: "Adventure", type: "adventure" }],
  },
  {
    day: 4,
    title: "Nubra Valley Expedition",
    activities: ["Khardung La Pass", "Camel Safari at Hunder", "River Rafting"],
    tags: [{ label: "Adventure", type: "adventure" }],
  },
  {
    day: 5,
    title: "Departure",
    activities: ["Local shopping", "Flight back to Delhi"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
  },
];

const Timeline = () => {
  return (
    <Card className="bg-card border-0 shadow-soft rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-teal" />
          Compromise Itinerary
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Balanced for adventure seekers & culture lovers
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-sky to-teal" />

          <div className="space-y-4">
            {itinerary.map((day, index) => (
              <div key={day.day} className="relative pl-10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Day marker */}
                <div className={`absolute left-2 w-5 h-5 rounded-full border-2 bg-card ${
                  day.tags[0].type === "adventure" ? "border-teal" : "border-sky"
                }`} />

                <div className={`p-3 rounded-xl ${
                  day.tags[0].type === "adventure" ? "bg-teal-light/50" : "bg-sky-light/50"
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Day {day.day}
                    </span>
                    <div className="flex gap-1">
                      {day.tags.map((tag) => (
                        <Badge
                          key={tag.label}
                          variant="secondary"
                          className={`text-xs ${
                            tag.type === "adventure"
                              ? "bg-teal text-primary-foreground"
                              : "bg-sky text-accent-foreground"
                          }`}
                        >
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {day.title}
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {day.activities.map((activity) => (
                      <li key={activity}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;
