import { Button } from "@/components/ui/button";
import eventStall from "@/assets/event-stall.jpg";
import { PartyPopper, Camera, Sparkles, Gift } from "lucide-react";

export const EventServices = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Instant Clicking",
      description: "Professional photo capture"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Live Editing",
      description: "Custom designs on-site"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Instant Printing",
      description: "Take-away gifts immediately"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
            <PartyPopper className="w-10 h-10" />
            Live Photo-Magnet Stalls
          </h2>
          <div className="h-1 w-24 bg-background mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-scale-in">
            <img 
              src={eventStall} 
              alt="Event Stall"
              className="rounded-2xl shadow-glow w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-6 hover:bg-background/20 transition-all duration-300"
                >
                  <div className="text-secondary">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="opacity-90">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-lg opacity-95">
                Perfect for <span className="font-bold">weddings</span>, <span className="font-bold">birthdays</span>, 
                <span className="font-bold"> receptions</span>, and <span className="font-bold">corporate events</span>
              </p>
              <p className="text-lg opacity-95">
                ✨ Attractive stall setup • 🎁 Instant take-away gifts
              </p>
            </div>

            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Book Your Event Stall
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
