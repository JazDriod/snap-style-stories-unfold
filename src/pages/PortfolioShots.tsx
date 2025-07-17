
import { ArrowRight, User, Briefcase, Star, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const PortfolioShots = () => {
  const portfolioTypes = [
    {
      icon: User,
      title: "Personal Branding",
      description: "Professional headshots for entrepreneurs, influencers, and personal brands",
      features: ["Multiple looks", "LinkedIn optimized", "Social media formats", "Personal styling tips"]
    },
    {
      icon: Briefcase,
      title: "Corporate Headshots",
      description: "Professional business portraits for executives, teams, and corporate websites",
      features: ["Studio or office location", "Consistent team styling", "Quick turnaround", "Bulk pricing available"]
    },
    {
      icon: Star,
      title: "Model & Actor Portfolio",
      description: "Comprehensive portfolio shoots for aspiring and professional models and actors",
      features: ["Diverse looks & styles", "Commercial & fashion shots", "Casting-ready images", "Industry expertise"]
    },
    {
      icon: Camera,
      title: "Creative Portraits",
      description: "Artistic and creative portrait sessions for personal or professional use",
      features: ["Creative lighting", "Artistic direction", "Unique concepts", "Fine art printing options"]
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$200",
      duration: "1 Hour",
      photos: "15 edited photos",
      features: ["Studio session", "1 outfit change", "Basic retouching", "Digital delivery"]
    },
    {
      name: "Professional",
      price: "$350",
      duration: "1.5 Hours",
      photos: "30 edited photos",
      features: ["Studio + outdoor", "2 outfit changes", "Professional retouching", "Print release included"],
      popular: true
    },
    {
      name: "Premium",
      price: "$500",
      duration: "2 Hours",
      photos: "50 edited photos",
      features: ["Multiple locations", "3 outfit changes", "Advanced retouching", "Styling consultation", "Same-day previews"]
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
              <User className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-primary font-inter font-medium tracking-wider uppercase text-sm">
                Portfolio Photography
              </span>
              <User className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Professional
              <span className="block text-primary">Headshots & Portraits</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stand out from the crowd with professional headshots and portfolio images 
              that showcase your personality and professionalism.
            </p>
          </div>

          {/* Portfolio Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-12">
              Portfolio Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioTypes.map((type, index) => (
                <div 
                  key={type.title}
                  className="service-card"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-1">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-400 text-xs">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-white text-center mb-12">
              Portfolio Packages
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
                    <p className="text-3xl font-playfair font-bold text-primary mb-2">
                      {pkg.price}
                    </p>
                    <p className="text-gray-400 text-sm mb-1">{pkg.duration}</p>
                    <p className="text-gray-300 text-sm">{pkg.photos}</p>
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

          {/* What Makes Us Different */}
          <div className="mb-16">
            <div className="service-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold text-white text-center mb-8">
                What Makes Our Portraits Stand Out
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-primary font-playfair font-semibold">Professional Quality</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Studio-grade lighting and equipment ensure your portraits are crisp, professional, 
                    and suitable for any use from LinkedIn to billboards.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-primary font-playfair font-semibold">Guidance & Direction</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We provide professional posing guidance and direction to help you feel comfortable 
                    and look your absolute best in every shot.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-primary font-playfair font-semibold">Quick Turnaround</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Need your headshots quickly? We offer same-day previews and can deliver 
                    final edited images within 48-72 hours when needed.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-primary font-playfair font-semibold">Versatile Usage</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    All images come with print release and are delivered in multiple formats 
                    perfect for web, print, and social media use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-16">
            <div className="service-card inline-block p-8 max-w-2xl">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Ready to Elevate Your Professional Image?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Book your professional headshot session today and make a lasting impression 
                with images that truly represent who you are.
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

export default PortfolioShots;
