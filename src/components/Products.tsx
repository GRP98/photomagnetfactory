import { ProductCard } from "./ProductCard";
import photoMagnet from "@/assets/photo-magnet.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet.jpg";
import acrylicFrame from "@/assets/acrylic-frame.jpg";
import { Image, Frame, Sparkles } from "lucide-react";

export const Products = () => {
  const photoMagnets = [
    {
      image: photoMagnet,
      title: "2×2 inch Fridge Magnet",
      features: [
        "Uses: Fridge • Gifting • Decor",
        "High-quality print",
        "Durable magnetic sheet",
        "Vibrant colours"
      ],
      icon: <Image className="w-6 h-6 text-primary" />
    }
  ];

  const acrylicMagnets = [
    {
      image: acrylicMagnet,
      title: "Small Double-Sided Acrylic",
      features: [
        "Size: 2.5×3.5 inches",
        "Double-sided print",
        "Placement: Fridge",
        "Premium acrylic finish"
      ],
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    },
    {
      image: acrylicMagnet,
      title: "Medium 2-in-1 Acrylic",
      features: [
        "Size: 3×4 inches",
        "Use as magnet + table stand",
        "Placement: Fridge + Table",
        "Dual functionality"
      ],
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    },
    {
      image: acrylicMagnet,
      title: "Large 2-in-1 Acrylic",
      features: [
        "Size: 4×6 inches",
        "Magnet + Table stand",
        "Placement: Fridge + Table",
        "Premium display"
      ],
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    }
  ];

  const acrylicFrames = [
    {
      image: acrylicFrame,
      title: "5×5 in Square Frame",
      features: [
        "Perfect square format",
        "Table or wall mount",
        "Crystal clear acrylic",
        "Modern minimalist design"
      ],
      icon: <Frame className="w-6 h-6 text-accent" />
    },
    {
      image: acrylicFrame,
      title: "5×6 in Portrait Frame",
      features: [
        "Classic portrait size",
        "Table or wall mount",
        "Premium quality",
        "Elegant finish"
      ],
      icon: <Frame className="w-6 h-6 text-accent" />
    },
    {
      image: acrylicFrame,
      title: "A4 Size Frame",
      features: [
        "Large format display",
        "Table or wall mount",
        "Professional presentation",
        "Versatile placement"
      ],
      icon: <Frame className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 space-y-20">
        
        {/* Photo Magnets */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              📸 Photo Magnets
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoMagnets.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Acrylic Magnets */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              🧲 Acrylic Fridge Magnets
            </h2>
            <div className="h-1 w-24 bg-gradient-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acrylicMagnets.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Acrylic Frames */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              🖼 Acrylic Photo Frames
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acrylicFrames.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
