import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import photoMagnet from "@/assets/photo-magnet-ai.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet-ai.jpg";
import woodFrame from "@/assets/wood-frame-ai.jpg";
import photoChocolate from "@/assets/photo-chocolate-ai.jpg";

export const ProductsNew = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const products = [
    {
      image: photoMagnet,
      title: "Photo Magnets",
      size: "2×2 inch",
      features: [
        "Set of 3 – ₹289",
        "Set of 6 – ₹549",
        "Set of 9 – ₹789",
        "More than 9: ₹85 per magnet"
      ],
      variations: [
        { name: "Set of 3", price: "₹289", description: "2×2 inch", flavours: undefined },
        { name: "Set of 6", price: "₹549", description: "2×2 inch", flavours: undefined },
        { name: "Set of 9", price: "₹789", description: "2×2 inch", flavours: undefined },
        { name: "More than 9 (per magnet)", price: "₹85", description: "2×2 inch", flavours: undefined }
      ]
    },
    {
      image: acrylicMagnet,
      title: "Acrylic Magnets",
      size: "2.5×3.5 to 4×6 inch",
      features: [
        "Small (2.5×3.5 in) Set of 3 – ₹539",
        "Medium (3×4 in) Set of 3 – ₹659",
        "Large (4×6 in) Set of 1 – ₹249",
        "Premium crystal-clear acrylic"
      ],
      variations: [
        { name: "Small (2.5×3.5 in) - Set of 3", price: "₹539", description: "Double-sided printing", flavours: undefined },
        { name: "Medium (3×4 in) - Set of 3", price: "₹659", description: "2-in-1 magnet + stand", flavours: undefined },
        { name: "Large (4×6 in) - Set of 1", price: "₹249", description: "2-in-1 magnet + stand", flavours: undefined }
      ]
    },
    {
      image: woodFrame,
      title: "Wood Photo Frames",
      size: "Premium Quality",
      features: [
        "5×5 inch – ₹249",
        "5×6 inch – ₹279",
        "A4 Size – ₹449",
        "Table or wall display options"
      ],
      variations: [
        { name: "5×5 inch", price: "₹249", description: "Square format for couples & memories", flavours: undefined },
        { name: "5×6 inch", price: "₹279", description: "Portrait format for single photos", flavours: undefined },
        { name: "A4 Size", price: "₹449", description: "Large display for certificates & decor", flavours: undefined }
      ]
    },
    {
      image: photoChocolate,
      title: "Customized Photo Chocolates",
      size: "Various options",
      features: [
        "KitKat/Five Star – ₹20 (Min 60 pcs)",
        "KitKat Big – ₹80 (Min 10 pcs)",
        "Dairy Milk Medium – ₹180 (Min 6 pcs)",
        "Dairy Milk Big – ₹350 (Min 3 pcs)"
      ],
      variations: [
        { name: "KitKat / Five Star", price: "₹20", description: "Minimum Order: 60 pcs", flavours: undefined },
        { name: "KitKat Big", price: "₹80", description: "Minimum Order: 10 pcs", flavours: undefined },
        { 
          name: "Dairy Milk Medium", 
          price: "₹180", 
          description: "Minimum Order: 6 pcs",
          flavours: ["Silk", "Crackle", "Fruit&Nut", "Bubbly", "Oreo", "Hazelnut", "Almond", "Silk Dessert"]
        },
        { 
          name: "Dairy Milk Big", 
          price: "₹350", 
          description: "Minimum Order: 3 pcs",
          flavours: ["Oreo", "Silk", "Bubbly", "Heart Blush", "Silk Mousse"]
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Products
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium quality printing with vibrant colors and instant delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in cursor-pointer"
              onClick={() => {
                setSelectedProduct(index);
                setSelectedVariation("");
                setQuantity(1);
              }}
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-sm text-primary font-semibold">{product.size}</p>
                  </div>
                  <ul className="space-y-1.5 mt-3 flex-grow">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(index);
                    setSelectedVariation("");
                    setQuantity(1);
                  }}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProduct !== null} onOpenChange={(open) => {
          if (!open) {
            setSelectedProduct(null);
            setSelectedVariation("");
            setQuantity(1);
          }
        }}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedProduct !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{products[selectedProduct].title}</DialogTitle>
                  <DialogDescription>
                    Select size/variation and quantity
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="variation">Select Size/Variation *</Label>
                    <Select value={selectedVariation} onValueChange={setSelectedVariation}>
                      <SelectTrigger id="variation">
                        <SelectValue placeholder="Choose your option" />
                      </SelectTrigger>
                      <SelectContent>
                        {products[selectedProduct].variations?.map((variation, idx) => (
                          <SelectItem key={idx} value={idx.toString()}>
                            {variation.name} - {variation.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedVariation !== "" && products[selectedProduct].variations[parseInt(selectedVariation)].flavours && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-2">Available Flavours:</p>
                      <div className="flex flex-wrap gap-2">
                        {products[selectedProduct].variations[parseInt(selectedVariation)].flavours?.map((flavour, idx) => (
                          <span key={idx} className="text-xs bg-background px-2 py-1 rounded-md border">
                            {flavour}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedVariation !== "" && (
                    <Card className="border-2">
                      <CardContent className="p-5">
                        <div className="space-y-2">
                          <h4 className="font-bold text-foreground">
                            {products[selectedProduct].variations[parseInt(selectedVariation)].name}
                          </h4>
                          <p className="text-lg font-semibold text-primary">
                            {products[selectedProduct].variations[parseInt(selectedVariation)].price}
                          </p>
                          {products[selectedProduct].variations[parseInt(selectedVariation)].description && (
                            <p className="text-sm text-muted-foreground">
                              {products[selectedProduct].variations[parseInt(selectedVariation)].description}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    className="w-full" 
                    disabled={!selectedVariation}
                    onClick={() => {
                      const variation = products[selectedProduct].variations[parseInt(selectedVariation)];
                      const message = `Hi! I'd like to order:\n\nProduct: ${products[selectedProduct].title}\nVariation: ${variation.name}\nPrice: ${variation.price}\nQuantity: ${quantity}\n\nPlease send me the payment details.`;
                      window.open(`https://api.whatsapp.com/send?phone=918247475914&text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Send Inquiry to WhatsApp
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
