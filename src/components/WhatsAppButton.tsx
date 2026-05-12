import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  size?: "default" | "lg";
  className?: string;
}

const WhatsAppButton = ({ size = "default", className = "" }: WhatsAppButtonProps) => {
  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-lg gap-3" : "px-5 py-2.5 text-sm gap-2";

  return (
    <a
      href="https://wa.me/5545998101887?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-semibold rounded-full transition-all duration-200 ${sizeClasses} ${className}`}
      style={{
        background: "var(--navy)",
        color: "var(--silver)",
        border: "1px solid var(--navy-xl)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "var(--navy-l)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--silver-dim)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "var(--navy)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--navy-xl)";
      }}
    >
      <MessageCircle className={size === "lg" ? "w-6 h-6" : "w-4 h-4"} />
      Falar no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
