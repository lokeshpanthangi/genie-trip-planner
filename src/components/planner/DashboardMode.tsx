import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import MapPlaceholder from "./MapPlaceholder";
import Timeline from "./Timeline";
import BudgetDashboard from "./BudgetDashboard";
import Recommendations from "./Recommendations";
import { Plane } from "lucide-react";

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
  const [messages, setMessages] = useState<Message[]>(initialMessages);

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

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Chat */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-card rounded-2xl shadow-soft p-4 sticky top-24 max-h-[calc(100vh-120px)] flex flex-col animate-slide-in-right">
              <h2 className="font-semibold text-foreground mb-4 text-sm">Chat Context</h2>
              <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 max-h-[400px]">
                {messages.map((msg, i) => (
                  <ChatMessage key={i} content={msg.content} isBot={msg.isBot} />
                ))}
              </div>
              <ChatInput onSend={handleSend} placeholder="Ask to adjust..." />
            </div>
          </div>

          {/* Right Panel - Dashboard */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <MapPlaceholder />
              <Timeline />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <BudgetDashboard />
              <Recommendations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMode;
