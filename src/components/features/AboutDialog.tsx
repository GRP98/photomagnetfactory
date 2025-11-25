import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import aboutPhoto from "@/assets/about-photo.jpg";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import { textSizes } from "@/lib/responsive-utils";
import { BRAND } from "@/lib/brand";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`${textSizes.h2} font-heading`}>
            About {BRAND.name}
          </DialogTitle>
          <DialogDescription className={`${textSizes.body}`}>
            Your trusted partner for custom photo products
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 mt-4">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src={aboutPhoto}
              alt={`About ${BRAND.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`space-y-3 md:space-y-4 ${textSizes.body} text-muted-foreground leading-relaxed font-sans`}
          >
            <p>
              <strong className="text-foreground font-semibold">
                {BRAND.name}
              </strong>{" "}
              is one of India's leading creators of custom photo magnets, acrylic frames, wood frames, and personalized photo chocolates. We combine high-quality printing with fast delivery to help you celebrate every moment in a unique and memorable way.
            </p>

            <div className="space-y-2">
              <h3
                className={`${textSizes.h4} font-heading font-bold text-foreground flex items-center gap-2`}
              >
                <span>✨</span> What We Offer
              </h3>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Custom Photo Magnets in multiple sizes and styles</li>
                <li>Premium Acrylic Frames with crystal-clear finish</li>
                <li>Elegant Wood Photo Frames for home décor and gifting</li>
                <li>Personalized Photo Chocolates for birthdays, weddings, and events</li>
                <li>Live Instant-Print Stalls for weddings, receptions, corporate events & functions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3
                className={`${textSizes.h4} font-heading font-bold text-foreground flex items-center gap-2`}
              >
                <span>🌟</span> Why Choose Us
              </h3>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Fast and reliable delivery across India</li>
                <li>Bulk order discounts for events & corporate clients</li>
                <li>Professional on-site event printing services</li>
                <li>High-quality printing with vibrant colors & durable materials</li>
                <li>Affordable, competitive pricing for all products</li>
                <li>Customization options for photos, logos, names & event branding</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
