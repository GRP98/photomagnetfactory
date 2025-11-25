import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ResponsiveSection } from "@/components/layout/ResponsiveSection";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import { textSizes } from "@/lib/responsive-utils";
import { BRAND } from "@/lib/brand";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    let message = `👋 *Hello Photo Magnet Factory!*\n\n`;
    message += `I'm interested in getting a quote for your custom photo products.\n\n`;
    message += `Please share:\n`;
    message += `📦 Product details\n`;
    message += `🔢 Quantity needed\n`;
    message += `💰 Pricing information\n`;
    message += `🚚 Delivery options\n\n`;
    message += `Thank you! 🙏`;
    window.open(
      `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <ResponsiveSection className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <ResponsiveContainer className="relative z-10 text-center text-background py-16 md:py-20 lg:py-24 mt-16 md:mt-20">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-up px-6">
          <h1
            className={`${textSizes.h1} text-background drop-shadow-2xl font-extrabold`}
          >
            {BRAND.tagline}
          </h1>
          <p
            className={`${textSizes.body} font-medium opacity-95 max-w-3xl mx-auto leading-relaxed`}
          >
            {BRAND.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-7 md:pt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProducts}
              className={`${textSizes.button} px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-background text-primary hover:bg-background/90 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all font-semibold`}
            >
              View Products
            </Button>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className={`${textSizes.button} px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 w-full sm:w-auto bg-gradient-secondary text-secondary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all font-semibold border-0`}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};
