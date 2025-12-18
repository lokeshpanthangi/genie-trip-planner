import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

const ChatInput = ({ onSend, placeholder = "Type your message..." }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="flex-1 h-12 rounded-xl border-border bg-background focus:border-teal focus:ring-teal/20"
      />
      <Button type="submit" variant="teal" size="icon" className="h-12 w-12 rounded-xl">
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
