import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 animate-slide-up", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <Avatar className="w-8 h-8 mt-1 shrink-0">
          <AvatarFallback className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 shadow-soft",
          isBot
            ? "bg-teal-light text-foreground rounded-tl-md"
            : "bg-sky-light text-foreground rounded-tr-md"
        )}
      >
        <p className="text-sm leading-relaxed break-words whitespace-pre-wrap overflow-wrap-anywhere">
          {content}
        </p>
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1 block">{timestamp}</span>
        )}
      </div>

      {!isBot && (
        <Avatar className="w-8 h-8 mt-1 shrink-0">
          <AvatarFallback className="bg-gradient-to-br from-sky-500 to-blue-600 text-white">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
