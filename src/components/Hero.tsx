import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background py-20 mt-20">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Instant Custom Photo Magnets & Acrylic Frames
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-95">
            Click → Edit → Print in Minutes | Live Event Stalls Available
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={scrollToProducts}
              className="text-lg px-8 py-6"
            >
              View Products
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-background text-primary hover:bg-background/90"
            >
              Book Event Stall
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-8 h-8 opacity-80" />
        </div>
      </div>
    </section>
  );
};
