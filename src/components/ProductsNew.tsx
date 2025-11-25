import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import photoMagnet from "@/assets/photo-magnet.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet.jpg";
import acrylicFrame from "@/assets/acrylic-frame.jpg";
import eventStall from "@/assets/event-stall.jpg";

export const ProductsNew = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      image: photoMagnet,
      title: "Photo Magnets",
      size: "2×2 inch",
      features: [
        "Perfect for fridge décor & gifting",
        "High-quality print with vibrant colors",
        "Durable magnetic backing",
        "Ideal for bulk orders & events"
      ],
      variations: [
        {
          name: "2×2 inch Photo Fridge Magnet",
          description: "Perfect for fridge décor, gifting, and personal collections",
          features: [
            "High-quality print with vibrant colors",
            "Durable magnetic backing",
            "Ideal for bulk orders & events"
          ]
        }
      ]
    },
    {
      image: acrylicMagnet,
      title: "Acrylic Fridge Magnets",
      size: "2.5×3.5 to 4×6 inch",
      features: [
        "Small (2.5×3.5): Double-sided printing",
        "Medium (3×4): 2-in-1 magnet + stand",
        "Large (4×6): Best for portraits",
        "Premium crystal-clear acrylic"
      ],
      variations: [
        {
          name: "Small Double-Sided Acrylic Magnet",
          size: "2.5 × 3.5 inches",
          description: "Fridge placement only",
          features: [
            "Double-sided printing",
            "Premium acrylic for crystal-clear look"
          ]
        },
        {
          name: "Medium 2-in-1 Acrylic Magnet",
          size: "3 × 4 inches",
          description: "Fridge + Table placement",
          features: [
            "Can be used as magnet mount + table stand",
            "Strong magnet & sturdy stand included"
          ]
        },
        {
          name: "Large 2-in-1 Acrylic Magnet",
          size: "4 × 6 inches",
          description: "Fridge + Table placement",
          features: [
            "Works as magnet mount + table stand",
            "Best option for portraits & family photos"
          ]
        }
      ]
    },
    {
      image: acrylicFrame,
      title: "Photo Frames",
      size: "5×5, 5×6 & A4",
      features: [
        "5×5: Square format for couples & memories",
        "5×6: Portrait format for single photos",
        "A4: Large display for certificates & decor",
        "Table or wall display options"
      ],
      variations: [
        {
          name: "5 × 5 inch Square Frame",
          size: "5 × 5 inches",
          description: "Modern square format",
          features: [
            "Suitable for table or wall display",
            "Ideal for couples, best memories & Instagram-style photos"
          ]
        },
        {
          name: "5 × 6 inch Portrait Frame",
          size: "5 × 6 inches",
          description: "Vertical orientation",
          features: [
            "Perfect for single portraits, kids' photos & gifting",
            "Table/Wall compatible"
          ]
        },
        {
          name: "A4 Acrylic Frame",
          size: "A4 (8.3 × 11.7 inches)",
          description: "Large premium display",
          features: [
            "Suitable for wall hanging or table stand",
            "Best for certificates, family portraits & decor pieces"
          ]
        }
      ]
    },
    {
      image: eventStall,
      title: "Event Services",
      size: "Live Photo Printing",
      features: [
        "On-site photo booth setup",
        "Instant click, edit & print",
        "Perfect for weddings & parties",
        "Take-away gifts for guests"
      ],
      variations: [
        {
          name: "Live Photo-Magnet Stall",
          description: "Perfect for events",
          features: [
            "Instant click → edit → print workflow",
            "On-site photo booth setup",
            "Take-away gifts for guests",
            "Ideal for weddings, birthdays & corporate events"
          ]
        }
      ]
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Products & Services
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium quality printing with vibrant colors and instant delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in cursor-pointer"
              onClick={() => setSelectedProduct(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-sm text-primary font-semibold">{product.size}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(index);
                  }}>
                    View Sizes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProduct !== null} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedProduct !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{products[selectedProduct].title}</DialogTitle>
                  <DialogDescription>
                    Available sizes and variations
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  {products[selectedProduct].variations?.map((variation, idx) => (
                    <Card key={idx} className="border-2">
                      <CardContent className="p-5 space-y-3">
                        <div>
                          <h4 className="text-lg font-bold text-foreground">{variation.name}</h4>
                          {variation.size && (
                            <p className="text-sm text-primary font-semibold">{variation.size}</p>
                          )}
                          {variation.description && (
                            <p className="text-sm text-muted-foreground mt-1">{variation.description}</p>
                          )}
                        </div>
                        <ul className="space-y-2">
                          {variation.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary font-bold mt-0.5">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      const message = `Hi! I'm interested in ${products[selectedProduct].title}`;
                      window.open(`https://api.whatsapp.com/send?phone=918247475914&text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Enquire on WhatsApp
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
