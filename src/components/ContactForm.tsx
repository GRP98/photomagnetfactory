import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
    productInquiry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `
*New Booking Inquiry*

Name: ${formData.name}
Phone: ${formData.phone}
Event Date: ${formData.eventDate || 'Not specified'}
Event Location: ${formData.eventLocation || 'Not specified'}
Product Inquiry: ${formData.productInquiry || 'Not specified'}
Message: ${formData.message || 'No additional message'}
    `.trim();

    // WhatsApp URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/918247475914?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      eventDate: "",
      eventLocation: "",
      productInquiry: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/918247475914', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground">
            Book your event stall or inquire about our products
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  📍 Pileru, Andhra Pradesh
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:shadow-medium transition-all duration-300 bg-gradient-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="w-6 h-6" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg opacity-95">
                  Get instant response on WhatsApp!
                </p>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  onClick={openWhatsApp}
                  className="w-full text-lg bg-background text-secondary hover:bg-background/90"
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us Your Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="eventDate"
                    type="date"
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="eventLocation"
                    placeholder="Event Location"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="productInquiry"
                    placeholder="Product Inquiry"
                    value={formData.productInquiry}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  className="w-full text-lg"
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
