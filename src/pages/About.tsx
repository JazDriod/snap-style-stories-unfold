
import { ArrowRight, Award, Camera, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "State-of-the-art cameras and lenses for stunning image quality"
    },
    {
      icon: Heart,
      title: "Passionate Approach",
      description: "We pour our heart into every shot, ensuring emotional depth"
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in photography and customer satisfaction"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored photography experience that reflects your unique story"
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
              About <span className="text-primary">D-Snaps</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate photographers dedicated to capturing life's most precious moments 
              with artistic vision and technical excellence.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-playfair font-bold text-white">
                Why Choose D-Snaps?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience in professional photography, we specialize in 
                creating timeless memories that you'll treasure forever. Our unique approach 
                combines artistic creativity with technical precision to deliver exceptional results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We understand that every client is unique, which is why we take the time to 
                understand your vision and style preferences. From intimate moments to grand 
                celebrations, we're here to capture it all with elegance and professionalism.
              </p>
              <div className="pt-4">
                <Link 
                  to="/services"
                  className="glass-button inline-flex items-center space-x-3 px-6 py-3 rounded-full font-inter font-medium group"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="service-card p-8 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                  10+ Years Experience
                </h3>
                <p className="text-gray-300">
                  Trusted by hundreds of couples and individuals for their most important moments
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="service-card text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-playfair font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center py-16">
            <div className="service-card inline-block p-8 max-w-2xl">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Ready to Create Magic Together?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Let's discuss your photography needs and create something beautiful together. 
                Every picture tells a story – let us help you tell yours.
              </p>
              <Link 
                to="/contact"
                className="glass-button inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-inter font-medium group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
