import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  features: string[];
  icon?: ReactNode;
}

export const ProductCard = ({ image, title, features, icon }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-medium hover:scale-[1.02] animate-scale-in">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {icon && (
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-soft">
              {icon}
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
