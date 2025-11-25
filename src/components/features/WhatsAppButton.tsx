import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    let message = `👋 *Hello Photo Magnet Factory!*\n\n`;
    message += `I'd like to know more about your products and services.\n\n`;
    message += `Please help me with:\n`;
    message += `📦 Product information\n`;
    message += `💰 Pricing details\n`;
    message += `🚚 Delivery options\n`;
    message += `📅 Availability\n\n`;
    message += `Thank you! 🙏`;
    window.open(
      `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-gradient-secondary text-secondary-foreground p-4 sm:p-5 md:p-6 rounded-full shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
    </button>
  );
};
