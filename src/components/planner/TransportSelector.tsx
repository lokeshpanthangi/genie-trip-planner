import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plane, 
  Train, 
  Bus, 
  Car, 
  Clock, 
  IndianRupee,
  Calendar,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface TransportOption {
  id: string;
  type: "flight" | "train" | "bus" | "car";
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  operator: string;
  available: boolean;
  class?: string;
  stops?: number;
  fromCoords: [number, number];
  toCoords: [number, number];
}

interface TransportSelectorProps {
  onRouteSelect: (route: { from: string; to: string; type: "flight" | "train" | "bus" | "car"; coordinates: [number, number][] } | null) => void;
}

const transportData: TransportOption[] = [
  // Flights
  {
    id: "F1",
    type: "flight",
    from: "Delhi (DEL)",
    to: "Leh (IXL)",
    date: "Aug 15",
    departureTime: "06:00 AM",
    arrivalTime: "07:30 AM",
    duration: "1h 30m",
    price: 8000,
    operator: "Air India",
    available: true,
    stops: 0,
    fromCoords: [77.2090, 28.6139],
    toCoords: [77.5771, 34.1526],
  },
  {
    id: "F2",
    type: "flight",
    from: "Delhi (DEL)",
    to: "Leh (IXL)",
    date: "Aug 15",
    departureTime: "08:30 AM",
    arrivalTime: "10:00 AM",
    duration: "1h 30m",
    price: 7500,
    operator: "IndiGo",
    available: true,
    stops: 0,
    fromCoords: [77.2090, 28.6139],
    toCoords: [77.5771, 34.1526],
  },
  {
    id: "F3",
    type: "flight",
    from: "Delhi (DEL)",
    to: "Leh (IXL)",
    date: "Aug 15",
    departureTime: "11:00 AM",
    arrivalTime: "12:30 PM",
    duration: "1h 30m",
    price: 9200,
    operator: "Vistara",
    available: true,
    stops: 0,
    fromCoords: [77.2090, 28.6139],
    toCoords: [77.5771, 34.1526],
  },
  {
    id: "F4",
    type: "flight",
    from: "Leh (IXL)",
    to: "Delhi (DEL)",
    date: "Aug 19",
    departureTime: "06:00 PM",
    arrivalTime: "07:30 PM",
    duration: "1h 30m",
    price: 8200,
    operator: "Air India",
    available: true,
    stops: 0,
    fromCoords: [77.5771, 34.1526],
    toCoords: [77.2090, 28.6139],
  },
  {
    id: "F5",
    type: "flight",
    from: "Leh (IXL)",
    to: "Delhi (DEL)",
    date: "Aug 19",
    departureTime: "02:00 PM",
    arrivalTime: "03:30 PM",
    duration: "1h 30m",
    price: 7800,
    operator: "IndiGo",
    available: true,
    stops: 0,
    fromCoords: [77.5771, 34.1526],
    toCoords: [77.2090, 28.6139],
  },

  // Trains (Note: No direct trains to Leh, so showing nearby options)
  {
    id: "T1",
    type: "train",
    from: "Delhi",
    to: "Jammu Tawi",
    date: "Aug 15",
    departureTime: "10:50 PM",
    arrivalTime: "07:15 AM",
    duration: "8h 25m",
    price: 1500,
    operator: "Jammu Rajdhani (12425)",
    available: true,
    class: "3AC",
    fromCoords: [77.2090, 28.6139],
    toCoords: [74.8570, 32.7266],
  },
  {
    id: "T2",
    type: "train",
    from: "Delhi",
    to: "Jammu Tawi",
    date: "Aug 15",
    departureTime: "06:00 PM",
    arrivalTime: "05:45 AM",
    duration: "11h 45m",
    price: 950,
    operator: "Jammu Mail (12413)",
    available: true,
    class: "Sleeper",
    fromCoords: [77.2090, 28.6139],
    toCoords: [74.8570, 32.7266],
  },

  // Buses
  {
    id: "B1",
    type: "bus",
    from: "Manali",
    to: "Leh",
    date: "Aug 15",
    departureTime: "04:00 AM",
    arrivalTime: "08:00 PM",
    duration: "16h",
    price: 1800,
    operator: "HRTC Deluxe",
    available: true,
    stops: 3,
    fromCoords: [77.1892, 32.2432],
    toCoords: [77.5771, 34.1526],
  },
  {
    id: "B2",
    type: "bus",
    from: "Manali",
    to: "Leh",
    date: "Aug 15",
    departureTime: "05:30 AM",
    arrivalTime: "09:30 PM",
    duration: "16h",
    price: 1500,
    operator: "Private Semi-Sleeper",
    available: true,
    stops: 4,
    fromCoords: [77.1892, 32.2432],
    toCoords: [77.5771, 34.1526],
  },
  {
    id: "B3",
    type: "bus",
    from: "Srinagar",
    to: "Leh",
    date: "Aug 15",
    departureTime: "05:00 AM",
    arrivalTime: "07:00 PM",
    duration: "14h",
    price: 1600,
    operator: "JKSRTC",
    available: true,
    stops: 2,
    fromCoords: [74.7973, 34.0837],
    toCoords: [77.5771, 34.1526],
  },

  // Car Rentals
  {
    id: "C1",
    type: "car",
    from: "Leh",
    to: "Local Tours",
    date: "Aug 16-19",
    departureTime: "Flexible",
    arrivalTime: "Flexible",
    duration: "4 days",
    price: 12000,
    operator: "Toyota Innova + Driver",
    available: true,
    fromCoords: [77.5771, 34.1526],
    toCoords: [77.6654, 34.0574],
  },
  {
    id: "C2",
    type: "car",
    from: "Leh",
    to: "Local Tours",
    date: "Aug 16-19",
    departureTime: "Flexible",
    arrivalTime: "Flexible",
    duration: "4 days",
    price: 10000,
    operator: "Maruti Ertiga + Driver",
    available: true,
    fromCoords: [77.5771, 34.1526],
    toCoords: [77.6654, 34.0574],
  },
  {
    id: "C3",
    type: "car",
    from: "Manali",
    to: "Leh",
    date: "Aug 15",
    departureTime: "06:00 AM",
    arrivalTime: "08:00 PM",
    duration: "14h",
    price: 18000,
    operator: "SUV with Driver (One-way)",
    available: true,
    fromCoords: [77.1892, 32.2432],
    toCoords: [77.5771, 34.1526],
  },
];

const transportIcons = {
  flight: Plane,
  train: Train,
  bus: Bus,
  car: Car,
};

const TransportSelector = ({ onRouteSelect }: TransportSelectorProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("Aug 15");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const dates = ["Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19"];

  const filteredTransports = transportData.filter((transport) => {
    const dateMatch = selectedDate === "all" || transport.date === selectedDate || transport.date.includes(selectedDate);
    const typeMatch = selectedType === "all" || transport.type === selectedType;
    return dateMatch && typeMatch;
  });

  const toggleSelection = (id: string) => {
    const newSelection = selectedOptions.includes(id) 
      ? selectedOptions.filter((item) => item !== id) 
      : [id]; // Only allow single selection
    
    setSelectedOptions(newSelection);

    // Update map with selected route
    if (newSelection.length > 0) {
      const transport = transportData.find(t => t.id === newSelection[0]);
      if (transport) {
        onRouteSelect({
          from: transport.from,
          to: transport.to,
          type: transport.type,
          coordinates: [transport.fromCoords, transport.toCoords],
        });
      }
    } else {
      onRouteSelect(null);
    }
  };

  const getTransportColor = (type: string) => {
    switch (type) {
      case "flight":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "train":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case "bus":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
      case "car":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Available Transportation Options
        </h3>
        <p className="text-sm text-muted-foreground">
          Select date and transport type to view available options
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-6">
        {/* Transport Type Filter */}
        <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="flight">
              <Plane className="w-4 h-4 mr-1" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="train">
              <Train className="w-4 h-4 mr-1" />
              Trains
            </TabsTrigger>
            <TabsTrigger value="bus">
              <Bus className="w-4 h-4 mr-1" />
              Buses
            </TabsTrigger>
            <TabsTrigger value="car">
              <Car className="w-4 h-4 mr-1" />
              Cars
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Date Filter */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Select Date</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDate === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDate("all")}
            >
              All Dates
            </Button>
            {dates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Transport Options List */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {filteredTransports.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No transportation options available for selected filters</p>
          </div>
        ) : (
          filteredTransports.map((transport) => {
            const Icon = transportIcons[transport.type];
            const isSelected = selectedOptions.includes(transport.id);
            
            return (
              <Card
                key={transport.id}
                className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                  isSelected ? "border-2 border-primary bg-primary/5" : "border-2 border-transparent"
                }`}
                onClick={() => toggleSelection(transport.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getTransportColor(transport.type)}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {transport.date}
                          </Badge>
                          <Badge className={`text-xs capitalize ${getTransportColor(transport.type)}`}>
                            {transport.type}
                          </Badge>
                        </div>
                        <p className="font-semibold text-foreground text-sm">
                          {transport.operator}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-foreground flex items-center gap-1">
                          <IndianRupee className="w-4 h-4" />
                          {transport.price.toLocaleString()}
                        </p>
                        {transport.available && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Available
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Route */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{transport.from}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-medium">{transport.to}</span>
                    </div>

                    {/* Time and Duration */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>
                          {transport.departureTime} - {transport.arrivalTime}
                        </span>
                      </div>
                      <span>Duration: {transport.duration}</span>
                      {transport.class && <span>Class: {transport.class}</span>}
                      {transport.stops !== undefined && (
                        <span>{transport.stops === 0 ? "Non-stop" : `${transport.stops} stops`}</span>
                      )}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Selected Summary */}
      {selectedOptions.length > 0 && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">
                {selectedOptions.length} option selected
              </p>
              <p className="text-sm text-muted-foreground">
                Total: ₹
                {selectedOptions
                  .reduce((sum, id) => {
                    const transport = transportData.find((t) => t.id === id);
                    return sum + (transport?.price || 0);
                  }, 0)
                  .toLocaleString()}
              </p>
            </div>
            <Button onClick={() => {
              setSelectedOptions([]);
              onRouteSelect(null);
            }}>
              Clear Selection
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TransportSelector;
