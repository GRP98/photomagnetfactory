import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import eventStall from "@/assets/event-stall.jpg";

export const ServicesNew = () => {
  const [showDialog, setShowDialog] = useState(false);

  const service = {
    image: eventStall,
    title: "Event Services",
    subtitle: "Live Photo Printing",
    features: [
      "On-site photo booth setup",
      "Instant click, edit & print",
      "Perfect for weddings & parties",
      "Take-away gifts for guests"
    ],
    details: {
      name: "Live Photo-Magnet Stall",
      description: "Perfect for events",
      features: [
        "Instant click → edit → print workflow",
        "On-site photo booth setup",
        "Take-away gifts for guests",
        "Ideal for weddings, birthdays & corporate events"
      ]
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional event services to make your special moments unforgettable
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card 
            className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in cursor-pointer"
            onClick={() => setShowDialog(true)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-primary font-semibold">{service.subtitle}</p>
                </div>
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4" onClick={(e) => {
                  e.stopPropagation();
                  setShowDialog(true);
                }}>
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{service.title}</DialogTitle>
              <DialogDescription>
                Service details
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 mt-4">
              <Card className="border-2">
                <CardContent className="p-5 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{service.details.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{service.details.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Button 
                className="w-full" 
                onClick={() => {
                  const message = `Hi! I'm interested in ${service.title} for my event`;
                  window.open(`https://api.whatsapp.com/send?phone=918247475914&text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Enquire on WhatsApp
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
