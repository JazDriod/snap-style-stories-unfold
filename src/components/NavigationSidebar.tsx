import { Home, Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavigationSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="glass-button p-3 rounded-full">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-black/90 backdrop-blur-sm border-white/20">
          <div className="flex flex-col space-y-6 mt-8">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
              onClick={closeSheet}
            >
              <Home className="w-5 h-5" />
              <span className="text-lg">Home</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
              onClick={closeSheet}
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Contact Us</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationSidebar;