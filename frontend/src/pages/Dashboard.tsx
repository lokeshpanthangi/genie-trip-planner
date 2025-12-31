import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";
import {
  Plane,
  Plus,
  MapPin,
  Calendar,
  Users,
  Wallet,
  ArrowRight,
  Sparkles,
  Sun,
  Cloud,
  Snowflake,
  Leaf,
  TrendingUp,
  MoreHorizontal,
  Trash2,
  Edit,
  Share2,
  Calculator,
  ChevronDown,
  X,
  Music,
  TreePine,
  Landmark,
  UtensilsCrossed,
  ShoppingBag,
  Camera,
  Waves,
} from "lucide-react";
import UserDropdown from "@/components/planner/UserDropdown";

interface Trip {
  id: string;
  destination: string;
  country: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: string;
  status: "completed" | "in-progress" | "draft";
  coverImage: string;
  progress?: number;
}

interface Recommendation {
  id: string;
  destination: string;
  country: string;
  description: string;
  bestMonth: string;
  avgBudget: string;
  highlights: string[];
  coverImage: string;
  weather: "sunny" | "cloudy" | "snowy" | "mild";
}

// Mock data for trips
const mockTrips: Trip[] = [
  {
    id: "1",
    destination: "Tokyo",
    country: "Japan",
    startDate: "2025-03-15",
    endDate: "2025-03-25",
    travelers: 4,
    budget: "$5,000",
    status: "completed",
    coverImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    destination: "Paris",
    country: "France",
    startDate: "2025-01-10",
    endDate: "2025-01-18",
    travelers: 2,
    budget: "$3,500",
    status: "in-progress",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
    progress: 65,
  },
  {
    id: "3",
    destination: "Bali",
    country: "Indonesia",
    startDate: "2025-06-01",
    endDate: "2025-06-10",
    travelers: 6,
    budget: "$4,200",
    status: "draft",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop",
  },
  {
    id: "4",
    destination: "New York",
    country: "USA",
    startDate: "2024-12-20",
    endDate: "2024-12-27",
    travelers: 3,
    budget: "$6,000",
    status: "completed",
    coverImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
  },
];

// Get current month recommendations
const getCurrentMonthRecommendations = (): Recommendation[] => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  // January recommendations
  const januaryRecs: Recommendation[] = [
    {
      id: "r1",
      destination: "Maldives",
      country: "Maldives",
      description: "Perfect weather for beach getaways with crystal clear waters and luxury resorts.",
      bestMonth: "January",
      avgBudget: "$4,500",
      highlights: ["Snorkeling", "Luxury Resorts", "Private Islands"],
      coverImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop",
      weather: "sunny",
    },
    {
      id: "r2",
      destination: "Thailand",
      country: "Thailand",
      description: "Dry season means perfect conditions for exploring temples and beaches.",
      bestMonth: "January",
      avgBudget: "$2,500",
      highlights: ["Temples", "Street Food", "Islands"],
      coverImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop",
      weather: "sunny",
    },
    {
      id: "r3",
      destination: "Dubai",
      country: "UAE",
      description: "Pleasant winter temperatures ideal for desert safaris and city exploration.",
      bestMonth: "January",
      avgBudget: "$3,800",
      highlights: ["Shopping", "Desert Safari", "Architecture"],
      coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      weather: "mild",
    },
  ];

  // Return based on current month (using January as default for demo)
  return januaryRecs;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState<Trip[]>(mockTrips);
  const [recommendations] = useState<Recommendation[]>(getCurrentMonthRecommendations());
  const [activeFilter, setActiveFilter] = useState<"all" | "completed" | "in-progress" | "draft">("all");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  
  // Budget Calculator State
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [budgetForm, setBudgetForm] = useState({
    source: "",
    destination: "",
    noOfPeople: 1,
    expenditure: "mid" as "low" | "mid" | "high",
    startDate: "",
    endDate: "",
    extras: {
      entertainment: false,
      nature: false,
      historical: false,
      food: false,
      shopping: false,
      photography: false,
      beaches: false,
    },
  });
  const [calculatedBudget, setCalculatedBudget] = useState<{
    total: number;
    perHead: number;
  } | null>(null);

  // Calculate number of days
  const calculateDays = () => {
    if (budgetForm.startDate && budgetForm.endDate) {
      const start = new Date(budgetForm.startDate);
      const end = new Date(budgetForm.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const numberOfDays = calculateDays();

  // Calculate budget (mock calculation for now)
  const handleCalculateBudget = () => {
    const days = calculateDays();
    if (days === 0 || !budgetForm.source || !budgetForm.destination) return;

    // Base rates per person per day based on expenditure level
    const baseRates = {
      low: 2000,
      mid: 5000,
      high: 12000,
    };

    // Extra costs
    const extraCosts = {
      entertainment: 1500,
      nature: 1000,
      historical: 800,
      food: 2000,
      shopping: 3000,
      photography: 500,
      beaches: 1200,
    };

    let baseCost = baseRates[budgetForm.expenditure] * days * budgetForm.noOfPeople;
    
    // Add extra costs
    Object.entries(budgetForm.extras).forEach(([key, value]) => {
      if (value) {
        baseCost += extraCosts[key as keyof typeof extraCosts] * budgetForm.noOfPeople;
      }
    });

    // Add travel cost estimation
    const travelCost = 5000 * budgetForm.noOfPeople;
    const total = baseCost + travelCost;
    
    setCalculatedBudget({
      total,
      perHead: Math.round(total / budgetForm.noOfPeople),
    });
  };

  const resetBudgetCalculator = () => {
    setBudgetForm({
      source: "",
      destination: "",
      noOfPeople: 1,
      expenditure: "mid",
      startDate: "",
      endDate: "",
      extras: {
        entertainment: false,
        nature: false,
        historical: false,
        food: false,
        shopping: false,
        photography: false,
        beaches: false,
      },
    });
    setCalculatedBudget(null);
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  const filteredTrips = trips.filter((trip) => {
    if (activeFilter === "all") return true;
    return trip.status === activeFilter;
  });

  const getStatusBadge = (status: Trip["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">In Progress</Badge>;
      case "draft":
        return <Badge className="bg-slate-500/10 text-slate-600 border-slate-500/20">Draft</Badge>;
    }
  };

  const getWeatherIcon = (weather: Recommendation["weather"]) => {
    switch (weather) {
      case "sunny":
        return <Sun className="w-4 h-4 text-amber-500" />;
      case "cloudy":
        return <Cloud className="w-4 h-4 text-slate-500" />;
      case "snowy":
        return <Snowflake className="w-4 h-4 text-blue-500" />;
      case "mild":
        return <Leaf className="w-4 h-4 text-emerald-500" />;
    }
  };

  const handleTripClick = (trip: Trip) => {
    if (trip.status === "draft") {
      navigate("/initial-planner");
    } else {
      navigate("/planner");
    }
  };

  const handleNewTrip = () => {
    navigate("/initial-planner");
  };

  const handleDeleteTrip = (tripId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTrips(trips.filter((t) => t.id !== tripId));
    setOpenMenuId(null);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - TravelAI</title>
        <meta name="description" content="View and manage your travel plans with TravelAI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Plane className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  TravelAI
                </span>
              </div>

              {/* Right side - Theme Toggle & User */}
              <div className="flex items-center gap-3 -mr-2">
                <ThemeToggle />
                <UserDropdown />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground mb-6">
              Ready to plan your next adventure? Here's an overview of your trips.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* New Trip Button */}
              <Button
                onClick={handleNewTrip}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 h-12 px-6"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Trip
              </Button>

              {/* Calculate Budget Button */}
              <Button
                onClick={() => {
                  setIsBudgetOpen(!isBudgetOpen);
                  if (!isBudgetOpen) {
                    resetBudgetCalculator();
                  }
                }}
                variant="outline"
                className={`h-12 px-6 border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500/50 ${isBudgetOpen ? "bg-violet-500/10 border-violet-500/50" : ""}`}
              >
                <Calculator className="w-5 h-5 mr-2 text-violet-500" />
                Calculate Budget
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isBudgetOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Budget Calculator Container - Inline on Page */}
          {isBudgetOpen && (
            <div className="mb-8 bg-card rounded-2xl shadow-xl border border-border p-6 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  Budget Calculator
                </h3>
                <button
                  onClick={() => setIsBudgetOpen(false)}
                  className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div className="space-y-5">
                  {/* Source & Destination */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="source" className="text-sm font-medium">Source</Label>
                      <Input
                        id="source"
                        placeholder="e.g., Mumbai"
                        value={budgetForm.source}
                        onChange={(e) => setBudgetForm({ ...budgetForm, source: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="destination" className="text-sm font-medium">Destination</Label>
                      <Input
                        id="destination"
                        placeholder="e.g., Goa"
                        value={budgetForm.destination}
                        onChange={(e) => setBudgetForm({ ...budgetForm, destination: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  {/* No of People & Expenditure */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="people" className="text-sm font-medium">No. of People</Label>
                      <Input
                        id="people"
                        type="number"
                        min={1}
                        value={budgetForm.noOfPeople}
                        onChange={(e) => setBudgetForm({ ...budgetForm, noOfPeople: parseInt(e.target.value) || 1 })}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Expenditure Level</Label>
                      <div className="flex gap-2 mt-1.5">
                        {(["low", "mid", "high"] as const).map((level) => (
                          <button
                            key={level}
                            onClick={() => setBudgetForm({ ...budgetForm, expenditure: level })}
                            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                              budgetForm.expenditure === level
                                ? level === "low"
                                  ? "bg-emerald-500 text-white"
                                  : level === "mid"
                                  ? "bg-amber-500 text-white"
                                  : "bg-violet-500 text-white"
                                : "bg-muted hover:bg-muted/80"
                            }`}
                          >
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate" className="text-sm font-medium">From Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={budgetForm.startDate}
                        onChange={(e) => setBudgetForm({ ...budgetForm, startDate: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate" className="text-sm font-medium">Till Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={budgetForm.endDate}
                        onChange={(e) => setBudgetForm({ ...budgetForm, endDate: e.target.value })}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  {/* Days Display */}
                  {numberOfDays > 0 && (
                    <div className="flex items-center gap-2 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">
                        Trip Duration: {numberOfDays} {numberOfDays === 1 ? "day" : "days"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column - Extras & Results */}
                <div className="space-y-5">
                  {/* Extras */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Extras (Select what you want)</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "entertainment", label: "Entertainment", icon: Music },
                        { key: "nature", label: "Nature & Wildlife", icon: TreePine },
                        { key: "historical", label: "Historical Places", icon: Landmark },
                        { key: "food", label: "Food & Dining", icon: UtensilsCrossed },
                        { key: "shopping", label: "Shopping", icon: ShoppingBag },
                        { key: "photography", label: "Photography", icon: Camera },
                        { key: "beaches", label: "Beaches", icon: Waves },
                      ].map(({ key, label, icon: Icon }) => (
                        <label
                          key={key}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            budgetForm.extras[key as keyof typeof budgetForm.extras]
                              ? "bg-violet-500/10 border-violet-500/30"
                              : "bg-muted/30 border-border hover:bg-muted/50"
                          }`}
                        >
                          <Checkbox
                            checked={budgetForm.extras[key as keyof typeof budgetForm.extras]}
                            onCheckedChange={(checked) =>
                              setBudgetForm({
                                ...budgetForm,
                                extras: { ...budgetForm.extras, [key]: checked },
                              })
                            }
                          />
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <Button
                    onClick={handleCalculateBudget}
                    disabled={!budgetForm.source || !budgetForm.destination || numberOfDays === 0}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white h-12"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Budget
                  </Button>

                  {/* Results */}
                  {calculatedBudget && (
                    <div className="p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/20">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-violet-500" />
                        Estimated Budget
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background/50 rounded-lg p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Total Cost</p>
                          <p className="text-2xl font-bold text-foreground">
                            ₹{calculatedBudget.total.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-1">Per Person</p>
                          <p className="text-2xl font-bold text-violet-600">
                            ₹{calculatedBudget.perHead.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        * This is an estimate. Actual costs may vary based on bookings and preferences.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Your Trips Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Your Trips</h2>
                <p className="text-muted-foreground">Manage and continue planning your adventures</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 bg-muted/50 rounded-xl p-1">
                {(["all", "in-progress", "completed", "draft"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeFilter === filter
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter === "all" ? "All" : filter === "in-progress" ? "In Progress" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {filteredTrips.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No trips found</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {activeFilter === "all"
                      ? "Start planning your first adventure!"
                      : `No ${activeFilter} trips yet.`}
                  </p>
                  <Button onClick={handleNewTrip}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Trip
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Trip Cards */}
                {filteredTrips.map((trip) => (
                  <Card
                    key={trip.id}
                    className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group relative"
                    onClick={() => handleTripClick(trip)}
                  >
                    {/* Cover Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={trip.coverImage}
                        alt={trip.destination}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 right-3">
                        {getStatusBadge(trip.status)}
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="text-xl font-bold">{trip.destination}</h3>
                        <p className="text-sm text-white/80">{trip.country}</p>
                      </div>

                      {/* Menu Button */}
                      <div className="absolute top-3 left-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(openMenuId === trip.id ? null : trip.id);
                          }}
                          className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
                        >
                          <MoreHorizontal className="w-4 h-4 text-white" />
                        </button>

                        {/* Dropdown Menu */}
                        {openMenuId === trip.id && (
                          <div className="absolute top-10 left-0 bg-card rounded-lg shadow-lg border border-border overflow-hidden z-10 min-w-[140px]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-muted text-left text-sm"
                            >
                              <Edit className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuId(null);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-muted text-left text-sm"
                            >
                              <Share2 className="w-4 h-4" />
                              Share
                            </button>
                            <button
                              onClick={(e) => handleDeleteTrip(trip.id, e)}
                              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-destructive/10 text-destructive text-left text-sm"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      {/* Progress Bar for In-Progress */}
                      {trip.status === "in-progress" && trip.progress && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Planning Progress</span>
                            <span className="font-medium">{trip.progress}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all"
                              style={{ width: `${trip.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(trip.startDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })} -{" "}
                            {new Date(trip.endDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{trip.travelers} travelers</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Wallet className="w-4 h-4" />
                          <span>{trip.budget}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-0">
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-emerald-500/10 group-hover:text-emerald-600"
                      >
                        {trip.status === "draft" ? "Continue Planning" : trip.status === "in-progress" ? "Continue" : "View Details"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* Recommendations Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Recommended for {currentMonth}
                </h2>
                <p className="text-muted-foreground">
                  Best destinations to visit this month based on weather and events
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map((rec) => (
                <Card
                  key={rec.id}
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => navigate("/initial-planner")}
                >
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rec.coverImage}
                      alt={rec.destination}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Weather Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        {getWeatherIcon(rec.weather)}
                        <span className="text-white text-sm font-medium capitalize">{rec.weather}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-400 font-medium">Trending</span>
                      </div>
                      <h3 className="text-xl font-bold">{rec.destination}</h3>
                      <p className="text-sm text-white/80">{rec.country}</p>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-4">{rec.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Wallet className="w-4 h-4" />
                        <span>Avg. {rec.avgBudget}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <span>Plan this trip</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
