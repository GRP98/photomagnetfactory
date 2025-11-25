import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { textSizes } from "@/lib/responsive-utils";
import { BRAND } from "@/lib/brand";
import type { CartItem } from "@/pages/Index";

interface HeaderProps {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export const Header = ({ cart, cartOpen, setCartOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Products", id: "products" },
    { label: "Services", id: "services" },
  ];

  const NavButton = ({
    label,
    onClick,
  }: {
    label: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`${textSizes.nav} text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover:bg-primary/10 font-sans`}
    >
      {label}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-border"
          : "bg-white shadow-sm border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Name - Left Side */}
          <div
            className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToTop();
              }
            }}
            aria-label="Scroll to top"
          >
            <img
              src={logo}
              alt={`${BRAND.name} Logo`}
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground tracking-tight whitespace-nowrap">
                {BRAND.name}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                label={item.label}
                onClick={() => scrollToSection(item.id)}
              />
            ))}
            {cart.length > 0 && (
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5 text-foreground" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full px-1.5 py-0.5 text-xs font-bold min-w-[20px] text-center">
                  {cart.length}
                </span>
              </button>
            )}
              <Button
                onClick={() => {
                  let message = `👋 *Hello Photo Magnet Factory!*\n\n`;
                  message += `I'd like to get in touch with you.\n\n`;
                  message += `Please help me with:\n`;
                  message += `📦 Product inquiries\n`;
                  message += `💰 Pricing information\n`;
                  message += `🚚 Delivery details\n`;
                  message += `📅 Event booking\n\n`;
                  message += `Thank you! 🙏`;
                  window.open(
                    `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className={`bg-gradient-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:shadow-medium transition-all duration-300 font-semibold ${textSizes.button} font-sans whitespace-nowrap`}
              >
                Contact Us
              </Button>
          </nav>

          {/* Mobile Menu Button - Right Side */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors flex-shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <img
                    src={logo}
                    alt={`${BRAND.name} Logo`}
                    className="w-12 h-12 rounded-full"
                  />
                  <h2 className="text-xl font-heading font-bold text-foreground">
                    {BRAND.name}
                  </h2>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left ${textSizes.body} font-medium text-foreground hover:text-primary hover:bg-primary/10 py-3 px-4 rounded-md transition-colors font-sans`}
                    >
                      {item.label}
                    </button>
                  ))}

                  {cart.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <button
                        onClick={() => {
                          setCartOpen(true);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors ${textSizes.body} font-semibold`}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Cart ({cart.length}{" "}
                        {cart.length === 1 ? "item" : "items"})
                      </button>
                    </div>
                  )}
                  <div className="mt-3 pt-3 border-t">
                        <Button
                          onClick={() => {
                            let message = `👋 *Hello Photo Magnet Factory!*\n\n`;
                            message += `I'd like to get in touch with you.\n\n`;
                            message += `Please help me with:\n`;
                            message += `📦 Product inquiries\n`;
                            message += `💰 Pricing information\n`;
                            message += `🚚 Delivery details\n`;
                            message += `📅 Event booking\n\n`;
                            message += `Thank you! 🙏`;
                            window.open(
                              `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
                                message
                              )}`,
                              "_blank"
                            );
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full bg-gradient-secondary text-secondary-foreground py-3 ${textSizes.button}`}
                        >
                          Contact Us
                        </Button>
                  </div>
                </nav>

                {/* Contact Info */}
                <div
                  className={`mt-auto pt-4 border-t ${textSizes.small} text-muted-foreground font-sans`}
                >
                  <p className="mb-2">📞 +91 77299 23182</p>
                  <p>📍 Pileru, Andhra Pradesh</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
