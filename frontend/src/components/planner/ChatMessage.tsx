import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp?: string;
}

const ChatMessage = ({ content, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("animate-fade-in", isBot ? "text-left" : "text-right")}>
      {isBot ? (
        // AI Message - rendered markdown
        <div className="max-w-[90%] inline-block text-left">
          <div className="prose prose-base dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-headings:my-3 prose-strong:text-foreground prose-strong:font-semibold prose-p:text-base prose-li:text-base">
            <ReactMarkdown
              components={{
                // Custom styling for markdown elements
                p: ({ children }) => (
                  <p className="text-foreground text-base mb-2 last:mb-0">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-foreground/90">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-1 my-2 text-foreground text-base">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-1 my-2 text-foreground text-base">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-foreground text-base">{children}</li>
                ),
                h1: ({ children }) => (
                  <h1 className="text-xl font-bold text-foreground mt-4 mb-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-bold text-foreground mt-3 mb-2">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-semibold text-foreground mt-3 mb-1">{children}</h3>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-emerald-500 pl-3 italic text-muted-foreground my-2">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          {timestamp && (
            <span className="text-xs text-muted-foreground mt-2 block">{timestamp}</span>
          )}
        </div>
      ) : (
        // User Message - subtle bubble
        <div className="inline-block max-w-[80%] text-left">
          <div className="px-4 py-2.5 rounded-2xl bg-muted/60 border border-border/50">
            <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
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
