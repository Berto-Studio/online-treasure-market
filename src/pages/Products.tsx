
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

const Products = () => {
  useEffect(() => {
    document.title = "Products - Sonic";
  }, []);

  const products = [
    {
      id: "1",
      name: "X-Bud Wireless Earbuds",
      category: "Earbuds",
      price: 149,
      image: "/placeholder.svg",
      isNew: true,
    },
    {
      id: "2",
      name: "SonicMax Headphones",
      category: "Headphones",
      price: 299,
      image: "/placeholder.svg",
      isPopular: true,
    },
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
      id: "6",
      name: "PocketSound Mini Speaker",
      category: "Speakers",
      price: 89,
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
    {
      id: "8",
      name: "RhythmPods",
      category: "Earbuds",
      price: 129,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">All Products</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
