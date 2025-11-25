import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=918247475914', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-gradient-secondary text-secondary-foreground p-4 rounded-full shadow-glow hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};
