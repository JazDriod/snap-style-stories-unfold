
import { ArrowRight, Heart, Clock, Camera, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const WeddingPhotography = () => {
  const packages = [
    {
      name: "Essential",
      duration: "6 Hours",
      price: "Starting from $1,200",
      features: [
        "6 hours of coverage",
        "200+ edited photos",
        "Online gallery",
        "USB with all images",
        "1 photographer"
      ]
    },
    {
      name: "Premium",
      duration: "8 Hours",
      price: "Starting from $1,800",
      features: [
        "8 hours of coverage",
        "400+ edited photos",
        "Online gallery",
        "Wedding album (50 pages)",
        "2 photographers",
        "Engagement session included"
      ],
      popular: true
    },
    {
      name: "Luxury",
      duration: "Full Day",
      price: "Starting from $2,500",
      features: [
        "12 hours of coverage",
        "600+ edited photos",
        "Premium online gallery",
        "Luxury wedding album (100 pages)",
        "2 photographers + assistant",
        "Engagement session included",
        "Same-day preview (20 photos)"
      ]
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <Header showHomeIcon />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-primary font-inter font-medium tracking-wider uppercase text-sm">
                Wedding Photography
              </span>
              <Heart className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Your Perfect
              <span className="block text-primary">Wedding Day</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We capture every precious moment of your special day, from the nervous excitement 
              of getting ready to the joyful celebration with family and friends.
            </p>
          </div>

          {/* What We Capture */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-12">
              What We Capture
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "Getting Ready", desc: "Intimate pre-ceremony moments" },
                { icon: Heart, title: "Ceremony", desc: "Your vows and first kiss" },
                { icon: Camera, title: "Portraits", desc: "Beautiful couple and family photos" },
                { icon: Gift, title: "Reception", desc: "Dancing and celebration" }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="service-card text-center"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-12">
              Wedding Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.name}
                  className={`service-card relative ${pkg.popular ? 'ring-2 ring-primary/50' : ''}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-inter font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-primary font-inter font-medium mb-1">
                      {pkg.duration}
                    </p>
                    <p className="text-lg text-gray-300">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className="glass-button inline-flex items-center space-x-3 px-6 py-3 rounded-full font-inter font-medium group w-full justify-center"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="text-center py-16">
            <div className="service-card inline-block p-8 max-w-3xl">
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                Our Wedding Photography Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="text-primary font-playfair font-semibold mb-2">1. Consultation</h4>
                  <p className="text-gray-300 text-sm">Discuss your vision, timeline, and preferences</p>
                </div>
                <div>
                  <h4 className="text-primary font-playfair font-semibold mb-2">2. Wedding Day</h4>
                  <p className="text-gray-300 text-sm">Professional photography with minimal intrusion</p>
                </div>
                <div>
                  <h4 className="text-primary font-playfair font-semibold mb-2">3. Delivery</h4>
                  <p className="text-gray-300 text-sm">Edited photos delivered within 4-6 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPhotography;
