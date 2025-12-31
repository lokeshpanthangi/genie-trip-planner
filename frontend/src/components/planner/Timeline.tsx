import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  CloudRain, 
  Sun, 
  Wind, 
  Utensils, 
  MapPin,
  Mountain,
  Sparkles,
  ChevronRight,
  Plane,
  Camera,
  TreePine
} from "lucide-react";

interface DayDetail {
  day: number;
  title: string;
  activities: string[];
  tags: { label: string; type: "spiritual" | "adventure" }[];
  timings: { time: string; activity: string; icon?: string }[];
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
  highlight?: string;
  image?: string;
}

const itinerary: DayDetail[] = [
  {
    day: 1,
    title: "Arrival & Acclimatization",
    highlight: "First glimpse of the Himalayas",
    activities: ["Land at Leh Airport", "Rest at hotel", "Evening walk at Leh Market"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
    timings: [
      { time: "7:30 AM", activity: "Arrive at Leh Airport", icon: "plane" },
      { time: "8:00 AM", activity: "Check-in at hotel", icon: "rest" },
      { time: "9:00 AM - 3:00 PM", activity: "Rest & acclimatize (Important!)", icon: "rest" },
      { time: "5:00 PM", activity: "Evening walk at Leh Market", icon: "walk" },
      { time: "7:00 PM", activity: "Dinner at Bon Appetit", icon: "food" },
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
    highlight: "Ancient Buddhist heritage",
    activities: ["Hemis Monastery", "Thiksey Monastery", "Shey Palace"],
    tags: [{ label: "Spiritual", type: "spiritual" }],
    timings: [
      { time: "8:00 AM", activity: "Breakfast at hotel", icon: "food" },
      { time: "9:00 AM", activity: "Visit Hemis Monastery", icon: "temple" },
      { time: "11:00 AM", activity: "Thiksey Monastery", icon: "temple" },
      { time: "1:00 PM", activity: "Lunch at Gesmo Restaurant", icon: "food" },
      { time: "2:30 PM", activity: "Shey Palace exploration", icon: "explore" },
      { time: "5:00 PM", activity: "Return to Leh", icon: "travel" },
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
    highlight: "The iconic blue lake",
    activities: ["Drive to Pangong Lake", "Camping under stars", "Photography session"],
    tags: [{ label: "Adventure", type: "adventure" }],
    timings: [
      { time: "6:00 AM", activity: "Early departure from Leh", icon: "travel" },
      { time: "11:00 AM", activity: "Reach Pangong Lake", icon: "arrive" },
      { time: "12:00 PM - 4:00 PM", activity: "Lake exploration & photography", icon: "camera" },
      { time: "7:00 PM", activity: "Campfire & dinner at campsite", icon: "camp" },
      { time: "9:00 PM", activity: "Stargazing session", icon: "stars" },
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
    highlight: "World's highest motorable road",
    activities: ["Khardung La Pass", "Camel Safari at Hunder", "River Rafting"],
    tags: [{ label: "Adventure", type: "adventure" }],
    timings: [
      { time: "7:00 AM", activity: "Departure to Nubra Valley", icon: "travel" },
      { time: "10:00 AM", activity: "Cross Khardung La (18,380 ft)", icon: "mountain" },
      { time: "12:00 PM", activity: "Reach Nubra Valley", icon: "arrive" },
      { time: "2:00 PM", activity: "Camel safari at Hunder sand dunes", icon: "adventure" },
      { time: "5:00 PM", activity: "Visit Diskit Monastery", icon: "temple" },
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
    highlight: "Farewell to the mountains",
    activities: ["Local shopping", "Flight back to Delhi"],
    tags: [{ label: "Relaxation", type: "spiritual" }],
    timings: [
      { time: "8:00 AM", activity: "Breakfast at hotel", icon: "food" },
      { time: "10:00 AM", activity: "Last-minute shopping at Leh Market", icon: "shop" },
      { time: "2:00 PM", activity: "Lunch at Bon Appetit", icon: "food" },
      { time: "4:00 PM", activity: "Airport departure", icon: "travel" },
      { time: "6:00 PM", activity: "Flight to Delhi", icon: "plane" },
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
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"schedule" | "expenses" | "dining">("schedule");

  const currentDay = itinerary.find((d) => d.day === selectedDay) || itinerary[0];

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="w-5 h-5 text-amber-500" />;
      case "rain":
        return <CloudRain className="w-5 h-5 text-blue-500" />;
      default:
        return <Wind className="w-5 h-5 text-slate-400" />;
    }
  };

  const getActivityIcon = (icon?: string) => {
    switch (icon) {
      case "plane":
        return <Plane className="w-4 h-4" />;
      case "camera":
        return <Camera className="w-4 h-4" />;
      case "mountain":
        return <Mountain className="w-4 h-4" />;
      case "food":
        return <Utensils className="w-4 h-4" />;
      case "temple":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <ChevronRight className="w-4 h-4" />;
    }
  };

  const totalExpenses = currentDay.expenses.reduce(
    (sum, exp) => sum + parseInt(exp.cost.replace(/[₹,]/g, "")),
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-sky flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Daily Itinerary</h2>
            <p className="text-sm text-muted-foreground">Your day-by-day adventure plan</p>
          </div>
        </div>
      </div>

      {/* Day Selector - Horizontal Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {itinerary.map((day) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`flex-shrink-0 px-4 py-3 rounded-2xl transition-all duration-300 ${
              selectedDay === day.day
                ? "bg-gradient-to-r from-teal to-teal/80 text-white shadow-lg shadow-teal/25"
                : "bg-card hover:bg-muted border border-border"
            }`}
          >
            <div className="text-center">
              <p className={`text-xs font-medium ${selectedDay === day.day ? "text-white/80" : "text-muted-foreground"}`}>
                Day {day.day}
              </p>
              <p className={`text-sm font-semibold mt-0.5 whitespace-nowrap ${selectedDay === day.day ? "text-white" : "text-foreground"}`}>
                {day.title.split(" ")[0]}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
        {/* Day Header */}
        <div className="relative p-6 bg-gradient-to-br from-teal/5 via-transparent to-sky/5">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal uppercase tracking-wider">Day {currentDay.day}</span>
                {currentDay.tags.map((tag) => (
                  <Badge
                    key={tag.label}
                    className={`text-xs ${
                      tag.type === "adventure"
                        ? "bg-teal/10 text-teal border-teal/20"
                        : "bg-sky/10 text-sky border-sky/20"
                    }`}
                  >
                    {tag.label}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{currentDay.title}</h3>
              {currentDay.highlight && (
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  {currentDay.highlight}
                </p>
              )}
            </div>
            
            {/* Weather Badge */}
            <div className="flex flex-col items-end gap-1 bg-background/80 backdrop-blur-sm rounded-2xl p-3 border border-border/50">
              {getWeatherIcon(currentDay.weather.icon)}
              <span className="text-lg font-bold text-foreground">{currentDay.weather.temp}</span>
              <span className="text-xs text-muted-foreground">{currentDay.weather.condition}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
              <Clock className="w-4 h-4 text-teal" />
              <span className="text-sm font-medium text-foreground">{currentDay.timings.length} Activities</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
              <IndianRupee className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-foreground">₹{totalExpenses.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/50">
              <Utensils className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium text-foreground">{currentDay.dining.length} Meals</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border">
          {[
            { id: "schedule", label: "Schedule", icon: Clock },
            { id: "expenses", label: "Expenses", icon: IndianRupee },
            { id: "dining", label: "Dining", icon: Utensils },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all relative ${
                activeTab === tab.id
                  ? "text-teal"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "schedule" && (
            <div className="space-y-3">
              {currentDay.timings.map((timing, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal/10 to-sky/10 flex items-center justify-center text-teal group-hover:scale-110 transition-transform">
                    {getActivityIcon(timing.icon)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{timing.activity}</p>
                    <p className="text-sm text-muted-foreground">{timing.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          )}

          {activeTab === "expenses" && (
            <div className="space-y-4">
              <div className="space-y-3">
                {currentDay.expenses.map((expense, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <IndianRupee className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="font-medium text-foreground">{expense.item}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{expense.cost}</span>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal/10 border border-emerald-500/20">
                <span className="text-lg font-semibold text-foreground">Day Total</span>
                <span className="text-2xl font-bold text-emerald-500">₹{totalExpenses.toLocaleString()}</span>
              </div>
            </div>
          )}

          {activeTab === "dining" && (
            <div className="space-y-4">
              {currentDay.dining.map((meal, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-muted/30 space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-foreground">{meal.restaurant}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {meal.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-teal">{meal.avgCost}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Clock className="w-3 h-3" />
                        {meal.timing}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {meal.dishes.map((dish) => (
                      <span
                        key={dish}
                        className="px-3 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium border border-orange/20"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Activity Highlights - Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentDay.activities.map((activity, idx) => (
          <div
            key={idx}
            className="group p-4 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal/20 to-sky/20 flex items-center justify-center text-teal text-sm font-bold">
                {idx + 1}
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-teal transition-colors">
                {activity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
