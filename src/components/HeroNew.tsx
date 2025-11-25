import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroNew = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background py-16 mt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Custom Photo Magnets & Acrylic Frames
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-95 max-w-2xl mx-auto">
            Premium quality prints delivered fast. Perfect for gifts & events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProducts}
              className="text-base sm:text-lg px-8 py-6 bg-background text-primary hover:bg-background/90"
            >
              View Products
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={scrollToContact}
              className="text-base sm:text-lg px-8 py-6"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
