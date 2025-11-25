export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Photo Magnets Pileru
            </h3>
            <p className="opacity-90">
              Premium photo magnets, acrylic frames, and live event stalls
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://wa.me/918247475914" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="opacity-90 mb-2">📍 Pileru, Andhra Pradesh</p>
            <p className="opacity-90">📱 +91 82474 75914</p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center opacity-90">
          <p>&copy; {new Date().getFullYear()} Photo Magnets Pileru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
