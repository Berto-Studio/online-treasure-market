
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const ProductCard = ({ id, name, category, price, image, isPopular, isNew }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-none bg-white shadow-sm group">
      <CardContent className="p-0 relative overflow-hidden">
        <Link to={`/products/${id}`} className="block">
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
        
        <div className="absolute top-2 right-2">
          <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {isPopular && (
          <Badge variant="secondary" className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm">
            Popular
          </Badge>
        )}
        
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-primary text-white">
            New
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 gap-1 bg-white">
        <p className="text-sm text-muted-foreground">{category}</p>
        <Link to={`/products/${id}`} className="font-medium text-base hover:underline">{name}</Link>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
