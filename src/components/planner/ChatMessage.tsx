import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 animate-fade-in", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
          isBot
            ? "bg-muted/50 text-foreground rounded-tl-md border border-border/50"
            : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-tr-md shadow-lg shadow-emerald-500/20"
        )}
      >
        <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
          {content}
        </p>
        {timestamp && (
          <span className={cn("text-xs mt-1 block", isBot ? "text-muted-foreground" : "text-white/70")}>{timestamp}</span>
        )}
      </div>

      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
