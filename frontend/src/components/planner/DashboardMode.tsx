import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import Timeline from "./Timeline";
import PlannerNavbar, { NavSection } from "./PlannerNavbar";
import BudgetTravel from "./BudgetTravel";
import Hotels from "./Hotels";
import Tips from "./Tips";
import Overview from "./Overview";
import UserDropdown from "./UserDropdown";
import { Plane, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface Message {
  content: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  { content: "Hi! 👋 Where are you dreaming of going? And what's your total budget for the trip?", isBot: true },
  { content: "We're 4 friends planning a Ladakh trip with around ₹45,000 total budget", isBot: false },
  { content: "Ladakh sounds incredible! When are you planning to go?", isBot: true },
  { content: "Mid August, about 5 days", isBot: false },
  { content: "Perfect! Any specific interests in your group?", isBot: true },
  { content: "Mix of adventure lovers and those who want to visit monasteries", isBot: false },
  { content: "I've crafted the perfect balanced itinerary! Check out your personalized plan on the dashboard. You can ask me to adjust anything! 🎉", isBot: true },
];

const DashboardMode = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [activeSection, setActiveSection] = useState<NavSection>("budget");
  const [isChatExpanded, setIsChatExpanded] = useState(true);

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, { content: message, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          content: "Got it! I've updated the itinerary based on your request. Check out the changes in the timeline!", 
          isBot: true 
        },
      ]);
    }, 1000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "budget":
        return <BudgetTravel />;
      case "daily-plan":
        return <Timeline />;
      case "hotels":
        return <Hotels />;
      case "tips":
        return <Tips />;
      case "overview":
        return <Overview />;
      default:
        return <BudgetTravel />;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Back Button + Title */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground">Ladakh Adventure</h1>
                  <p className="text-xs text-muted-foreground">4 Friends • 5 Days • ₹45,000</p>
                </div>
              </div>
            </div>

            {/* Right Side - Theme Toggle + User Dropdown */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="h-8 w-px bg-border hidden md:block" />
              <UserDropdown />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Chat (Expandable/Collapsible) */}
          <div 
            className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
              isChatExpanded ? "lg:w-96" : "lg:w-16"
            }`}
          >
            <div className="bg-card rounded-2xl shadow-soft sticky top-24 max-h-[calc(100vh-120px)] flex flex-col animate-slide-in-right">
              {isChatExpanded ? (
                <>
                  <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="font-semibold text-foreground text-sm">Chat Assistant</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsChatExpanded(false)}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 p-4 pr-2 max-h-[400px]">
                    {messages.map((msg, i) => (
                      <ChatMessage key={i} content={msg.content} isBot={msg.isBot} />
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <ChatInput onSend={handleSend} placeholder="Ask to adjust..." />
                  </div>
                </>
              ) : (
                <div className="p-4 flex flex-col items-center gap-4">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => setIsChatExpanded(true)}
                    className="h-10 w-10 p-0 rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                  <div className="writing-vertical text-xs font-medium text-muted-foreground">
                    Chat
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Content with Navbar */}
          <div className="flex-1 space-y-6 animate-fade-in min-w-0">
            <PlannerNavbar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMode;
