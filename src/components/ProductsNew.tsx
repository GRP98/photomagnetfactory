import { Card, CardContent } from "@/components/ui/card";
import photoMagnet from "@/assets/photo-magnet.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet.jpg";
import acrylicFrame from "@/assets/acrylic-frame.jpg";
import eventStall from "@/assets/event-stall.jpg";

export const ProductsNew = () => {
  const products = [
    {
      image: photoMagnet,
      title: "Photo Magnets",
      size: "2×2 inch",
      features: ["High-quality print", "Durable magnetic sheet", "Perfect for fridge & gifting"],
    },
    {
      image: acrylicMagnet,
      title: "Acrylic Magnets",
      size: "2.5×3.5 to 4×6 inch",
      features: ["Fridge magnets only", "Double-sided print", "2-in-1: Magnet + Stand option"],
    },
    {
      image: acrylicFrame,
      title: "Photo Frames",
      size: "5×5 to A4",
      features: ["Normal photo frames", "Table or wall display", "Crystal clear premium acrylic"],
    },
    {
      image: eventStall,
      title: "Event Stalls",
      size: "Live Printing",
      features: ["Instant photo capture", "On-site editing & printing", "Perfect for weddings & parties"],
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
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in"
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
