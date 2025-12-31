import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Heart, 
  Mountain, 
  Sun, 
  Wallet,
  Camera,
  Phone,
  FileText,
  Lightbulb,
  ChevronRight,
  Shield,
  Thermometer,
  Wifi,
  CreditCard,
  Smartphone,
  Banknote,
  IdCard,
  FileCheck,
  Sunrise,
  Battery,
  HardDrive,
  ShieldCheck
} from "lucide-react";

interface TipCategory {
  category: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  gradientFrom: string;
  items: { title: string; description: string }[];
}

const tips: TipCategory[] = [
  {
    category: "Health & Safety",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    gradientFrom: "from-rose-500",
    items: [
      { title: "Acclimatize First", description: "Rest 24-48 hours in Leh before high-altitude areas" },
      { title: "Altitude Medication", description: "Carry Diamox - consult your doctor before the trip" },
      { title: "Stay Hydrated", description: "Drink 3-4 liters of water daily" },
      { title: "Avoid Alcohol", description: "No alcohol or smoking for first 2 days" },
      { title: "Take It Easy", description: "Walk slowly and avoid overexertion" },
    ],
  },
  {
    category: "What to Pack",
    icon: Mountain,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    gradientFrom: "from-sky-500",
    items: [
      { title: "Warm Layers", description: "Thermals, fleece jacket, and down jacket" },
      { title: "Sun Protection", description: "SPF 50+ sunscreen, sunglasses, lip balm" },
      { title: "Footwear", description: "Comfortable trekking shoes with good grip" },
      { title: "Power Backup", description: "Power bank & extra batteries (cold drains fast)" },
      { title: "First Aid", description: "Pain relievers, digestion aids, band-aids" },
    ],
  },
  {
    category: "Weather & Climate",
    icon: Sun,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    gradientFrom: "from-amber-500",
    items: [
      { title: "Temperature Range", description: "August: Day 15-20°C, Night 5-10°C" },
      { title: "Rain Possibility", description: "Expect occasional showers - carry rain jacket" },
      { title: "UV Protection", description: "Strong UV rays at altitude - protect skin" },
      { title: "Night Temps", description: "Drops significantly at night and in valleys" },
    ],
  },
  {
    category: "Money & Connectivity",
    icon: Wallet,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    gradientFrom: "from-emerald-500",
    items: [
      { title: "Cash is King", description: "ATMs in Leh only - carry enough for remote areas" },
      { title: "Network Coverage", description: "BSNL & Postpaid work better than prepaid" },
      { title: "Limited Internet", description: "Connectivity is sparse in remote areas" },
      { title: "Small Change", description: "Keep small denominations for local purchases" },
    ],
  },
  {
    category: "Important Documents",
    icon: FileText,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    gradientFrom: "from-violet-500",
    items: [
      { title: "Inner Line Permit", description: "Required for Nubra, Pangong & Tso Moriri" },
      { title: "ID Proof", description: "Valid Aadhar or Passport" },
      { title: "Vaccination Cert", description: "COVID certificates if required" },
      { title: "Travel Insurance", description: "Keep documents handy" },
    ],
  },
  {
    category: "Photography Tips",
    icon: Camera,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    gradientFrom: "from-pink-500",
    items: [
      { title: "Golden Hours", description: "Best light early morning & late afternoon" },
      { title: "Storage Ready", description: "Extra memory cards and batteries" },
      { title: "Protect Gear", description: "Shield camera from dust and extreme cold" },
      { title: "Be Respectful", description: "Ask before photographing people/monasteries" },
    ],
  },
];

const emergencyContacts = [
  { name: "Police Emergency", number: "100", alt: "+91-1982-252018", icon: Shield },
  { name: "Medical Emergency", number: "SNM Hospital", alt: "+91-1982-252014", icon: Heart },
  { name: "Tourist Info", number: "+91-1982-252297", alt: null, icon: Phone },
  { name: "Roadside Help", number: "+91-1982-252108", alt: null, icon: ShieldCheck },
];

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const currentTip = tips[selectedCategory];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Travel Tips & Essentials</h2>
            <p className="text-sm text-muted-foreground">Everything you need to know</p>
          </div>
        </div>
        <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">
          {tips.length} Categories
        </Badge>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${tip.gradientFrom} to-${tip.gradientFrom.replace('from-', '')}/80 text-white shadow-lg`
                  : "bg-card hover:bg-muted border border-border"
              }`}
            >
              <Icon className={`w-4 h-4 ${selectedCategory === index ? "text-white" : tip.color}`} />
              <span className="font-medium whitespace-nowrap text-sm">{tip.category}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
        {/* Category Header */}
        <div className={`p-6 bg-gradient-to-r ${currentTip.bgColor} to-transparent`}>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl ${currentTip.bgColor} flex items-center justify-center`}>
              <currentTip.icon className={`w-6 h-6 ${currentTip.color}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{currentTip.category}</h3>
              <p className="text-sm text-muted-foreground">{currentTip.items.length} essential tips</p>
            </div>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentTip.items.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl ${currentTip.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <span className={`text-sm font-bold ${currentTip.color}`}>{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gradient-to-br from-amber-500/10 via-orange/5 to-transparent rounded-3xl border border-amber-500/20 p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Emergency Contacts</h3>
            <p className="text-sm text-muted-foreground">Save these numbers before your trip</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border hover:shadow-md transition-all"
              >
                <Icon className="w-5 h-5 text-amber-600 mb-3" />
                <p className="font-semibold text-foreground text-sm">{contact.name}</p>
                <p className="text-teal font-bold text-sm mt-1">{contact.number}</p>
                {contact.alt && (
                  <p className="text-xs text-muted-foreground mt-0.5">{contact.alt}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tips;
