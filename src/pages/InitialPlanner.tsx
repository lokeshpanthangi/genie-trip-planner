import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "@/components/planner/ChatMessage";
import ChatInput from "@/components/planner/ChatInput";
import LiveSummary from "@/components/planner/LiveSummary";
import ChatHistory from "@/components/planner/ChatHistory";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";

interface Message {
  content: string;
  isBot: boolean;
}

const InitialPlanner = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [summary, setSummary] = useState({
    destination: null as string | null,
    budget: null as string | null,
    travelers: null as number | null,
    dates: null as string | null,
  });
  const [step, setStep] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const handlePlanReady = () => {
    navigate("/planner");
  };

  return (
    <>
      <Helmet>
        <title>Plan Your Trip - TravelAI</title>
        <meta name="description" content="Chat with our AI to plan the perfect group trip." />
      </Helmet>

      <div className="min-h-screen gradient-hero flex">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-6 left-6 z-20 w-10 h-10 rounded-lg bg-card shadow-md flex items-center justify-center"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Left Sidebar - Chat History */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-10 w-64 lg:w-72 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <ChatHistory
            onNewChat={() => {
              setMessages([{ content: botResponses[0], isBot: true }]);
              setStep(0);
              setIsReady(false);
              setSummary({
                destination: null,
                budget: null,
                travelers: null,
                dates: null,
              });
            }}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
          {/* Chat Panel */}
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
            <div className="bg-card rounded-3xl shadow-medium p-6 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((msg, i) => (
                  <ChatMessage key={i} content={msg.content} isBot={msg.isBot} />
                ))}
              </div>
              <ChatInput onSend={handleSend} placeholder="Tell me about your dream trip..." />
            </div>
          </div>

          {/* Right Sidebar - Summary & Action */}
          <div className="lg:w-80 flex flex-col gap-4">
            <div className="sticky top-8">
              <LiveSummary {...summary} />
              
              {/* Let's Rock Button */}
              {isReady && (
                <div className="mt-4 animate-slide-up">
                  <Button
                    variant="rock"
                    onClick={handlePlanReady}
                    className="w-full text-lg py-6"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    LET'S ROCK
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InitialPlanner;
