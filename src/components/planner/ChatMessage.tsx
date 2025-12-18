import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 animate-slide-up", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 shadow-soft",
          isBot
            ? "bg-teal-light text-foreground rounded-tl-md"
            : "bg-sky-light text-foreground rounded-tr-md"
        )}
      >
        <p className="text-sm leading-relaxed">{content}</p>
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1 block">{timestamp}</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
