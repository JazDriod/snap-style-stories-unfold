
import { Aperture, Home, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  showHomeIcon?: boolean;
}

const Header = ({ showHomeIcon = false }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-sm bg-black/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Aperture className="w-8 h-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-2xl font-playfair font-bold text-transparent bg-gradient-to-r from-primary to-white bg-clip-text border border-primary/30 px-3 py-1 rounded-md group-hover:border-primary/60 transition-all duration-300">
            D-Snaps
          </span>
        </Link>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          {showHomeIcon && !isHomePage && (
            <Link 
              to="/" 
              className="glass-button p-3 rounded-full hover:animate-pulse"
              title="Home"
            >
              <Home className="nav-icon" />
            </Link>
          )}
          
          <Link 
            to="/contact" 
            className="glass-button p-3 rounded-full hover:animate-pulse"
            title="Contact Us"
          >
            <Phone className="nav-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
