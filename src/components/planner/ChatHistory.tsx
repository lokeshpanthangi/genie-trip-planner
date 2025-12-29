import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Clock, MapPin, X, Plane, LogOut, Settings } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSession {
  id: string;
  title: string;
  destination: string;
  timestamp: string;
  active?: boolean;
}

const chatSessions: ChatSession[] = [
  {
    id: "1",
    title: "Ladakh Adventure",
    destination: "Leh, Ladakh",
    timestamp: "Today, 2:30 PM",
    active: true,
  },
  {
    id: "2",
    title: "Goa Beach Trip",
    destination: "Goa",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    title: "Kerala Backwaters",
    destination: "Alleppey, Kerala",
    timestamp: "Dec 18",
  },
  {
    id: "4",
    title: "Rajasthan Heritage",
    destination: "Jaipur, Rajasthan",
    timestamp: "Dec 15",
  },
];

interface ChatHistoryProps {
  onNewChat?: () => void;
  onSelectChat?: (id: string) => void;
  onClose?: () => void;
}

const ChatHistory = ({ onNewChat, onSelectChat, onClose }: ChatHistoryProps) => {
  return (
    <div className="h-full flex flex-col bg-background border-r border-border/50">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Plane className="w-4 h-4 text-white transform -rotate-45" />
            </div>
            <span className="font-bold text-foreground">TravelAI</span>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="lg:hidden w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <Button
          onClick={onNewChat}
          className="w-full h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 rounded-xl"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Trip Plan
        </Button>
      </div>

      {/* Chat Sessions List */}
      <ScrollArea className="flex-1 p-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">
          Recent Trips
        </p>
        <div className="space-y-1">
          {chatSessions.map((session) => (
            <button
              key={session.id}
              className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                session.active
                  ? "bg-emerald-500/10 border border-emerald-500/20"
                  : "hover:bg-muted/50"
              }`}
              onClick={() => onSelectChat?.(session.id)}
            >
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  session.active 
                    ? "bg-gradient-to-br from-emerald-500 to-teal-600" 
                    : "bg-muted"
                }`}>
                  <MessageSquare className={`w-4 h-4 ${session.active ? "text-white" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm truncate ${
                    session.active ? "text-foreground" : "text-foreground"
                  }`}>
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{session.destination}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{session.timestamp}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-border/50 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-white">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
        <Button
          variant="outline"
          className="w-full h-10 rounded-xl border-border/50 text-muted-foreground hover:text-destructive hover:border-destructive/50 hover:bg-destructive/5 transition-all"
          onClick={() => window.location.href = '/auth'}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ChatHistory;
