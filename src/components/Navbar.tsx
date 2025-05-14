
import { Search, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 md:px-6 py-3 bg-white/80 backdrop-blur-md border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">sonic.</span>
          </Link>
          
          <div className="hidden md:flex relative rounded-full bg-secondary px-4 py-2 w-[280px]">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="border-0 focus-visible:ring-0 bg-transparent px-0"
            />
            <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
          
          <Avatar className="h-9 w-9 border">
            <AvatarFallback>RA</AvatarFallback>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
