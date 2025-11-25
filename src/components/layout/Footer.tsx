import logo from "@/assets/logo.png";
import { AboutDialog } from "@/components/features/AboutDialog";
import { useState } from "react";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { textSizes } from "@/lib/responsive-utils";
import { BRAND } from "@/lib/brand";

export const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-8 md:py-10 lg:py-12">
      <ResponsiveContainer>
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
          {/* Brand Section - Left */}
          <div className="flex-1 lg:max-w-md">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <img
                src={logo}
                alt={BRAND.logoAlt}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
              />
              <h3 className={`${textSizes.h4} font-heading font-bold`}>
                {BRAND.name}
              </h3>
            </div>
            <h4 className={`${textSizes.body} font-bold mb-2`}>
              {BRAND.tagline}
            </h4>
            <p className={`${textSizes.small} opacity-80 leading-relaxed`}>
              {BRAND.description}
            </p>
          </div>

          {/* Quick Links - Middle */}
          <div className="flex-1 lg:flex lg:justify-center">
            <div>
              <h4
                className={`${textSizes.h4} font-heading font-semibold mb-2 md:mb-3`}
              >
                Quick Links
              </h4>
              <ul className="space-y-1 md:space-y-1.5 opacity-80">
                <li>
                  <button
                    onClick={() => setAboutOpen(true)}
                    className={`hover:text-primary transition-colors text-left ${textSizes.small} font-sans`}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className={`hover:text-primary transition-colors text-left ${textSizes.small} font-sans`}
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className={`hover:text-primary transition-colors text-left ${textSizes.small} font-sans`}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
                      `👋 *Hello Photo Magnet Factory!*\n\nI'd like to know more about your products and services.\n\nThank you! 🙏`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-primary transition-colors inline-block ${textSizes.small} font-sans`}
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details - Right */}
          <div className="flex-1 lg:flex lg:justify-end">
            <div className="lg:text-right">
              <h4
                className={`${textSizes.h4} font-heading font-semibold mb-2 md:mb-3`}
              >
                Contact
              </h4>
              <ul
                className={`space-y-1.5 md:space-y-2 opacity-80 ${textSizes.small} font-sans`}
              >
                <li>📍 Pileru, Andhra Pradesh</li>
                <li>📞 +91 77299 23182</li>
                <li>
                  <a
                    href="mailto:photomagnetfactory@gmail.com"
                    className="hover:text-primary transition-colors break-all"
                  >
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
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <p className={`opacity-80 ${textSizes.small}`}>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </ResponsiveContainer>

      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
    </footer>
  );
};
