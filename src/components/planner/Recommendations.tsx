import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, UtensilsCrossed, ArrowLeftRight, Star } from "lucide-react";

const recommendations = [
  {
    type: "hotel",
    name: "The Grand Dragon Ladakh",
    rating: 4.5,
    price: "₹4,500/night",
    image: "🏨",
    alternative: "Hotel Ladakh Sarai - ₹3,200/night",
  },
  {
    type: "hotel",
    name: "Pangong Lake Camps",
    rating: 4.3,
    price: "₹2,800/night",
    image: "⛺",
    alternative: "Basic Camps - ₹1,500/night",
  },
  {
    type: "restaurant",
    name: "Bon Appetit",
    rating: 4.6,
    price: "₹800/meal",
    image: "🍽️",
    alternative: "Local Dhaba - ₹200/meal",
  },
  {
    type: "restaurant",
    name: "Tibetan Kitchen",
    rating: 4.4,
    price: "₹500/meal",
    image: "🥟",
    alternative: "Street Food - ₹150/meal",
  },
];

const Recommendations = () => {
  return (
    <Card className="bg-card border-0 shadow-soft rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Star className="w-5 h-5 text-teal" />
          Top Picks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{item.image}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {item.type === "hotel" ? (
                      <Bed className="w-3 h-3 text-teal" />
                    ) : (
                      <UtensilsCrossed className="w-3 h-3 text-sky" />
                    )}
                    <span className="text-xs text-muted-foreground capitalize">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-teal">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs h-8 border-teal/30 text-teal hover:bg-teal hover:text-primary-foreground"
                >
                  <ArrowLeftRight className="w-3 h-3 mr-1" />
                  Swap & Save
                </Button>
                <p className="text-xs text-muted-foreground mt-1 text-center truncate">
                  {item.alternative}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Recommendations;
