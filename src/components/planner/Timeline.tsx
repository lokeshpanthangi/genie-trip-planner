import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, ChevronDown, Clock, IndianRupee, CloudRain, Sun, Wind, Utensils, MapPin } from "lucide-react";

interface DayDetail {
  day: number;
  title: string;
  activities: string[];
  tags: { label: string; type: "spiritual" | "adventure" }[];
  timings: { time: string; activity: string }[];
  expenses: { item: string; cost: string }[];
  weather: {
    temp: string;
    condition: string;
    icon: "sun" | "cloud" | "rain";
  };
  dining: {
    restaurant: string;
    location: string;
    dishes: string[];
    timing: string;
    avgCost: string;
  }[];
}

const itinerary: DayDetail[] = [
  {
    day: 1,
    title: "Arrival & Acclimatization",
    activities: ["Land at Leh Airport", "Rest at hotel", "Evening walk at Leh Market"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
    timings: [
      { time: "7:30 AM", activity: "Arrive at Leh Airport" },
      { time: "8:00 AM", activity: "Check-in at hotel" },
      { time: "9:00 AM - 3:00 PM", activity: "Rest & acclimatize (Important!)" },
      { time: "5:00 PM", activity: "Evening walk at Leh Market" },
      { time: "7:00 PM", activity: "Dinner at Bon Appetit" },
    ],
    expenses: [
      { item: "Flight (Delhi-Leh)", cost: "₹8,000" },
      { item: "Airport taxi", cost: "₹500" },
      { item: "Meals", cost: "₹800" },
    ],
    weather: {
      temp: "15-25°C",
      condition: "Sunny & Clear",
      icon: "sun",
    },
    dining: [
      {
        restaurant: "Bon Appetit",
        location: "Fort Road, Leh",
        dishes: ["Continental Breakfast", "Fresh Pastries", "Coffee"],
        timing: "8:00 AM - 9:00 AM",
        avgCost: "₹300/person",
      },
      {
        restaurant: "The Tibetan Kitchen",
        location: "Main Bazaar, Leh",
        dishes: ["Momos", "Thukpa", "Butter Tea"],
        timing: "7:00 PM - 8:30 PM",
        avgCost: "₹500/person",
      },
    ],
  },
  {
    day: 2,
    title: "Monastery Trail",
    activities: ["Hemis Monastery", "Thiksey Monastery", "Shey Palace"],
    tags: [{ label: "Spiritual", type: "spiritual" }],
    timings: [
      { time: "8:00 AM", activity: "Breakfast at hotel" },
      { time: "9:00 AM", activity: "Visit Hemis Monastery" },
      { time: "11:00 AM", activity: "Thiksey Monastery" },
      { time: "1:00 PM", activity: "Lunch at Gesmo Restaurant" },
      { time: "2:30 PM", activity: "Shey Palace exploration" },
      { time: "5:00 PM", activity: "Return to Leh" },
    ],
    expenses: [
      { item: "Private car rental", cost: "₹2,400" },
      { item: "Monastery entry fees", cost: "₹80" },
      { item: "Meals", cost: "₹1,000" },
    ],
    weather: {
      temp: "12-22°C",
      condition: "Partly Cloudy",
      icon: "cloud",
    },
    dining: [
      {
        restaurant: "Gesmo Restaurant",
        location: "Changspa Road, Leh",
        dishes: ["Pasta Alfredo", "Wood-fired Pizza", "Fresh Juice"],
        timing: "1:00 PM - 2:00 PM",
        avgCost: "₹700/person",
      },
      {
        restaurant: "Pumpernickel German Bakery",
        location: "Changspa, Leh",
        dishes: ["German Bread", "Apple Strudel", "Cappuccino"],
        timing: "6:00 PM - 7:00 PM",
        avgCost: "₹400/person",
      },
    ],
  },
  {
    day: 3,
    title: "Pangong Lake Adventure",
    activities: ["Drive to Pangong Lake", "Camping under stars", "Photography session"],
    tags: [{ label: "Adventure", type: "adventure" }],
    timings: [
      { time: "6:00 AM", activity: "Early departure from Leh" },
      { time: "11:00 AM", activity: "Reach Pangong Lake" },
      { time: "12:00 PM - 4:00 PM", activity: "Lake exploration & photography" },
      { time: "7:00 PM", activity: "Campfire & dinner at campsite" },
      { time: "9:00 PM", activity: "Stargazing session" },
    ],
    expenses: [
      { item: "Transportation", cost: "₹3,500" },
      { item: "Pangong permit", cost: "₹400" },
      { item: "Camping & meals", cost: "₹2,000" },
    ],
    weather: {
      temp: "8-18°C",
      condition: "Cool & Windy",
      icon: "cloud",
    },
    dining: [
      {
        restaurant: "Pangong Campsite Kitchen",
        location: "Pangong Lake",
        dishes: ["Maggi", "Paratha with Curry", "Hot Tea", "Camp BBQ"],
        timing: "7:00 PM - 9:00 PM",
        avgCost: "₹600/person",
      },
    ],
  },
  {
    day: 4,
    title: "Nubra Valley Expedition",
    activities: ["Khardung La Pass", "Camel Safari at Hunder", "River Rafting"],
    tags: [{ label: "Adventure", type: "adventure" }],
    timings: [
      { time: "7:00 AM", activity: "Departure to Nubra Valley" },
      { time: "10:00 AM", activity: "Cross Khardung La (18,380 ft)" },
      { time: "12:00 PM", activity: "Reach Nubra Valley" },
      { time: "2:00 PM", activity: "Camel safari at Hunder sand dunes" },
      { time: "5:00 PM", activity: "Visit Diskit Monastery" },
    ],
    expenses: [
      { item: "Transportation", cost: "₹3,800" },
      { item: "Nubra permit", cost: "₹400" },
      { item: "Camel safari", cost: "₹300" },
      { item: "Meals & accommodation", cost: "₹2,500" },
    ],
    weather: {
      temp: "10-28°C",
      condition: "Sunny & Dry",
      icon: "sun",
    },
    dining: [
      {
        restaurant: "Summer Harvest",
        location: "Nubra Valley",
        dishes: ["Skyu (Traditional Ladakhi)", "Butter Tea", "Tingmo"],
        timing: "1:00 PM - 2:00 PM",
        avgCost: "₹500/person",
      },
      {
        restaurant: "Nubra Organic Retreat",
        location: "Hunder, Nubra",
        dishes: ["Local Apricot Dishes", "Grilled Chicken", "Organic Salad"],
        timing: "7:00 PM - 8:30 PM",
        avgCost: "₹800/person",
      },
    ],
  },
  {
    day: 5,
    title: "Departure",
    activities: ["Local shopping", "Flight back to Delhi"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
    timings: [
      { time: "8:00 AM", activity: "Breakfast at hotel" },
      { time: "10:00 AM", activity: "Last-minute shopping at Leh Market" },
      { time: "2:00 PM", activity: "Lunch at Bon Appetit" },
      { time: "4:00 PM", activity: "Airport departure" },
      { time: "6:00 PM", activity: "Flight to Delhi" },
    ],
    expenses: [
      { item: "Shopping", cost: "₹2,000" },
      { item: "Airport taxi", cost: "₹500" },
      { item: "Flight (Leh-Delhi)", cost: "₹8,200" },
    ],
    weather: {
      temp: "15-25°C",
      condition: "Clear Skies",
      icon: "sun",
    },
    dining: [
      {
        restaurant: "Bon Appetit",
        location: "Fort Road, Leh",
        dishes: ["Farewell Lunch Special", "Pizza", "Fresh Juice"],
        timing: "2:00 PM - 3:30 PM",
        avgCost: "₹800/person",
      },
    ],
  },
];

const Timeline = () => {
  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="w-4 h-4 text-orange-500" />;
      case "rain":
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      default:
        return <Wind className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Card className="bg-card border-0 shadow-soft rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-teal" />
          Daily Itinerary
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Click on any day to see detailed breakdown
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-sky to-teal" />

          <div className="space-y-4">
            {itinerary.map((day, index) => (
              <Collapsible
                key={day.day}
                open={expandedDays.includes(day.day)}
                onOpenChange={() => toggleDay(day.day)}
              >
                <div
                  className="relative pl-10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Day marker */}
                  <div
                    className={`absolute left-2 w-5 h-5 rounded-full border-2 bg-card ${
                      day.tags[0].type === "adventure" ? "border-teal" : "border-sky"
                    }`}
                  />

                  <CollapsibleTrigger className="w-full">
                    <div
                      className={`p-3 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        day.tags[0].type === "adventure" ? "bg-teal-light/50" : "bg-sky-light/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-muted-foreground">
                          Day {day.day}
                        </span>
                        <div className="flex items-center gap-2">
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
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1 text-left">
                        {day.title}
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-0.5 text-left">
                        {day.activities.map((activity) => (
                          <li key={activity}>• {activity}</li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="mt-3 pl-3">
                      {/* Single container with all details */}
                      <Card className="p-4 bg-card/50 space-y-4">
                        {/* Timings Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <h5 className="font-semibold text-sm">Schedule</h5>
                          </div>
                          <div className="space-y-1.5">
                            {day.timings.map((timing, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs">
                                <span className="font-medium text-primary min-w-[80px]">
                                  {timing.time}
                                </span>
                                <span className="text-muted-foreground">{timing.activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border" />

                        {/* Expenses Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <IndianRupee className="w-4 h-4 text-green-600" />
                            <h5 className="font-semibold text-sm">Day Expenses</h5>
                          </div>
                          <div className="space-y-1.5">
                            {day.expenses.map((expense, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between text-xs"
                              >
                                <span className="text-muted-foreground">{expense.item}</span>
                                <span className="font-semibold text-foreground">
                                  {expense.cost}
                                </span>
                              </div>
                            ))}
                            <div className="pt-2 border-t flex items-center justify-between">
                              <span className="font-semibold text-sm">Total:</span>
                              <span className="font-bold text-sm text-primary">
                                ₹
                                {day.expenses
                                  .reduce(
                                    (sum, exp) =>
                                      sum + parseInt(exp.cost.replace(/[₹,]/g, "")),
                                    0
                                  )
                                  .toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border" />

                        {/* Weather Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {getWeatherIcon(day.weather.icon)}
                            <h5 className="font-semibold text-sm">Weather</h5>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-muted-foreground">
                                {day.weather.condition}
                              </p>
                              <p className="text-sm font-bold text-foreground mt-1">
                                {day.weather.temp}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border" />

                        {/* Dining Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Utensils className="w-4 h-4 text-teal" />
                            <h5 className="font-semibold text-sm">Where & What to Try</h5>
                          </div>
                          <div className="space-y-3">
                            {day.dining.map((meal, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm font-semibold text-foreground">{meal.restaurant}</p>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                      <MapPin className="w-3 h-3" />
                                      <span>{meal.location}</span>
                                    </div>
                                  </div>
                                  <span className="text-xs font-semibold text-primary">{meal.avgCost}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  <span>{meal.timing}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {meal.dishes.map((dish) => (
                                    <Badge key={dish} variant="outline" className="text-xs">
                                      {dish}
                                    </Badge>
                                  ))}
                                </div>
                                {idx < day.dining.length - 1 && (
                                  <div className="border-t border-border/50 mt-2" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;
