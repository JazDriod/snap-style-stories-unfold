import { Home, Phone, Menu, LogIn, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavigationSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const closeSheet = () => {
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    closeSheet();
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
            
            {user && (
              <>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
                  onClick={closeSheet}
                >
                  <User className="w-5 h-5" />
                  <span className="text-lg">About</span>
                </Link>
                
                <Link 
                  to="/services" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
                  onClick={closeSheet}
                >
                  <Home className="w-5 h-5" />
                  <span className="text-lg">Services</span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
                  onClick={closeSheet}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">Contact Us</span>
                </Link>
              </>
            )}

            {user ? (
              <>
                <div className="flex items-center space-x-3 text-white p-3 rounded-md bg-white/10">
                  <User className="w-5 h-5" />
                  <span className="text-lg">Welcome!</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10 justify-start w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-lg">Sign Out</span>
                </Button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-3 rounded-md hover:bg-white/10"
                onClick={closeSheet}
              >
                <LogIn className="w-5 h-5" />
                <span className="text-lg">Sign In</span>
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationSidebar;