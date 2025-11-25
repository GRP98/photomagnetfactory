import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import aboutPhoto from "@/assets/about-photo.jpg";
import { Linkedin } from "lucide-react";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">About Us</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Photo */}
          <div className="w-full rounded-lg overflow-hidden">
            <img 
              src={aboutPhoto} 
              alt="Prakash and Jaanu - Photo Magnet Factory Founders" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Story */}
          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              We are a newly married couple from a software background, both working remotely for tech companies. 
              What started as a fun creative hobby slowly grew into a part-time passion project — designing and 
              printing custom photo magnets, acrylic frames, personalised photo gifts, and setting up live instant 
              photo-magnet stalls for events.
            </p>
            <p className="leading-relaxed">
              We use our evenings and weekends to create high-quality, vibrant and beautifully crafted photo products 
              that people love to treasure. Every print is made with care, creativity and attention to detail — inspired 
              by our love for memories and moments.
            </p>
          </div>

          {/* Connect With Us */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/reddi-prakash-gude/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Prakash on LinkedIn</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mallegounijagadeeswari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Jaanu on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
