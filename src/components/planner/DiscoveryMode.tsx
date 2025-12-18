import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LiveSummary from "./LiveSummary";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface Message {
  content: string;
  isBot: boolean;
}

interface DiscoveryModeProps {
  onReady: () => void;
}

const DiscoveryMode = ({ onReady }: DiscoveryModeProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [summary, setSummary] = useState({
    destination: null as string | null,
    budget: null as string | null,
    travelers: null as number | null,
    dates: null as string | null,
  });
  const [step, setStep] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const botResponses = [
    "Hi! 👋 Where are you dreaming of going? And what's your total budget for the trip?",
    "Ladakh sounds incredible! The mountains, monasteries, and Pangong Lake are breathtaking. ₹45,000 is a great budget for 4 friends. When are you planning to go?",
    "Perfect! A 5-day trip in August. Now tell me about your group — are there any specific interests? Adventurers, foodies, or culture enthusiasts?",
    "Got it! Looks like you have a mix — adventure seekers and culture lovers. I've crafted the perfect balanced itinerary. Ready to see the magic?",
  ];

  useEffect(() => {
    // Initial bot message
    setTimeout(() => {
      setMessages([{ content: botResponses[0], isBot: true }]);
    }, 500);
  }, []);

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, { content: message, isBot: false }]);

    // Simulate bot response and update summary based on step
    setTimeout(() => {
      if (step === 0) {
        setSummary((prev) => ({
          ...prev,
          destination: "Ladakh",
          budget: "₹45,000",
          travelers: 4,
        }));
        setMessages((prev) => [...prev, { content: botResponses[1], isBot: true }]);
        setStep(1);
      } else if (step === 1) {
        setSummary((prev) => ({
          ...prev,
          dates: "August 15-20, 2024",
        }));
        setMessages((prev) => [...prev, { content: botResponses[2], isBot: true }]);
        setStep(2);
      } else if (step === 2) {
        setMessages((prev) => [...prev, { content: botResponses[3], isBot: true }]);
        setStep(3);
        setIsReady(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Chat Panel */}
          <div className="flex-1 flex flex-col">
            <div className="bg-card rounded-3xl shadow-medium p-6 flex-1 flex flex-col min-h-[500px]">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((msg, i) => (
                  <ChatMessage key={i} content={msg.content} isBot={msg.isBot} />
                ))}
              </div>
              <ChatInput 
                onSend={handleSend} 
                placeholder="Tell me about your dream trip..."
              />
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:w-80">
            <div className="sticky top-8">
              <LiveSummary {...summary} />
            </div>
          </div>
        </div>

        {/* Let's Rock Button */}
        {isReady && (
          <div className="flex justify-center mt-12 animate-slide-up">
            <Button 
              variant="rock" 
              onClick={onReady}
              className="text-xl"
            >
              <Rocket className="w-6 h-6 mr-2" />
              LET'S ROCK
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoveryMode;
