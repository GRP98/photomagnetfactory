import logo from "@/assets/logo.png";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with click to scroll to top */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll to top"
          >
            <img 
              src={logo} 
              alt="Photo Magnet Factory Logo" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Photo Magnet Factory
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2 md:gap-6">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => window.open('https://wa.me/918247475914', '_blank')}
              className="text-sm md:text-base bg-gradient-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:shadow-medium transition-all duration-300 font-medium"
            >
              WhatsApp
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
