import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Wallet, 
  Hotel, 
  Utensils,
  Car,
  Plane,
  Mountain,
  CheckCircle2
} from "lucide-react";

const tripDetails = {
  destination: "Ladakh Adventure",
  travelers: 4,
  duration: "5 Days",
  dates: "Mid August 2025",
  totalBudget: "₹45,000",
  budgetPerPerson: "₹11,250",
};

const budgetBreakdown = [
  { category: "Accommodation", amount: "₹20,600", percentage: 46, icon: Hotel },
  { category: "Transportation", amount: "₹12,000", percentage: 27, icon: Car },
  { category: "Food & Dining", amount: "₹8,000", percentage: 18, icon: Utensils },
  { category: "Activities", amount: "₹4,400", percentage: 9, icon: Mountain },
];

const itineraryHighlights = [
  { day: 1, title: "Arrival & Acclimatization", location: "Leh" },
  { day: 2, title: "Monastery Circuit", location: "Thiksey, Hemis, Shey" },
  { day: 3, title: "Nubra Valley Adventure", location: "Khardung La, Diskit" },
  { day: 4, title: "Pangong Lake Excursion", location: "Pangong Tso" },
  { day: 5, title: "Local Exploration & Departure", location: "Leh Market" },
];

const includedFeatures = [
  "Comfortable accommodations with modern amenities",
  "Private vehicle for entire journey",
  "Experienced local guide",
  "All necessary permits (Inner Line Permit)",
  "Breakfast at all hotels",
  "24/7 support and emergency assistance",
  "Flexible itinerary - adjustable to group preferences",
];

const Overview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Trip Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-2xl p-8 border border-primary/20">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              {tripDetails.destination}
            </h1>
            <p className="text-muted-foreground">Your personalized travel plan summary</p>
          </div>
          <Badge className="text-base px-4 py-2" variant="default">
            Trip Ready ✓
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border">
            <Users className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{tripDetails.travelers}</p>
            <p className="text-xs text-muted-foreground">Travelers</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border">
            <Calendar className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{tripDetails.duration}</p>
            <p className="text-xs text-muted-foreground">{tripDetails.dates}</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border">
            <Wallet className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{tripDetails.totalBudget}</p>
            <p className="text-xs text-muted-foreground">Total Budget</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border">
            <Users className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{tripDetails.budgetPerPerson}</p>
            <p className="text-xs text-muted-foreground">Per Person</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Breakdown */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-primary" />
            Budget Breakdown
          </h3>
          <div className="space-y-4">
            {budgetBreakdown.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.amount}</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-right">{item.percentage}% of total</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Itinerary Highlights */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Itinerary Highlights
          </h3>
          <div className="space-y-3">
            {itineraryHighlights.map((day, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{day.day}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{day.title}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{day.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* What's Included */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          What's Included
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {includedFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Important Notice */}
      <Card className="p-6 bg-blue-500/5 border-blue-500/20">
        <div className="flex items-start gap-3">
          <Plane className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Before You Travel</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Make sure to book your flights to Leh at least 2 months in advance for better rates. 
              Check weather conditions before departure and ensure all travel documents and permits are ready. 
              Start any required medications (especially for altitude sickness) as advised by your doctor.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Overview;
