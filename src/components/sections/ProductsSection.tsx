import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ResponsiveSection } from "@/components/layout/ResponsiveSection";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import { textSizes, gridColumns } from "@/lib/responsive-utils";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { BRAND } from "@/lib/brand";
import photoMagnet from "@/assets/photo-magnet-ai.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet-ai.jpg";
import woodFrame from "@/assets/wood-frame-ai.jpg";
import photoChocolate from "@/assets/photo-chocolate-ai.jpg";
import type { CartItem } from "@/pages/Index";

interface ProductsSectionProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export const ProductsSection = ({
  cart,
  setCart,
  cartOpen,
  setCartOpen,
}: ProductsSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<string>("");
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [quantityError, setQuantityError] = useState<string>("");

  const addToCart = () => {
    if (!selectedProduct || selectedVariation === "") return;
    if (quantityError) return;

    const variation =
      products[selectedProduct].variations[parseInt(selectedVariation)];
    if (variation.minQuantity && quantity < variation.minQuantity) {
      setQuantityError(`Minimum order is ${variation.minQuantity} pieces`);
      return;
    }

    const cartItem: CartItem = {
      productIndex: selectedProduct,
      productTitle: products[selectedProduct].title,
      variationIndex: parseInt(selectedVariation),
      variationName: variation.name,
      price: variation.price,
      quantity: quantity,
      flavor: selectedFlavor || undefined,
      minQuantity: variation.minQuantity,
    };

    // Check if same item exists in cart (same product, variation, and flavor)
    const existingIndex = cart.findIndex(
      (item) =>
        item.productIndex === cartItem.productIndex &&
        item.variationIndex === cartItem.variationIndex &&
        item.flavor === cartItem.flavor
    );

    if (existingIndex >= 0) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += cartItem.quantity;
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, cartItem]);
    }

    // Reset form
    setSelectedVariation("");
    setSelectedFlavor("");
    setQuantity(1);
    setQuantityError("");
    setCartOpen(true);
  };

  const updateCartItemQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    const item = updatedCart[index];
    if (item.minQuantity && newQuantity < item.minQuantity) {
      newQuantity = item.minQuantity;
    }
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseInt(item.price.replace(/[^0-9]/g, ""));
      return total + priceNum * item.quantity;
    }, 0);
  };

  const sendCartOrder = () => {
    if (cart.length === 0) return;

    let message = `🛒 *Order Inquiry - Photo Magnet Factory*\n\n`;
    message += `Hello! I'd like to place an order:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.productTitle}*\n`;
      message += `   📦 Variation: ${item.variationName}\n`;
      message += `   💰 Price: ${item.price}\n`;
      message += `   🔢 Quantity: ${item.quantity}\n`;
      if (item.flavor) {
        message += `   🍫 Flavor: ${item.flavor}\n`;
      }
      if (item.minQuantity) {
        message += `   ⚠️ Min order: ${item.minQuantity} pcs\n`;
      }
      message += `\n`;
    });

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📊 Total Items: ${totalItems} pieces\n`;
    message += `📦 Total Products: ${cart.length}\n\n`;
    message += `Please send me the payment details and delivery information.\n\n`;
    message += `Thank you! 🙏`;

    window.open(
      `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const products = [
    {
      image: photoMagnet,
      title: "Photo Magnets",
      size: "Perfect for fridges, lockers, and metal surfaces",
      features: [
        "High-quality photo printing",
        "Durable magnetic material",
        "Perfect for fridges and metal surfaces",
        "Custom designs and personalization",
      ],
      variations: [
        {
          name: "Set of 3",
          price: "₹289",
          description: "2×2 inch",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "Set of 6",
          price: "₹549",
          description: "2×2 inch",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "Set of 9",
          price: "₹789",
          description: "2×2 inch",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "More than 9 (per magnet)",
          price: "₹85",
          description: "2×2 inch",
          minQuantity: undefined,
          flavours: undefined,
        },
      ],
    },
    {
      image: acrylicMagnet,
      title: "Acrylic Magnets",
      size: "Crystal-clear premium quality with stand option",
      features: [
        "Premium crystal-clear acrylic",
        "Double-sided printing available",
        "2-in-1 magnet + stand combo",
        "Professional glossy finish",
      ],
      variations: [
        {
          name: "Small (2.5×3.5 in) - Set of 3",
          price: "₹539",
          description: "Double-sided printing",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "Medium (3×4 in) - Set of 3",
          price: "₹659",
          description: "2-in-1 magnet + stand",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "Large (4×6 in) - Set of 1",
          price: "₹249",
          description: "2-in-1 magnet + stand",
          minQuantity: undefined,
          flavours: undefined,
        },
      ],
    },
    {
      image: woodFrame,
      title: "Photo Frames",
      size: "Elegant frames for memories and certificates",
      features: [
        "Premium quality material",
        "Table or wall mount options",
        "Protective glass included",
        "Elegant and timeless design",
      ],
      variations: [
        {
          name: "5×5 inch",
          price: "₹249",
          description: "Square format for couples & memories",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "5×6 inch",
          price: "₹279",
          description: "Portrait format for single photos",
          minQuantity: undefined,
          flavours: undefined,
        },
        {
          name: "A4 Size",
          price: "₹449",
          description: "Large display for certificates & decor",
          minQuantity: undefined,
          flavours: undefined,
        },
      ],
    },
    {
      image: photoChocolate,
      title: "Customized Photo Chocolates",
      size: "Personalized chocolates for special occasions",
      features: [
        "Photo wrapper/cover with custom print in various sizes",
        "Premium chocolate brands",
        "Perfect for events and gifts",
        "Multiple flavors available",
      ],
      variations: [
        {
          name: "KitKat / Five Star",
          price: "₹20",
          description: "Minimum Order: 60 pcs",
          minQuantity: 60,
          flavours: undefined,
        },
        {
          name: "KitKat Big",
          price: "₹80",
          description: "Minimum Order: 10 pcs",
          minQuantity: 10,
          flavours: undefined,
        },
        {
          name: "Dairy Milk Medium",
          price: "₹180",
          description: "Minimum Order: 6 pcs",
          minQuantity: 6,
          flavours: [
            "Silk",
            "Crackle",
            "Fruit&Nut",
            "Bubbly",
            "Oreo",
            "Hazelnut",
            "Almond",
            "Silk Dessert",
          ],
        },
        {
          name: "Dairy Milk Big",
          price: "₹350",
          description: "Minimum Order: 3 pcs",
          minQuantity: 3,
          flavours: ["Oreo", "Silk", "Bubbly", "Heart Blush", "Silk Mousse"],
        },
      ],
    },
  ];

  return (
    <ResponsiveSection id="products" className="bg-background">
      <ResponsiveContainer>
        <div className="text-center space-y-3 sm:space-y-4 mb-8 md:mb-12">
          <h2 className={`${textSizes.h2} text-foreground font-bold`}>
            Our Products
          </h2>
          <div className="h-1.5 w-24 md:w-32 bg-gradient-primary mx-auto rounded-full" />
          <p
            className={`${textSizes.body} text-muted-foreground max-w-3xl mx-auto px-6`}
          >
            {BRAND.productDescription}
          </p>
        </div>

        <div className={`grid ${gridColumns["4"]} gap-3 md:gap-4 lg:gap-5`}>
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in cursor-pointer"
              onClick={() => {
                setSelectedProduct(index);
                setSelectedVariation("");
                setSelectedFlavor("");
                setQuantity(1);
                setQuantityError("");
              }}
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-foreground mb-1">
                      {product.title}
                    </h3>
                    <p
                      className={`${textSizes.small} text-primary font-semibold`}
                    >
                      {product.size}
                    </p>
                  </div>
                  <ul className="space-y-1 md:space-y-1.5 mt-2 flex-grow">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${textSizes.small} text-muted-foreground leading-normal`}
                      >
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                          •
                        </span>
                        <span className="font-sans">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li
                        className={`${textSizes.small} text-primary font-semibold mt-1`}
                      >
                        +{product.features.length - 4} more options
                      </li>
                    )}
                  </ul>
                  <Button
                    variant="outline"
                    className={`w-full mt-3 ${textSizes.button} py-2 font-medium`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(index);
                      setSelectedVariation("");
                      setSelectedFlavor("");
                      setQuantity(1);
                      setQuantityError("");
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog
          open={selectedProduct !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProduct(null);
              setSelectedVariation("");
              setSelectedFlavor("");
              setQuantity(1);
              setQuantityError("");
            }
          }}
        >
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedProduct !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className={`${textSizes.h2}`}>
                    {products[selectedProduct].title}
                  </DialogTitle>
                  <DialogDescription className={`${textSizes.body}`}>
                    {products[selectedProduct].size}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-lg border-2 aspect-square">
                    <img
                      src={products[selectedProduct].image}
                      alt={products[selectedProduct].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details & Order Section */}
                  <div className="space-y-6">
                    {/* Product Description */}
                    <div>
                      <p
                        className={`${textSizes.body} text-muted-foreground leading-relaxed`}
                      >
                        {BRAND.productDescription}. Perfect for gifts and
                        events.
                      </p>
                    </div>

                    {/* Variations Selection */}
                    <div>
                      <h3 className={`${textSizes.h4} font-bold mb-4`}>
                        Select Size/Variation
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {products[selectedProduct].variations.map(
                          (variation, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setSelectedVariation(idx.toString());
                                setSelectedFlavor("");
                                // Set default quantity to 10 for "More than 9 (per magnet)" variation
                                if (selectedProduct === 0 && idx === 3 && variation.name === "More than 9 (per magnet)") {
                                  setQuantity(10);
                                } else {
                                  setQuantity(variation.minQuantity || 1);
                                }
                                setQuantityError("");
                              }}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                selectedVariation === idx.toString()
                                  ? "border-primary bg-primary/5 shadow-md"
                                  : "border-border hover:border-primary/50 hover:shadow-sm"
                              }`}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4
                                  className={`${textSizes.body} font-bold text-foreground`}
                                >
                                  {variation.name}
                                </h4>
                                {selectedVariation === idx.toString() && (
                                  <span className="text-primary text-xl font-bold">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <p
                                className={`${textSizes.h4} font-bold text-primary mb-1`}
                              >
                                {variation.price}
                              </p>
                              {variation.description && (
                                <p
                                  className={`${textSizes.small} text-muted-foreground`}
                                >
                                  {variation.description}
                                </p>
                              )}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Flavor Selection */}
                    {selectedVariation !== "" &&
                      products[selectedProduct].variations[
                        parseInt(selectedVariation)
                      ].flavours && (
                        <div>
                          <h3 className={`${textSizes.h4} font-bold mb-3`}>
                            Select Flavor
                          </h3>
                          <div className="grid sm:grid-cols-3 gap-2">
                            {products[selectedProduct].variations[
                              parseInt(selectedVariation)
                            ].flavours?.map((flavour, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedFlavor(flavour)}
                                className={`p-3 rounded-lg border-2 text-center transition-all ${
                                  selectedFlavor === flavour
                                    ? "border-primary bg-primary/5 font-semibold"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <span className={`${textSizes.small}`}>
                                  {flavour}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Quantity Selector */}
                    {selectedVariation !== "" && (
                      <div>
                        <h3 className={`${textSizes.h4} font-bold mb-3`}>
                          Quantity
                        </h3>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12"
                            onClick={() => {
                              const variation =
                                products[selectedProduct].variations[
                                  parseInt(selectedVariation)
                                ];
                              const minQty = variation.minQuantity || 1;
                              if (quantity > minQty) {
                                setQuantity(quantity - 1);
                                setQuantityError("");
                              }
                            }}
                            disabled={
                              products[selectedProduct].variations[
                                parseInt(selectedVariation)
                              ].minQuantity
                                ? quantity <=
                                  products[selectedProduct].variations[
                                    parseInt(selectedVariation)
                                  ].minQuantity!
                                : quantity <= 1
                            }
                          >
                            <Minus className="w-5 h-5" />
                          </Button>
                          <div className="flex-1 text-center">
                            <Input
                              type="number"
                              min="1"
                              value={quantity}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (value === "") {
                                  setQuantity(1);
                                  setQuantityError("");
                                  return;
                                }
                                const numValue = parseInt(value);
                                if (isNaN(numValue) || numValue < 1) {
                                  setQuantity(1);
                                  setQuantityError(
                                    "Quantity must be at least 1"
                                  );
                                  return;
                                }
                                if (numValue > 10000) {
                                  setQuantity(10000);
                                  setQuantityError(
                                    "Maximum quantity is 10,000"
                                  );
                                  return;
                                }
                                setQuantity(numValue);
                                const variation =
                                  products[selectedProduct].variations[
                                    parseInt(selectedVariation)
                                  ];
                                if (
                                  variation.minQuantity &&
                                  numValue < variation.minQuantity
                                ) {
                                  setQuantityError(
                                    `Minimum order is ${variation.minQuantity} pieces`
                                  );
                                } else {
                                  setQuantityError("");
                                }
                              }}
                              onBlur={() => {
                                const variation =
                                  products[selectedProduct].variations[
                                    parseInt(selectedVariation)
                                  ];
                                if (
                                  variation.minQuantity &&
                                  quantity < variation.minQuantity
                                ) {
                                  setQuantity(variation.minQuantity);
                                  setQuantityError("");
                                }
                              }}
                              className={`text-center text-lg font-bold h-12 ${
                                quantityError ? "border-destructive" : ""
                              }`}
                              aria-invalid={!!quantityError}
                              aria-describedby={
                                quantityError ? "quantity-error" : undefined
                              }
                            />
                            {products[selectedProduct].variations[
                              parseInt(selectedVariation)
                            ].minQuantity && (
                              <p
                                className={`${textSizes.small} text-muted-foreground mt-1`}
                              >
                                Minimum:{" "}
                                {
                                  products[selectedProduct].variations[
                                    parseInt(selectedVariation)
                                  ].minQuantity
                                }{" "}
                                pieces
                              </p>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12"
                            onClick={() => {
                              if (quantity < 10000) {
                                setQuantity(quantity + 1);
                                setQuantityError("");
                              }
                            }}
                          >
                            <Plus className="w-5 h-5" />
                          </Button>
                        </div>
                        {quantityError && (
                          <p
                            id="quantity-error"
                            className={`${textSizes.small} text-destructive font-medium mt-2`}
                            role="alert"
                          >
                            {quantityError}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Order Summary */}
                    {selectedVariation !== "" && (
                      <div className="p-4 bg-muted rounded-lg border-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${textSizes.body} font-semibold`}>
                            Selected:
                          </span>
                          <span className={`${textSizes.body} font-bold`}>
                            {
                              products[selectedProduct].variations[
                                parseInt(selectedVariation)
                              ].name
                            }
                          </span>
                        </div>
                        {selectedFlavor && (
                          <div className="flex justify-between items-center mb-2">
                            <span className={`${textSizes.body} font-semibold`}>
                              Flavor:
                            </span>
                            <span className={`${textSizes.body} font-bold`}>
                              {selectedFlavor}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-2">
                          <span className={`${textSizes.body} font-semibold`}>
                            Quantity:
                          </span>
                          <span className={`${textSizes.body} font-bold`}>
                            {quantity}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className={`${textSizes.h4} font-bold`}>
                            Total:
                          </span>
                          <span
                            className={`${textSizes.h3} font-bold text-primary`}
                          >
                            {
                              products[selectedProduct].variations[
                                parseInt(selectedVariation)
                              ].price
                            }{" "}
                            × {quantity}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <Button
                        className={`w-full h-12 md:h-14 ${textSizes.button} font-semibold`}
                        disabled={
                          !selectedVariation ||
                          (products[selectedProduct].variations[
                            parseInt(selectedVariation)
                          ].flavours &&
                            !selectedFlavor) ||
                          !!quantityError ||
                          (products[selectedProduct].variations[
                            parseInt(selectedVariation)
                          ].minQuantity &&
                            quantity <
                              products[selectedProduct].variations[
                                parseInt(selectedVariation)
                              ].minQuantity!)
                        }
                        onClick={addToCart}
                      >
                        Add to Cart
                      </Button>
                      {selectedVariation !== "" && (
                        <Button
                          variant="outline"
                          className={`w-full h-11 md:h-12 ${textSizes.button} font-semibold`}
                          disabled={
                            !selectedVariation ||
                            (products[selectedProduct].variations[
                              parseInt(selectedVariation)
                            ].flavours &&
                              !selectedFlavor) ||
                            !!quantityError ||
                            (products[selectedProduct].variations[
                              parseInt(selectedVariation)
                            ].minQuantity &&
                              quantity <
                                products[selectedProduct].variations[
                                  parseInt(selectedVariation)
                                ].minQuantity!)
                          }
                          onClick={() => {
                            const variation =
                              products[selectedProduct].variations[
                                parseInt(selectedVariation)
                              ];

                            if (
                              variation.minQuantity &&
                              quantity < variation.minQuantity
                            ) {
                              setQuantityError(
                                `Minimum order is ${variation.minQuantity} pieces`
                              );
                              return;
                            }

                            let message = `🛒 *Order Inquiry - Photo Magnet Factory*\n\n`;
                            message += `Hello! I'd like to place an order:\n\n`;
                            message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
                            message += `*Product:* ${products[selectedProduct].title}\n`;
                            message += `📦 *Variation:* ${variation.name}\n`;
                            message += `💰 *Price:* ${variation.price}\n`;
                            message += `🔢 *Quantity:* ${quantity}`;
                            if (selectedFlavor) {
                              message += `\n🍫 *Flavor:* ${selectedFlavor}`;
                            }
                            if (variation.minQuantity) {
                              message += `\n⚠️ *Min order:* ${variation.minQuantity} pcs`;
                            }
                            message += `\n\n━━━━━━━━━━━━━━━━━━━━\n\n`;
                            message += `Please send me the payment details and delivery information.\n\n`;
                            message += `Thank you! 🙏`;
                            window.open(
                              `https://api.whatsapp.com/send?phone=7729923182&text=${encodeURIComponent(
                                message
                              )}`,
                              "_blank"
                            );
                          }}
                        >
                          Order Now (Skip Cart)
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Cart Sheet */}
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
            <SheetHeader>
              <SheetTitle className={`${textSizes.h3} font-bold`}>
                Shopping Cart ({cart.length}{" "}
                {cart.length === 1 ? "item" : "items"})
              </SheetTitle>
              <SheetDescription className={`${textSizes.body}`}>
                Review your items before placing order
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className={`${textSizes.body} text-muted-foreground`}>
                    Your cart is empty
                  </p>
                </div>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4
                                className={`${textSizes.body} font-bold text-foreground`}
                              >
                                {item.productTitle}
                              </h4>
                              <p
                                className={`${textSizes.small} text-muted-foreground mt-1`}
                              >
                                {item.variationName}
                              </p>
                              {item.flavor && (
                                <p
                                  className={`${textSizes.small} text-primary font-semibold mt-1`}
                                >
                                  Flavor: {item.flavor}
                                </p>
                              )}
                              <p
                                className={`${textSizes.body} font-semibold text-primary mt-2`}
                              >
                                {item.price} × {item.quantity}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(index)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-3 pt-2 border-t">
                            <span
                              className={`${textSizes.small} font-semibold`}
                            >
                              Quantity:
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateCartItemQuantity(
                                    index,
                                    item.quantity - 1
                                  )
                                }
                                disabled={
                                  item.minQuantity
                                    ? item.quantity <= item.minQuantity
                                    : item.quantity <= 1
                                }
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span
                                className={`${textSizes.body} font-semibold min-w-[40px] text-center`}
                              >
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateCartItemQuantity(
                                    index,
                                    item.quantity + 1
                                  )
                                }
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            {item.minQuantity && (
                              <span
                                className={`${textSizes.small} text-muted-foreground ml-auto`}
                              >
                                Min: {item.minQuantity}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="pt-4 border-t space-y-4">
                    <div className="flex justify-between items-center">
                      <span className={`${textSizes.h4} font-bold`}>
                        Total Items:
                      </span>
                      <span
                        className={`${textSizes.h4} font-bold text-primary`}
                      >
                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    </div>
                    <Button
                      onClick={sendCartOrder}
                      className={`w-full h-12 md:h-14 ${textSizes.button} font-semibold`}
                    >
                      Send Order via WhatsApp ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setCart([])}
                      className={`w-full ${textSizes.button} font-semibold`}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};
