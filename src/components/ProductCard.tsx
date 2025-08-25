import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  badge,
  rating = 5,
  reviews = 0
}: ProductCardProps) => {
  return (
    <Card className="glow-card rounded-xl overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        {badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
        
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {reviews > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < rating ? 'text-yellow-400' : 'text-muted-foreground'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="neon" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};