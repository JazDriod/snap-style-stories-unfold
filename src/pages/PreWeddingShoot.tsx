
import { ArrowRight, Camera, Heart, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const PreWeddingShoot = () => {
  const locations = [
    { name: "Beach Sunset", desc: "Romantic golden hour shots by the ocean" },
    { name: "Urban Cityscape", desc: "Modern metropolitan backdrops" },
    { name: "Nature & Gardens", desc: "Lush greenery and natural beauty" },
    { name: "Historic Architecture", desc: "Timeless and elegant settings" }
  ];

  const includes = [
    "2-3 hour photography session",
    "Multiple outfit changes (up to 3)",
    "Location scouting assistance",
    "Professional posing guidance",
    "100+ edited high-resolution images",
    "Online gallery for sharing",
    "Same-day preview (10-15 photos)",
    "Print release included"
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <Header showHomeIcon />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-primary font-inter font-medium tracking-wider uppercase text-sm">
                Pre-Wedding Photography
              </span>
              <Camera className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Your Love Story
              <span className="block text-primary">Beautifully Told</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Celebrate your engagement with stunning pre-wedding photography that captures 
              your unique bond and the excitement leading up to your big day.
            </p>
          </div>

          {/* Why Choose Pre-Wedding Shoots */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-playfair font-bold text-white">
                Why Pre-Wedding Shoots?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-playfair font-semibold mb-1">Comfort with Your Photographer</h3>
                    <p className="text-gray-300 text-sm">Get comfortable with us before your wedding day, ensuring natural and relaxed photos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-playfair font-semibold mb-1">More Time for Creativity</h3>
                    <p className="text-gray-300 text-sm">Without the time constraints of a wedding day, we can explore creative shots and locations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-playfair font-semibold mb-1">Beautiful Locations</h3>
                    <p className="text-gray-300 text-sm">Choose from stunning locations that reflect your personality and style as a couple.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6 text-center">
                Package Includes
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <p className="text-primary text-2xl font-playfair font-bold">Starting from $450</p>
                <p className="text-gray-400 text-sm mt-1">Additional locations available</p>
              </div>
            </div>
          </div>

          {/* Location Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-12">
              Popular Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div 
                  key={location.name}
                  className="service-card text-center"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-white mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {location.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <div className="service-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-white text-center mb-8">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-playfair font-bold">1</span>
                  </div>
                  <h3 className="text-white font-playfair font-semibold mb-2">Planning</h3>
                  <p className="text-gray-300 text-sm">We'll discuss locations, outfits, and your vision for the shoot.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-playfair font-bold">2</span>
                  </div>
                  <h3 className="text-white font-playfair font-semibold mb-2">Shooting</h3>
                  <p className="text-gray-300 text-sm">Relaxed 2-3 hour session with professional guidance and direction.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-playfair font-bold">3</span>
                  </div>
                  <h3 className="text-white font-playfair font-semibold mb-2">Delivery</h3>
                  <p className="text-gray-300 text-sm">Edited photos delivered within 2-3 weeks via online gallery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-16">
            <div className="service-card inline-block p-8 max-w-2xl">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Ready to Capture Your Love Story?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Book your pre-wedding shoot today and create beautiful memories that will last a lifetime. 
                Let's make magic together!
              </p>
              <Link 
                to="/contact"
                className="glass-button inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-inter font-medium group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreWeddingShoot;
