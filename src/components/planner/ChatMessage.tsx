import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("animate-fade-in", isBot ? "text-left" : "text-right")}>
      {isBot ? (
        // AI Message - clean text without bubble
        <div className="max-w-[90%] inline-block text-left">
          <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
          {timestamp && (
            <span className="text-xs text-muted-foreground mt-1 block">{timestamp}</span>
          )}
        </div>
      ) : (
        // User Message - subtle bubble
        <div className="inline-block max-w-[80%] text-left">
          <div className="px-4 py-2.5 rounded-2xl bg-muted/60 border border-border/50">
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
              {content}
            </p>
          </div>
          {timestamp && (
            <span className="text-xs text-muted-foreground mt-1 block text-right">{timestamp}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
