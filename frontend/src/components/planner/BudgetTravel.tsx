import { useState } from "react";
import InteractiveMap from "./InteractiveMap";
import BudgetDashboard from "./BudgetDashboard";
import TransportSelector from "./TransportSelector";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Plane, 
  MapPin, 
  IndianRupee, 
  FileCheck, 
  CheckCircle2,
  Bus
} from "lucide-react";

const transportOptions = [
  {
    mode: "Flight",
    route: "Delhi → Leh",
    cost: "₹8,000",
    duration: "1.5 hours",
    icon: Plane,
    details: "Book 2 months in advance for best rates",
  },
  {
    mode: "Private Vehicle",
    route: "Leh Local + Day Trips",
    cost: "₹12,000",
    duration: "5 days",
    icon: Car,
    details: "Innova or similar with driver",
  },
];

const documentsChecklist = [
  { name: "Valid ID Proof (Aadhar/Passport)", status: true },
  { name: "Inner Line Permit - Nubra Valley", status: true },
  { name: "Inner Line Permit - Pangong Lake", status: true },
  { name: "Travel Insurance Papers", status: true },
  { name: "Hotel Booking Confirmations", status: true },
  { name: "Flight Tickets (Print & Digital)", status: true },
  { name: "COVID Vaccination Certificate", status: false },
  { name: "Emergency Contact List", status: true },
];

const permitsAndFees = [
  { name: "Inner Line Permit (ILP) - Nubra Valley", cost: "₹400", validity: "7 days", required: true },
  { name: "Inner Line Permit (ILP) - Pangong Lake", cost: "₹400", validity: "7 days", required: true },
  { name: "Khardung La Entry", cost: "₹20", validity: "1 day", required: true },
  { name: "Thiksey Monastery Entry", cost: "₹30", validity: "1 day", required: false },
  { name: "Hemis Monastery Entry", cost: "₹50", validity: "1 day", required: false },
  { name: "Shey Palace Entry", cost: "₹20", validity: "1 day", required: false },
  { name: "Photography Charges (Monasteries)", cost: "₹100", validity: "Per location", required: false },
];

const currencyInfo = {
  exchangeRate: "₹1 = ₹1 (INR)",
  recommendedCash: "₹10,000 - ₹15,000",
  atmAvailability: "Available in Leh, limited in remote areas",
  dailyBudget: "₹2,000 - ₹3,000 per person",
  tips: [
    "Carry small denominations (₹10, ₹20, ₹50)",
    "BSNL ATMs are most reliable in Leh",
    "Card payments limited outside Leh city",
    "Keep emergency cash separately",
  ],
};

const BudgetTravel = () => {
  const [selectedRoute, setSelectedRoute] = useState<{
    from: string;
    to: string;
    type: "flight" | "train" | "bus" | "car";
    coordinates: [number, number][];
  } | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Budget & Travel Planning</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Financial overview and route visualization
        </p>
      </div>

      {/* Map Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <InteractiveMap selectedRoute={selectedRoute} />
        </div>
        <div className="xl:col-span-1">
          <BudgetDashboard />
        </div>
      </div>

      {/* Transportation Selector */}
      <TransportSelector onRouteSelect={setSelectedRoute} />

      {/* Transportation Options */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Transportation Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transportOptions.map((transport, index) => {
            const Icon = transport.icon;
            return (
              <Card key={index} className="p-4 border-2 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{transport.mode}</h4>
                        <p className="text-xs text-muted-foreground">{transport.route}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">{transport.cost}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Duration: {transport.duration}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {transport.details}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* Documents and Currency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Travel Documents Checklist */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-primary" />
            Documents Checklist
          </h3>
            <div className="space-y-2">
              {documentsChecklist.map((doc, index) => (
                <div key={index} className="flex items-center gap-2 p-2.5 bg-muted/30 rounded-lg">
                  <CheckCircle2 
                    className={`w-4 h-4 flex-shrink-0 ${
                      doc.status ? "text-green-500" : "text-muted-foreground"
                    }`} 
                  />
                  <span className={`text-xs ${doc.status ? "text-foreground" : "text-muted-foreground"}`}>
                    {doc.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>

        {/* Local Currency Info */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-primary" />
            Currency Guide
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Recommended Cash</p>
                <p className="text-base font-semibold text-foreground">{currencyInfo.recommendedCash}</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Daily Budget</p>
                <p className="text-base font-semibold text-foreground">{currencyInfo.dailyBudget}</p>
              </div>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-xs font-medium text-foreground mb-1">ATM Availability</p>
              <p className="text-xs text-muted-foreground">{currencyInfo.atmAvailability}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">💡 Money Tips</p>
              <ul className="space-y-1.5">
                {currencyInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Permits & Entry Fees */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-primary" />
          Permits & Entry Fees
        </h3>
        <div className="space-y-3">
          {permitsAndFees.map((permit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{permit.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Valid for: {permit.validity}
                      </p>
                    </div>
                    <Badge variant={permit.required ? "default" : "outline"} className="text-xs whitespace-nowrap">
                      {permit.cost}
                    </Badge>
                  </div>
                  {permit.required && (
                    <Badge variant="destructive" className="text-xs mt-2">Required</Badge>
                  )}
                </div>
              </div>
            ))}
            <div className="pt-3 border-t">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total Permits & Fees:</span>
                <Badge className="text-base px-3 py-1">₹1,020</Badge>
              </div>
            </div>
          </div>
        </Card>


    </div>
  );
};


export default BudgetTravel;
