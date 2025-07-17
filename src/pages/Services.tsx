
import { ArrowRight, Camera, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture every magical moment of your special day with our comprehensive wedding photography packages. From intimate ceremonies to grand receptions.",
      features: ["Full day coverage", "Edited high-resolution images", "Wedding album design", "Engagement session included"],
      link: "/wedding-photography",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: Camera,
      title: "Pre-Wedding Shoot",
      description: "Beautiful engagement and pre-wedding photography sessions that capture your love story in stunning locations and creative settings.",
      features: ["Multiple outfit changes", "Location scouting", "Couple posing guidance", "Same-day preview"],
      link: "/pre-wedding-shoot",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: User,
      title: "Portfolio Shots",
      description: "Professional headshots and portfolio photography for models, actors, corporate professionals, and personal branding needs.",
      features: ["Professional lighting setup", "Multiple looks", "Retouching included", "Print-ready formats"],
      link: "/portfolio-shots",
      gradient: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <Header showHomeIcon />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our range of professional photography services, each tailored 
              to capture your unique moments with artistic excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-card relative overflow-hidden group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link 
                    to={service.link}
                    className="glass-button inline-flex items-center space-x-3 px-6 py-3 rounded-full font-inter font-medium group/btn w-full justify-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center py-16">
            <div className="service-card inline-block p-8 max-w-3xl">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Custom Photography Packages
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don't see exactly what you're looking for? We create custom photography packages 
                tailored to your specific needs. From corporate events to family portraits, 
                we've got you covered.
              </p>
              <Link 
                to="/contact"
                className="glass-button inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-inter font-medium group"
              >
                <span>Discuss Custom Package</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
