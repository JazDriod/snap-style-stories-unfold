
import { Aperture, Home, Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  showHomeIcon?: boolean;
}

const Header = ({ showHomeIcon = false }: HeaderProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-sm bg-black/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
          <Aperture className="w-8 h-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-2xl font-playfair font-bold text-transparent bg-gradient-to-r from-primary to-white bg-clip-text border border-primary/30 px-3 py-1 rounded-md group-hover:border-primary/60 transition-all duration-300">
            D-Snaps
          </span>
        </Link>

        {/* Navigation - Home Page */}
        {isHomePage && (
          <div className="flex items-center space-x-6">
            <Link 
              to="/contact" 
              className="glass-button p-3 rounded-full hover:animate-pulse"
              title="Contact Us"
            >
              <Phone className="nav-icon" />
            </Link>
          </div>
        )}

        {/* Navigation - Other Pages */}
        {!isHomePage && (
          <div className="relative">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="glass-button p-3 rounded-full hover:animate-pulse"
              title="Menu"
            >
              {isMenuOpen ? (
                <X className="nav-icon" />
              ) : (
                <Menu className="nav-icon" />
              )}
            </button>

            {/* Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[160px]">
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-2 rounded-md hover:bg-white/10"
                    onClick={closeMenu}
                    title="Home"
                  >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 p-2 rounded-md hover:bg-white/10"
                    onClick={closeMenu}
                    title="Contact Us"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
