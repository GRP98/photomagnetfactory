import logo from "@/assets/logo.png";
import { AboutDialog } from "./AboutDialog";
import { useState } from "react";

export const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Photo Magnet Factory Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold">
                Photo Magnet Factory
              </h3>
            </div>
            <h4 className="font-semibold text-lg mb-2">
              Custom Photo Magnets & Acrylic Frames
            </h4>
            <p className="opacity-80 text-sm">
              Premium prints delivered fast - gifts, decor & events.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <button 
                  onClick={() => setAboutOpen(true)} 
                  className="hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=918247475914" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li>Pileru, Andhra Pradesh</li>
              <li>+91 82474 75914</li>
              <li>
                <a href="mailto:photomagnetfactory@gmail.com" className="hover:text-primary transition-colors">
                  photomagnetfactory@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/photo_magnet_factory/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @photo_magnet_factory
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Photo Magnet Factory. All rights reserved.</p>
        </div>
      </div>
      
      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
    </footer>
  );
};
