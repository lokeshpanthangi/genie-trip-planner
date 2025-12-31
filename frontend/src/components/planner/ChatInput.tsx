import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export interface ChatInputRef {
  focus: () => void;
}

const ChatInput = forwardRef<ChatInputRef, ChatInputProps>(
  ({ onSend, placeholder = "Type your message...", disabled = false, autoFocus = true }, ref) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Expose focus method to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

  // Auto-focus on mount and when disabled changes to false
  useEffect(() => {
    if (autoFocus && !disabled) {
      inputRef.current?.focus();
    }
  }, [disabled, autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
      // Re-focus after sending
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        className="flex-1 h-12 px-4 rounded-xl border-2 border-border bg-background shadow-sm focus:bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none text-foreground placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-50 disabled:shadow-none"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
});

ChatInput.displayName = "ChatInput";

export default ChatInput;
