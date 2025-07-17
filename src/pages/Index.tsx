
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-primary font-inter font-medium tracking-wider uppercase text-sm">
                Professional Photography
              </span>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight">
              Trust Us on
              <span className="block text-primary">
                Your Big Day
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter font-light max-w-2xl mx-auto leading-relaxed">
              Capturing life's most precious moments with artistic excellence and timeless elegance
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link 
              to="/about"
              className="glass-button inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-inter font-medium group page-transition"
            >
              <span>Click here to know about us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Subtle Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { title: "Wedding Photography", desc: "Capturing your special day" },
              { title: "Pre-Wedding Shoots", desc: "Beautiful engagement moments" },
              { title: "Portfolio Sessions", desc: "Professional headshots & more" }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-white font-playfair font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-inter">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
