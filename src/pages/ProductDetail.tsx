
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ColorSelector from "@/components/ColorSelector";
import ProductGrid from "@/components/ProductGrid";

const ProductDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    document.title = "SonicMax Headphones - Sonic";
    // In a real app, we would fetch the product details based on the ID
  }, [id]);

  const colors = [
    { color: "Blue", bgClass: "bg-blue-500", selected: true },
    { color: "Black", bgClass: "bg-black" },
    { color: "Red", bgClass: "bg-red-500" },
    { color: "Gray", bgClass: "bg-gray-400" },
  ];

  const similarProducts = [
    {
      id: "3",
      name: "BoomBox Ultra Speaker",
      category: "Speakers",
      price: 199,
      image: "/placeholder.svg",
    },
    {
      id: "4",
      name: "AudioPulse Earphones",
      category: "Earphones",
      price: 129,
      image: "/placeholder.svg",
    },
    {
      id: "5",
      name: "BassDrop Headphones",
      category: "Headphones",
      price: 249,
      image: "/placeholder.svg",
    },
    {
      id: "7",
      name: "NoiseFree Pro",
      category: "Headphones",
      price: 349,
      image: "/placeholder.svg",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-3xl p-8 flex items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="SonicMax Headphones"
              className="max-w-full max-h-[400px] object-contain"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Headphones</p>
              <h1 className="text-3xl font-bold mt-1">SonicMax Premium Headphones</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">(120 reviews)</span>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold">$299.00</h2>
              <p className="text-sm text-muted-foreground mt-1">Free shipping on all continental US orders.</p>
            </div>
            
            <div className="space-y-4">
              <ColorSelector title="Color" colors={colors} />
              
              <div>
                <h3 className="font-medium text-sm mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Active Noise Cancellation</li>
                  <li>40-hour battery life</li>
                  <li>Wireless Bluetooth 5.2</li>
                  <li>Premium comfort ear pads</li>
                  <li>Built-in high-quality microphone</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Heart className="h-4 w-4" /> Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <ProductGrid
            title="You might also like"
            products={similarProducts}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
