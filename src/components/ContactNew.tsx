import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Send Us An Inquiry
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you via WhatsApp
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 hover:border-primary transition-all duration-300 shadow-lg">
          <CardContent className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
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
              </div>

              <div className="grid md:grid-cols-2 gap-5">
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
              </div>

              <Input
                name="eventLocation"
                placeholder="Event Location (if applicable)"
                value={formData.eventLocation}
                onChange={handleChange}
                className="h-12"
              />

              <Input
                name="productInterest"
                placeholder="Product/Service Interest (e.g., Photo Magnets, Event Stall)"
                value={formData.productInterest}
                onChange={handleChange}
                className="h-12"
              />

              <Textarea
                name="message"
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="resize-none"
              />

              <Button 
                type="submit" 
                size="lg"
                className="w-full text-base h-12"
              >
                Send Inquiry via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
