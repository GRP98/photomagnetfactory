import { Button } from "@/components/ui/button";
import eventStall from "@/assets/event-stall.jpg";
import { ResponsiveSection } from "@/components/layout/ResponsiveSection";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import { textSizes } from "@/lib/responsive-utils";

export const ServicesSection = () => {
  const handleWhatsAppClick = () => {
    let message = `🎉 *Event Service Inquiry - Photo Magnet Factory*\n\n`;
    message += `Hello! I'm interested in booking your Live Photo Printing Stall service for my event.\n\n`;
    message += `Please share:\n`;
    message += `📅 Event date\n`;
    message += `📍 Event location\n`;
    message += `👥 Expected number of guests\n`;
    message += `💰 Pricing details\n\n`;
    message += `Thank you! 🙏`;
    window.open(
      `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const features = [
    {
      title: "Instant Click, Edit & Print",
      description: "Professional photo workflow on-site",
    },
    {
      title: "Complete Booth Setup",
      description: "Full on-site photo booth with professional equipment",
    },
    {
      title: "Take-Away Gifts",
      description: "Guests leave with printed memories",
    },
    {
      title: "Perfect for All Events",
      description: "Weddings, birthdays, corporate events, and parties",
    },
  ];

  return (
    <ResponsiveSection
      id="services"
      className="bg-gradient-to-br from-primary/5 via-background to-primary/5"
    >
      <ResponsiveContainer>
        <div className="text-center space-y-3 sm:space-y-4 mb-8 md:mb-12">
          <h2 className={`${textSizes.h2} text-foreground font-bold`}>
            Event Services
          </h2>
          <div className="h-1.5 w-24 md:w-32 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-0 items-stretch bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-2 border-border">
            <div className="relative h-[300px] sm:h-[400px] md:h-auto min-h-[300px] md:min-h-[500px]">
              <img
                src={eventStall}
                alt="Event Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6 md:p-8 lg:p-10 space-y-4 md:space-y-5 flex flex-col justify-center">
              <div>
                <h3
                  className={`${textSizes.h3} text-foreground mb-3 font-bold`}
                >
                  Live Photo Printing Stall
                </h3>
                <p className={`${textSizes.body} text-primary font-semibold`}>
                  Make Your Events Memorable
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm md:text-base font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <p
                        className={`${textSizes.body} font-semibold text-foreground`}
                      >
                        {feature.title}
                      </p>
                      <p
                        className={`${textSizes.small} text-muted-foreground mt-1`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full md:w-auto mt-4 md:mt-5 ${textSizes.button} h-11 md:h-12 px-6 md:px-8 font-semibold`}
                onClick={handleWhatsAppClick}
              >
                Book Event Service
              </Button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};
