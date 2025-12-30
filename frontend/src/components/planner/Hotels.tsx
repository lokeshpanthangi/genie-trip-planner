import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Coffee, Car, Users, Bed } from "lucide-react";

const hotelsByCity = [
  {
    city: "Leh",
    hotels: [
      {
        name: "The Grand Dragon Ladakh",
        location: "Leh City Center",
        rating: 4.5,
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

const amenityIcons: Record<string, any> = {
  WiFi: Wifi,
  Breakfast: Coffee,
  Parking: Car,
  "Meals Included": Coffee,
  Bonfire: Coffee,
  Lakeside: MapPin,
};

const Hotels = () => {
  const totalRooms = hotelsByCity.reduce(
    (sum, city) => sum + city.hotels.reduce((hotelSum, hotel) => hotelSum + hotel.rooms.length, 0),
    0
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Accommodation by City</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Handpicked stays organized by location
          </p>
        </div>
        <Badge variant="secondary" className="text-base px-4 py-2">
          {totalRooms} Room Options
        </Badge>
      </div>

      {hotelsByCity.map((cityData, cityIndex) => (
        <div key={cityIndex} className="space-y-4">
          {/* City Header */}
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">{cityData.city}</h3>
            <Badge variant="outline" className="ml-2">
              {cityData.hotels.length} {cityData.hotels.length === 1 ? "Hotel" : "Hotels"}
            </Badge>
          </div>

          {/* Hotels in this city */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cityData.hotels.map((hotel, hotelIndex) => (
              <Card
                key={hotelIndex}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{hotel.name}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>

                  {/* Room Options */}
                  <div className="space-y-2 border-t pt-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Bed className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        Room Options
                      </span>
                    </div>
                    {hotel.rooms.map((room, roomIndex) => (
                      <div
                        key={roomIndex}
                        className="p-3 bg-muted/30 rounded-lg space-y-2"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-foreground">
                              {room.type}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                              <Users className="w-3 h-3" />
                              <span>{room.capacity}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">{room.price}</p>
                            <p className="text-xs text-muted-foreground">
                              × {room.nights} {room.nights === 1 ? "night" : "nights"}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {room.amenities.map((amenity) => {
                            const Icon = amenityIcons[amenity];
                            return (
                              <Badge
                                key={amenity}
                                variant="outline"
                                className="flex items-center gap-1 text-xs"
                              >
                                {Icon && <Icon className="w-3 h-3" />}
                                <span>{amenity}</span>
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
