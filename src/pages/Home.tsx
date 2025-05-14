
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FeaturedProduct from "@/components/FeaturedProduct";
import ProductGrid from "@/components/ProductGrid";
import ColorSelector from "@/components/ColorSelector";
import CompactProductCard from "@/components/CompactProductCard";

const Home = () => {
  useEffect(() => {
    document.title = "Sonic - Premium Audio Equipment";
  }, []);

  const popularColors = [
    { color: "Blue", bgClass: "bg-blue-500", selected: true },
    { color: "Orange", bgClass: "bg-orange-500" },
    { color: "Green", bgClass: "bg-green-500" },
    { color: "Red", bgClass: "bg-red-500" },
    { color: "Cyan", bgClass: "bg-cyan-500" },
  ];

  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8 space-y-16">
        <section className="py-8">
          <FeaturedProduct
            title="SonicMax"
            subtitle="Premium Headphones"
            category="Music is Classic"
            description="Experience studio-quality sound with our flagship wireless headphones. Perfect for audiophiles and music enthusiasts."
            image="/placeholder.svg"
          />
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h2 className="text-xl font-semibold mb-4">Popular Colors</h2>
                <ColorSelector colors={popularColors} />
                
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {popularColors.map((color, index) => (
                    <div key={index} className={`h-10 rounded ${color.bgClass}`}></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">New Gen</h2>
                  <span className="text-sm text-muted-foreground">X-Bud</span>
                </div>
                
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="New Generation X-Bud"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">VR Audio</h2>
                  <span className="text-sm text-muted-foreground">Immersive</span>
                </div>
                
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="VR Audio Headset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ProductGrid
            title="Popular Products"
            viewAllLink="/products"
            products={featuredProducts}
          />
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">More Products</h2>
                <p className="text-sm text-muted-foreground">460+ items</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-square bg-gray-100 rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt={`Product thumbnail ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                4.8 reviews
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <CompactProductCard 
              id="special1"
              title="Listening Has Been Released"
              image="/placeholder.svg"
              isPopular={true}
            />
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Light Grey Surface</h2>
                <p className="text-sm text-muted-foreground">Boosted with bass</p>
              </div>
              
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Light Grey Surface Headphones"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Sonic. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
