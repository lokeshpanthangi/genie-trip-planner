import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "@/components/planner/ChatMessage";
import ChatInput from "@/components/planner/ChatInput";
import LiveSummary from "@/components/planner/LiveSummary";
import ChatHistory from "@/components/planner/ChatHistory";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Menu, 
  Plane, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Helmet } from "react-helmet";

const API_BASE_URL = "http://localhost:8000";

interface Message {
  content: string;
  isBot: boolean;
}

interface TripSummary {
  destination: string | null;
  budget: string | null;
  travelers: number | null;
  dates: string | null;
  source: string | null;
  no_of_days: number | null;
}

interface APIResponse {
  response: string;
  no_of_people: number | null;
  budget: number | null;
  source: string | null;
  destination: string | null;
  no_of_days: number | null;
  start_date: string | null;
  end_date: string | null;
  kids: boolean;
  women_pregnant: boolean;
  extra_info: string[] | null;
  completed_plan: boolean;
  summary: string | null;
}

// Generate a unique session ID
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const InitialPlanner = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [summary, setSummary] = useState<TripSummary>({
    destination: null,
    budget: null,
    travelers: null,
    dates: null,
    source: null,
    no_of_days: null,
  });
  const [isReady, setIsReady] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize session and send greeting
  useEffect(() => {
    const initSession = async () => {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);
      
      // Send initial greeting request
      setIsTyping(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/init_agent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: newSessionId,
            user_input: "Hello, I want to plan a trip",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to connect to AI service");
        }

        const data: APIResponse = await response.json();
        setMessages([{ content: data.response, isBot: true }]);
        updateSummaryFromResponse(data);
      } catch (err) {
        setError("Unable to connect to AI service. Please make sure the backend is running.");
        // Fallback greeting
        setMessages([{ 
          content: "Hi! 👋 I'm your AI travel assistant. Where would you like to go? Tell me about your destination, budget, number of travelers, and travel dates!", 
          isBot: true 
        }]);
      } finally {
        setIsTyping(false);
      }
    };

    initSession();
  }, []);

  const updateSummaryFromResponse = (data: APIResponse) => {
    setSummary(prev => ({
      destination: data.destination || prev.destination,
      budget: data.budget ? `₹${data.budget.toLocaleString()}` : prev.budget,
      travelers: data.no_of_people || prev.travelers,
      dates: formatDates(data.start_date, data.end_date, data.no_of_days) || prev.dates,
      source: data.source || prev.source,
      no_of_days: data.no_of_days || prev.no_of_days,
    }));

    if (data.completed_plan) {
      setIsReady(true);
    }
  };

  const formatDates = (start: string | null, end: string | null, days: number | null): string | null => {
    if (start && end) {
      return `${start} - ${end}`;
    } else if (start && days) {
      return `${start} (${days} days)`;
    } else if (days) {
      return `${days} days`;
    }
    return null;
  };

  const handleSend = async (message: string) => {
    // Add user message immediately
    setMessages(prev => [...prev, { content: message, isBot: false }]);
    setIsTyping(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/init_agent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          user_input: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data: APIResponse = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, { content: data.response, isBot: true }]);
      
      // Update summary with extracted information
      updateSummaryFromResponse(data);

    } catch (err) {
      setError("Failed to send message. Please try again.");
      setMessages(prev => [...prev, { 
        content: "I'm having trouble connecting right now. Please try again in a moment.", 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handlePlanReady = () => {
    // Store summary in localStorage for the planner page
    localStorage.setItem("tripSummary", JSON.stringify(summary));
    localStorage.setItem("sessionId", sessionId);
    navigate("/planner");
  };

  const handleNewChat = () => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    setMessages([]);
    setIsReady(false);
    setError(null);
    setSummary({
      destination: null,
      budget: null,
      travelers: null,
      dates: null,
      source: null,
      no_of_days: null,
    });
    
    // Send initial greeting for new session
    setIsTyping(true);
    fetch(`${API_BASE_URL}/api/init_agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: newSessionId,
        user_input: "Hello, I want to plan a trip",
      }),
    })
      .then(res => res.json())
      .then((data: APIResponse) => {
        setMessages([{ content: data.response, isBot: true }]);
      })
      .catch(() => {
        setMessages([{ 
          content: "Hi! 👋 I'm your AI travel assistant. Where would you like to go?", 
          isBot: true 
        }]);
      })
      .finally(() => {
        setIsTyping(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Plan Your Trip - TravelAI</title>
        <meta name="description" content="Chat with our AI to plan the perfect group trip." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar - Chat History */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <ChatHistory
            onNewChat={handleNewChat}
            onClose={() => setIsSidebarOpen(false)}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <header className="flex-shrink-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
            <div className="flex items-center justify-between px-4 lg:px-6 h-16">
              <div className="flex items-center gap-3">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden w-10 h-10 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Plane className="w-4 h-4 text-white transform -rotate-45" />
                  </div>
                  <span className="font-bold text-foreground hidden sm:block">TravelAI</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">AI Planner</span>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 lg:p-6 min-h-0">
            {/* Chat Panel */}
            <div className="flex-1 flex flex-col min-w-0 min-h-0">
              <div className="flex-1 flex flex-col bg-gradient-to-b from-muted/30 to-background rounded-2xl border border-border shadow-xl shadow-black/5 dark:shadow-black/20 min-h-0 overflow-hidden">
                {/* Chat Messages */}
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 scrollbar-hide"
                >
                  {/* Welcome Message */}
                  {messages.length === 0 && !isTyping && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Start Planning Your Trip</h3>
                      <p className="text-muted-foreground max-w-sm">
                        Tell me about your dream destination, budget, and travel dates. I'll create the perfect itinerary for you!
                      </p>
                    </div>
                  )}

                  {messages.map((msg, i) => (
                    <ChatMessage key={i} content={msg.content} isBot={msg.isBot} />
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5 px-3 py-2">
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="flex-shrink-0 p-4 lg:p-6 bg-background/80 backdrop-blur-sm">
                  <ChatInput onSend={handleSend} placeholder="Tell me about your dream trip..." disabled={isTyping} />
                </div>
              </div>
            </div>

            {/* Right Sidebar - Summary & Action */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-4">
                <LiveSummary {...summary} />
                
                {/* Let's Rock Button */}
                {isReady && (
                  <div className="animate-slide-up">
                    <Button
                      onClick={handlePlanReady}
                      className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 rounded-xl group"
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      View My Itinerary
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {/* Tips Card */}
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-500" />
                    Pro Tips
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-500">•</span>
                      Be specific about your interests
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-500">•</span>
                      Mention dietary preferences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-500">•</span>
                      Share any mobility needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InitialPlanner;
