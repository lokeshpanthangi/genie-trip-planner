import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Coffee, 
  Car, 
  Users, 
  Building2,
  Flame,
  Mountain,
  Bath,
  Utensils,
  Eye,
  Thermometer,
  ChevronRight,
  Check
} from "lucide-react";

interface Room {
  type: string;
  price: string;
  capacity: string;
  nights: number;
  amenities: string[];
}

interface Hotel {
  name: string;
  location: string;
  rating: number;
  rooms: Room[];
  image: string;
  highlight?: string;
}

interface CityData {
  city: string;
  hotels: Hotel[];
}

const hotelsByCity: CityData[] = [
  {
    city: "Leh",
    hotels: [
      {
        name: "The Grand Dragon Ladakh",
        location: "Leh City Center",
        rating: 4.5,
        highlight: "Best city views",
        rooms: [
          {
            type: "Deluxe Room",
            price: "₹3,500",
            capacity: "2 Adults",
            nights: 2,
            amenities: ["WiFi", "Breakfast", "Parking"],
          },
          {
            type: "Suite",
            price: "₹5,500",
            capacity: "2 Adults + 1 Child",
            nights: 2,
            amenities: ["WiFi", "Breakfast", "Parking", "City View"],
          },
        ],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      },
      {
        name: "Hotel Himalaya",
        location: "Near Main Market",
        rating: 4.2,
        highlight: "Central location",
        rooms: [
          {
            type: "Standard Room",
            price: "₹2,800",
            capacity: "2 Adults",
            nights: 2,
            amenities: ["WiFi", "Breakfast"],
          },
          {
            type: "Deluxe Room",
            price: "₹3,800",
            capacity: "3 Adults",
            nights: 2,
            amenities: ["WiFi", "Breakfast", "Mountain View"],
          },
        ],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
      },
    ],
  },
  {
    city: "Nubra Valley",
    hotels: [
      {
        name: "Nubra Ethnic Camp",
        location: "Hunder, Nubra Valley",
        rating: 4.7,
        highlight: "Authentic experience",
        rooms: [
          {
            type: "Swiss Tent",
            price: "₹4,000",
            capacity: "2 Adults",
            nights: 1,
            amenities: ["Breakfast", "Parking", "Bonfire"],
          },
          {
            type: "Cottage",
            price: "₹5,500",
            capacity: "4 Adults",
            nights: 1,
            amenities: ["Breakfast", "Parking", "Bonfire", "Private Bath"],
          },
        ],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      },
      {
        name: "Nubra Organic Retreat",
        location: "Diskit, Nubra Valley",
        rating: 4.5,
        highlight: "Organic meals",
        rooms: [
          {
            type: "Garden Room",
            price: "₹3,500",
            capacity: "2 Adults",
            nights: 1,
            amenities: ["WiFi", "Breakfast", "Organic Meals"],
          },
        ],
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400",
      },
    ],
  },
  {
    city: "Pangong",
    hotels: [
      {
        name: "Pangong Camps",
        location: "Pangong Lake Shore",
        rating: 4.3,
        highlight: "Lakeside camping",
        rooms: [
          {
            type: "Lake View Tent",
            price: "₹3,500",
            capacity: "2 Adults",
            nights: 1,
            amenities: ["Meals Included", "Lakeside", "Bonfire"],
          },
          {
            type: "Premium Tent",
            price: "₹4,500",
            capacity: "3 Adults",
            nights: 1,
            amenities: ["Meals Included", "Lakeside", "Bonfire", "Heater"],
          },
        ],
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400",
      },
    ],
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi,
  Breakfast: Coffee,
  Parking: Car,
  "Meals Included": Utensils,
  Bonfire: Flame,
  Lakeside: Mountain,
  "City View": Eye,
  "Mountain View": Mountain,
  "Private Bath": Bath,
  "Organic Meals": Utensils,
  Heater: Thermometer,
};

const Hotels = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Leh");
  const [selectedHotel, setSelectedHotel] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  const currentCityData = hotelsByCity.find((c) => c.city === selectedCity) || hotelsByCity[0];
  const currentHotel = currentCityData.hotels[selectedHotel] || currentCityData.hotels[0];
  const currentRoom = currentHotel.rooms[selectedRoom] || currentHotel.rooms[0];

  const totalHotels = hotelsByCity.reduce((sum, city) => sum + city.hotels.length, 0);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedHotel(0);
    setSelectedRoom(0);
  };

  const handleHotelChange = (index: number) => {
    setSelectedHotel(index);
    setSelectedRoom(0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-sky flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Accommodation</h2>
            <p className="text-sm text-muted-foreground">Handpicked stays for your journey</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
          <Building2 className="w-4 h-4 text-purple" />
          <span className="text-sm font-medium text-foreground">{totalHotels} Hotels</span>
        </div>
      </div>

      {/* City Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {hotelsByCity.map((cityData) => (
          <button
            key={cityData.city}
            onClick={() => handleCityChange(cityData.city)}
            className={`flex-shrink-0 px-5 py-3 rounded-2xl transition-all duration-300 ${
              selectedCity === cityData.city
                ? "bg-gradient-to-r from-purple to-purple/80 text-white shadow-lg shadow-purple/25"
                : "bg-card hover:bg-muted border border-border"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className={`w-4 h-4 ${selectedCity === cityData.city ? "text-white" : "text-muted-foreground"}`} />
              <span className="font-medium">{cityData.city}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCity === cityData.city 
                  ? "bg-white/20 text-white" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {cityData.hotels.length}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hotel List - Left Column */}
        <div className="lg:col-span-1 space-y-3">
          <p className="text-sm font-medium text-muted-foreground px-1">
            {currentCityData.hotels.length} stays in {selectedCity}
          </p>
          {currentCityData.hotels.map((hotel, index) => (
            <button
              key={index}
              onClick={() => handleHotelChange(index)}
              className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                selectedHotel === index
                  ? "bg-gradient-to-br from-purple/10 to-sky/10 border-2 border-purple/30 shadow-lg"
                  : "bg-card border border-border hover:border-purple/20 hover:shadow-md"
              }`}
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-foreground truncate">{hotel.name}</h4>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </p>
                  {hotel.highlight && (
                    <Badge className="mt-2 bg-purple/10 text-purple border-purple/20 text-xs">
                      {hotel.highlight}
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Hotel Details - Right Column */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
            {/* Hotel Image Header */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={currentHotel.image}
                alt={currentHotel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold">{currentHotel.rating}</span>
              </div>
              
              {/* Hotel Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white">{currentHotel.name}</h3>
                <p className="text-white/80 text-sm flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4" />
                  {currentHotel.location}
                </p>
              </div>
            </div>

            {/* Room Selection */}
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Select Room Type
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentHotel.rooms.map((room, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedRoom(index)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                        selectedRoom === index
                          ? "bg-gradient-to-br from-teal/10 to-sky/10 border-2 border-teal/40 shadow-md"
                          : "bg-muted/30 border border-transparent hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{room.type}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                            <Users className="w-3 h-3" />
                            <span>{room.capacity}</span>
                          </div>
                        </div>
                        {selectedRoom === index && (
                          <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-xl font-bold text-teal">{room.price}</span>
                        <span className="text-xs text-muted-foreground">/night</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Room Details */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{currentRoom.type}</h4>
                    <p className="text-sm text-muted-foreground">{currentRoom.nights} night stay</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-teal">
                      ₹{(parseInt(currentRoom.price.replace(/[₹,]/g, "")) * currentRoom.nights).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Amenities included</p>
                  <div className="flex flex-wrap gap-2">
                    {currentRoom.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || Coffee;
                      return (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background border border-border"
                        >
                          <Icon className="w-4 h-4 text-purple" />
                          <span className="text-sm font-medium text-foreground">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-2xl bg-muted/30">
                  <Users className="w-5 h-5 text-purple mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{currentRoom.capacity}</p>
                  <p className="text-xs text-muted-foreground">Capacity</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-muted/30">
                  <Building2 className="w-5 h-5 text-teal mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{currentRoom.nights}</p>
                  <p className="text-xs text-muted-foreground">{currentRoom.nights === 1 ? "Night" : "Nights"}</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-muted/30">
                  <Star className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{currentHotel.rating}</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
