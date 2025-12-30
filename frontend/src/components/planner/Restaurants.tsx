import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users, Utensils } from "lucide-react";

const restaurants = [
  {
    name: "Bon Appetit",
    location: "Fort Road, Leh",
    cuisine: "Multi-cuisine",
    rating: 4.6,
    avgPrice: "₹800",
    timing: "8 AM - 10 PM",
    speciality: "Breakfast & Continental",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
  },
  {
    name: "The Tibetan Kitchen",
    location: "Main Bazaar",
    cuisine: "Tibetan",
    rating: 4.8,
    avgPrice: "₹600",
    timing: "11 AM - 9 PM",
    speciality: "Momos & Thukpa",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
  },
  {
    name: "Gesmo Restaurant",
    location: "Changspa Road",
    cuisine: "Continental & Indian",
    rating: 4.4,
    avgPrice: "₹700",
    timing: "7 AM - 10 PM",
    speciality: "Bakery & Pasta",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
  },
  {
    name: "Summer Harvest",
    location: "Nubra Valley",
    cuisine: "Local Ladakhi",
    rating: 4.5,
    avgPrice: "₹500",
    timing: "12 PM - 8 PM",
    speciality: "Traditional Cuisine",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
  },
  {
    name: "Pumpernickel German Bakery",
    location: "Changspa",
    cuisine: "European",
    rating: 4.7,
    avgPrice: "₹600",
    timing: "8 AM - 9 PM",
    speciality: "Fresh Baked Goods",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
  },
];

const Restaurants = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dining Recommendations</h2>
          <p className="text-sm text-muted-foreground mt-1">Top-rated restaurants for authentic flavors</p>
        </div>
        <Badge variant="secondary" className="text-base px-4 py-2 flex items-center gap-2">
          <Utensils className="w-4 h-4" />
          {restaurants.length} Places
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {restaurants.map((restaurant, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 p-4">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{restaurant.rating}</span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{restaurant.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">{restaurant.cuisine}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {restaurant.speciality}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{restaurant.timing}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-primary">{restaurant.avgPrice}</span>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
