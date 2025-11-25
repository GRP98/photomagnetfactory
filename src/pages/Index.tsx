import { Header } from "@/components/Header";
import { HeroNew } from "@/components/HeroNew";
import { ProductsNew } from "@/components/ProductsNew";
import { ServicesNew } from "@/components/ServicesNew";
import { ContactNew } from "@/components/ContactNew";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroNew />
      <ProductsNew />
      <ServicesNew />
      <ContactNew />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
