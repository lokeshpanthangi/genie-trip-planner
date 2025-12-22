import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Clock, MapPin } from "lucide-react";
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
}

const ChatHistory = ({ onNewChat, onSelectChat }: ChatHistoryProps) => {
  return (
    <div className="h-full flex flex-col bg-card border-r border-border">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2"
          variant="default"
        >
          <Plus className="w-4 h-4" />
          New Trip Plan
        </Button>
      </div>

      {/* Chat Sessions List */}
      <ScrollArea className="flex-1 p-2">
        <div className="space-y-2">
          {chatSessions.map((session) => (
            <Card
              key={session.id}
              className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                session.active
                  ? "bg-primary/10 border-primary/50"
                  : "bg-card hover:bg-muted/50"
              }`}
              onClick={() => onSelectChat?.(session.id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground truncate">
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{session.destination}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{session.timestamp}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-border space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => window.location.href = '/auth'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ChatHistory;
