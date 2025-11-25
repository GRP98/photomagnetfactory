import { Button } from "@/components/ui/button";
import eventStall from "@/assets/event-stall.jpg";

export const ServicesNew = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in Event Services for my event";
    window.open(`https://api.whatsapp.com/send?phone=918247475914&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Event Services
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border-2 border-border">
            <div className="relative h-[400px] md:h-full">
              <img 
                src={eventStall} 
                alt="Event Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="p-8 md:p-12 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Live Photo Printing Stall
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Make Your Events Memorable
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instant Click, Edit & Print</p>
                    <p className="text-sm text-muted-foreground">Professional photo workflow on-site</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Complete Booth Setup</p>
                    <p className="text-sm text-muted-foreground">Full on-site photo booth with professional equipment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Take-Away Gifts</p>
                    <p className="text-sm text-muted-foreground">Guests leave with printed memories</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Perfect for All Events</p>
                    <p className="text-sm text-muted-foreground">Weddings, birthdays, corporate events & parties</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto mt-6"
                onClick={handleWhatsAppClick}
              >
                Book Event Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
