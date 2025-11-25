import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactNew = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    eventLocation: "",
    productInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp Business with proper encoding
    const whatsappMessage = `*New Inquiry from ${formData.name}*%0A%0A` +
      `📱 Phone: ${formData.phone}%0A` +
      `📧 Email: ${formData.email || 'Not provided'}%0A` +
      `📅 Event Date: ${formData.eventDate || 'Not specified'}%0A` +
      `📍 Event Location: ${formData.eventLocation || 'Not specified'}%0A` +
      `🎯 Product Interest: ${formData.productInterest || 'Not specified'}%0A` +
      `💬 Message: ${formData.message || 'No additional message'}`;

    // WhatsApp Business URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918247475914&text=${whatsappMessage}`;
    
    // Open WhatsApp Business
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "You'll be redirected to send your message",
    });

    // Reset form
    setFormData({ 
      name: "", 
      phone: "", 
      email: "", 
      eventDate: "", 
      eventLocation: "", 
      productInterest: "", 
      message: "" 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Pileru, Andhra Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-2 border-secondary hover:shadow-medium transition-all duration-300 bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="opacity-90">+91 82474 75914</p>
                  </div>
                </div>
                <Button 
                  variant="heroOutline" 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=918247475914', '_blank')}
                  className="w-full bg-background text-secondary hover:bg-background/90"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:photomagnetfactory@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      photomagnetfactory@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="border-2 hover:border-accent transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/photo_magnet_factory/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      @photo_magnet_factory
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Form */}
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                />
                <Input
                  name="eventDate"
                  type="date"
                  placeholder="Event Date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="h-12"
                />
                <Input
                  name="eventLocation"
                  placeholder="Event Location"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="h-12"
                />
                <Input
                  name="productInterest"
                  placeholder="Product Interest (e.g., Photo Magnets, Event Stall)"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="h-12"
                />
                <Textarea
                  name="message"
                  placeholder="Additional Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="resize-none"
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  className="w-full text-base"
                >
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
