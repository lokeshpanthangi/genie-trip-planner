import { Card } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Heart, 
  Mountain, 
  Sun, 
  Droplets, 
  Pill, 
  Wallet,
  Camera,
  Phone,
  FileText
} from "lucide-react";

const tips = [
  {
    category: "Health & Safety",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    items: [
      "Acclimatize for 24-48 hours in Leh before heading to high-altitude areas",
      "Carry altitude sickness medication (Diamox) - consult a doctor before",
      "Stay hydrated - drink at least 3-4 liters of water daily",
      "Avoid alcohol and smoking for the first 2 days",
      "Walk slowly and avoid overexertion",
    ],
  },
  {
    category: "What to Pack",
    icon: Mountain,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: [
      "Warm layers: thermals, fleece jacket, down jacket",
      "Sunscreen (SPF 50+), sunglasses, and lip balm",
      "Comfortable trekking shoes with good grip",
      "Power bank and extra batteries (cold drains batteries fast)",
      "Basic medicines: pain relievers, digestion aids, band-aids",
    ],
  },
  {
    category: "Weather & Climate",
    icon: Sun,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    items: [
      "August temperatures: Day 15-20°C, Night 5-10°C",
      "Expect occasional rain showers - carry a rain jacket",
      "UV rays are strong at high altitude - protect your skin",
      "Temperature drops significantly at night and in valleys",
    ],
  },
  {
    category: "Money & Connectivity",
    icon: Wallet,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    items: [
      "ATMs available in Leh, but carry enough cash for remote areas",
      "Network: BSNL and Postpaid connections work better than others",
      "Internet connectivity is limited in remote areas",
      "Keep small denominations for local purchases",
    ],
  },
  {
    category: "Important Documents",
    icon: FileText,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    items: [
      "Inner Line Permit for Nubra Valley, Pangong, and Tso Moriri",
      "Valid ID proof (Aadhar/Passport)",
      "COVID vaccination certificates (if required)",
      "Travel insurance documents",
    ],
  },
  {
    category: "Photography Tips",
    icon: Camera,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    items: [
      "Best light for photos: Early morning and late afternoon",
      "Carry extra memory cards and batteries",
      "Protect camera from dust and extreme cold",
      "Respect local customs - ask before photographing people or monasteries",
    ],
  },
];

const Tips = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Travel Tips & Essentials</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Important information for a safe and memorable Ladakh experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tips.map((tipCategory, index) => {
          const Icon = tipCategory.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${tipCategory.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${tipCategory.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{tipCategory.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {tipCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {/* Emergency Contacts Card */}
      <Card className="p-6 border-2 border-yellow-500/20 bg-yellow-500/5">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-foreground">Police Emergency</p>
                <p className="text-muted-foreground">100 or +91-1982-252018</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Medical Emergency</p>
                <p className="text-muted-foreground">SNM Hospital: +91-1982-252014</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Tourist Information</p>
                <p className="text-muted-foreground">+91-1982-252297</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Roadside Assistance</p>
                <p className="text-muted-foreground">+91-1982-252108</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Tips;
