
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorSelector from "@/components/ColorSelector";
import { Badge } from "@/components/ui/badge";

interface FeaturedProductProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category?: string;
  index?: string;
}

const FeaturedProduct = ({
  title,
  subtitle,
  description,
  image,
  category,
  index = "01"
}: FeaturedProductProps) => {
  const colors = [
    { color: "Blue", bgClass: "bg-blue-500" },
    { color: "Orange", bgClass: "bg-orange-500" },
    { color: "Green", bgClass: "bg-green-500" },
    { color: "Red", bgClass: "bg-red-500" },
    { color: "Cyan", bgClass: "bg-cyan-500" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        {category && (
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-sm px-2 font-medium">
              {category}
            </Badge>
          </div>
        )}

        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {title}
            {subtitle && (
              <span className="block">{subtitle}</span>
            )}
          </h1>
          <div className="flex items-center gap-6 mt-4">
            <span className="text-5xl font-thin text-gray-400">{index}</span>
            <div className="h-px bg-gray-300 flex-grow" />
          </div>
        </div>

        <p className="text-lg text-muted-foreground max-w-md">
          {description}
        </p>

        <ColorSelector title="Popular Colors" colors={colors} />

        <Button className="gap-2 rounded-full px-6">
          View All Products <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden bg-blue-50 flex items-center justify-center p-6">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full max-h-[400px] animate-fade-in"
          />
        </div>
        <div className="absolute w-full h-full inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-blue-500 opacity-50" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-500 opacity-30" />
          <div className="absolute top-1/2 right-1/3 w-6 h-6 rounded-full bg-blue-500 opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
