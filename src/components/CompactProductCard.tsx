
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CompactProductCardProps {
  id: string;
  title: string;
  image: string;
  stats?: {
    count: string;
    label: string;
  };
  isPopular?: boolean;
}

const CompactProductCard = ({ id, title, image, stats, isPopular }: CompactProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border shadow-sm">
      <div className="p-4 space-y-4">
        {isPopular && (
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            <span className="text-xs font-medium">Popular</span>
          </div>
        )}
        
        <h3 className="font-medium text-lg">{title}</h3>
        
        {stats && (
          <div className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white p-3">
            <div className="text-center">
              <div className="font-bold text-lg">{stats.count}</div>
              <div className="text-xs">{stats.label}</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="relative">
        <img src={image} alt={title} className="w-full h-auto" />
        
        <Link to={`/products/${id}`} className="absolute bottom-3 right-3">
          <Button variant="secondary" size="icon" className="rounded-full">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompactProductCard;
