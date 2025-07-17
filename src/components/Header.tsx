
import { Camera, Home, Phone } from "lucide-react";
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
          <Camera className="w-8 h-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-2xl font-playfair font-bold text-white group-hover:text-primary transition-colors duration-300">
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
