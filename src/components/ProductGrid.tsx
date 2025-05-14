
import ProductCard, { ProductCardProps } from "@/components/ProductCard";

interface ProductGridProps {
  title: string;
  viewAllLink?: string;
  products: ProductCardProps[];
}

const ProductGrid = ({ title, viewAllLink, products }: ProductGridProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className="text-sm text-primary hover:underline">
            View all
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
