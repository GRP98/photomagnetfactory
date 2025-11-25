import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProductsSection,
  ServicesSection,
} from "@/components/sections";
import { WhatsAppButton } from "@/components/features";

export interface CartItem {
  productIndex: number;
  productTitle: string;
  variationIndex: number;
  variationName: string;
  price: string;
  quantity: number;
  flavor?: string;
  minQuantity?: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen">
      <Header cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <main>
        <HeroSection />
        <ProductsSection cart={cart} setCart={setCart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
