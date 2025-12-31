import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  CheckCircle2,
  Sparkles,
  Clock,
  Star,
  PartyPopper,
  Camera,
  Sun,
  IndianRupee,
  Check,
  Download,
  Share2,
  Heart
} from "lucide-react";

const tripDetails = {
  destination: "Ladakh Adventure",
  tagline: "Land of High Passes",
  travelers: 4,
  duration: "5 Days",
  dates: "Aug 15 - Aug 19, 2025",
  totalBudget: "₹45,000",
  budgetPerPerson: "₹11,250",
};

const selectedHotels = [
  {
    name: "The Grand Dragon Ladakh",
    location: "Leh City Center",
    nights: 2,
    roomType: "Deluxe Room",
    price: "₹7,000",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
  },
  {
    name: "Nubra Ethnic Camp",
    location: "Hunder, Nubra Valley",
    nights: 1,
    roomType: "Swiss Tent",
    price: "₹4,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
  },
  {
    name: "Pangong Camps",
    location: "Pangong Lake Shore",
    nights: 1,
    roomType: "Lake View Tent",
    price: "₹3,500",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400",
  },
];

const dailyPlan = [
  {
    day: 1,
    title: "Arrival & Acclimatization",
    location: "Leh",
    meals: [
      { type: "Breakfast", restaurant: "Bon Appetit", cuisine: "Continental" },
      { type: "Dinner", restaurant: "The Tibetan Kitchen", cuisine: "Tibetan" },
    ],
    highlights: ["Leh Palace views", "Traditional Ladakhi market"],
    specialInfo: "Take it easy today! Your body needs time to adjust to 11,500 ft altitude.",
  },
  {
    day: 2,
    title: "Monastery Circuit",
    location: "Thiksey, Hemis, Shey",
    meals: [
      { type: "Lunch", restaurant: "Gesmo Restaurant", cuisine: "Italian-Indian" },
      { type: "Snacks", restaurant: "Pumpernickel Bakery", cuisine: "German" },
    ],
    highlights: ["12th-century Thiksey Monastery", "Hemis - largest monastery in Ladakh"],
    specialInfo: "Hemis is home to the famous Hemis Festival held every June-July!",
  },
  {
    day: 3,
    title: "Pangong Lake Adventure",
    location: "Pangong Tso",
    meals: [
      { type: "All Meals", restaurant: "Campsite Kitchen", cuisine: "Indian-Chinese" },
    ],
    highlights: ["Chang La Pass (17,590 ft)", "Color-changing lake waters"],
    specialInfo: "The lake changes colors from blue to green to red depending on sunlight!",
  },
  {
    day: 4,
    title: "Nubra Valley Expedition",
    location: "Khardung La, Diskit",
    meals: [
      { type: "Lunch", restaurant: "Summer Harvest", cuisine: "Ladakhi" },
      { type: "Dinner", restaurant: "Nubra Organic Retreat", cuisine: "Organic" },
    ],
    highlights: ["Khardung La - world's highest motorable road", "Double-humped Bactrian camels"],
    specialInfo: "Ride the rare Bactrian camels on the white sand dunes of Hunder!",
  },
  {
    day: 5,
    title: "Departure Day",
    location: "Leh",
    meals: [
      { type: "Farewell Lunch", restaurant: "Bon Appetit", cuisine: "Multi-cuisine" },
    ],
    highlights: ["Last-minute souvenir shopping", "Pashmina & handicrafts"],
    specialInfo: "Don't forget to buy authentic Pashmina shawls and apricot products!",
  },
];

const festivals = [
  {
    name: "Ladakh Festival",
    date: "September 1-15",
    description: "Colorful cultural celebration with traditional music, dance, and archery",
    icon: PartyPopper,
  },
  {
    name: "Losar Festival",
    date: "December-February",
    description: "Ladakhi New Year with masked dances and religious ceremonies",
    icon: Sparkles,
  },
];

const placeHighlights = [
  { name: "Pangong Lake", special: "134 km long lake shared with Tibet, changes 7 colors", icon: Camera },
  { name: "Khardung La", special: "One of the world's highest motorable passes at 18,380 ft", icon: Mountain },
  { name: "Thiksey Monastery", special: "Mini Potala Palace with 12-story complex", icon: Sparkles },
  { name: "Magnetic Hill", special: "Optical illusion where vehicles appear to roll uphill", icon: Star },
];

const Overview = () => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    // Simulate saving
    setTimeout(() => {
      setIsConfirming(false);
      // You can add actual save logic here
      alert("Trip confirmed and saved successfully! 🎉");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Header with Confirm Button */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal/10 via-purple/5 to-orange/10 border border-border">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4">
              <Badge className="bg-amber-500/20 text-amber-600 border-amber-500/30">
                <Star className="w-3 h-3 mr-1 fill-amber-500" />
                Ready to Confirm
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                {tripDetails.destination}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {tripDetails.tagline}
              </p>
              
              {/* Quick Stats Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-teal" />
                  <span className="font-medium">{tripDetails.travelers} Travelers</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-purple" />
                  <span className="font-medium">{tripDetails.dates}</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2 text-sm">
                  <Wallet className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">{tripDetails.totalBudget}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={handleConfirm}
                disabled={isConfirming}
                size="lg"
                className="bg-gradient-to-r from-teal to-emerald-500 hover:from-teal/90 hover:to-emerald-500/90 text-white shadow-lg shadow-teal/25 px-8"
              >
                {isConfirming ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Confirm Trip
                  </>
                )}
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Hotels */}
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple flex items-center justify-center">
              <Hotel className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Your Accommodations</h3>
              <p className="text-sm text-muted-foreground">{selectedHotels.length} stays booked</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedHotels.map((hotel, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold">{hotel.rating}</span>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-black/60 text-white border-0 text-xs">
                      {hotel.nights} {hotel.nights === 1 ? "Night" : "Nights"}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground text-sm">{hotel.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">{hotel.roomType}</span>
                    <span className="text-sm font-bold text-teal">{hotel.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Plan with Meals */}
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-sky flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Day-by-Day Plan</h3>
              <p className="text-sm text-muted-foreground">Complete itinerary with meals & highlights</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-border">
          {dailyPlan.map((day, index) => (
            <div key={index} className="p-6 hover:bg-muted/20 transition-colors">
              <div className="flex gap-4">
                {/* Day Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-sky flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-medium opacity-80">DAY</span>
                    <span className="text-xl font-bold leading-none">{day.day}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{day.title}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {day.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Meals */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <Utensils className="w-3 h-3" />
                        Where to Eat
                      </p>
                      <div className="space-y-1.5">
                        {day.meals.map((meal, mealIndex) => (
                          <div key={mealIndex} className="flex items-center gap-2 text-sm">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-orange/10 text-orange font-medium">
                              {meal.type}
                            </span>
                            <span className="text-foreground">{meal.restaurant}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        Highlights
                      </p>
                      <div className="space-y-1">
                        {day.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-3 h-3 text-teal flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special Info */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Pro Tip
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {day.specialInfo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Place Highlights & Festivals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* What's Special */}
        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">What Makes It Special</h3>
                <p className="text-sm text-muted-foreground">Unique experiences await</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-3">
            {placeHighlights.map((place, index) => {
              const Icon = place.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{place.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{place.special}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Festivals */}
        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <PartyPopper className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Festivals & Events</h3>
                <p className="text-sm text-muted-foreground">Cultural celebrations</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {festivals.map((festival, index) => {
              const Icon = festival.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-500/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{festival.name}</p>
                        <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/20 text-xs">
                          {festival.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{festival.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="p-4 rounded-2xl bg-muted/30 text-center">
              <Sun className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Best time to visit: <span className="font-medium text-foreground">May to September</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Summary Footer */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-teal/10 to-sky/10 rounded-3xl border border-emerald-500/20 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <IndianRupee className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Trip Cost</p>
              <p className="text-3xl font-bold text-foreground">{tripDetails.totalBudget}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{tripDetails.budgetPerPerson}</p>
              <p className="text-xs text-muted-foreground">Per Person</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{tripDetails.travelers}</p>
              <p className="text-xs text-muted-foreground">Travelers</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{tripDetails.duration}</p>
              <p className="text-xs text-muted-foreground">Duration</p>
            </div>
          </div>

          <Button
            onClick={handleConfirm}
            disabled={isConfirming}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal hover:from-emerald-500/90 hover:to-teal/90 text-white shadow-lg shadow-emerald-500/25"
          >
            {isConfirming ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Confirming...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Confirm & Save Trip
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
