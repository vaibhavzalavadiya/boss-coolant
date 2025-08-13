import { useEffect } from 'react';
import ProductsSection from "../sections/product";
import ContactSection from "../sections/Contact";
import TestimonialsSection from "../sections/TestimonialsSection";

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen lg:py-16 py-10 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/images/home-banner.png" 
          alt="Boss Coolant Products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-white px-4 py-2 rounded-full text-sm font-semibold lg:mb-6 mb-4">
            <i className="fas fa-trophy mr-2"></i>
            Surat Leading Coolant Brand
          </div>
          
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold lg:mb-6 mb-4 leading-tight">
            Boss Coolant
            <span className="block text-white">Ultimate Engine Care</span>
          </h1>
          
          <p className="text-base md:text-xl lg:mb-8 mb-5 max-w-3xl mx-auto leading-relaxed">
            Experience unmatched engine protection with Boss Coolant's advanced formulations. 
            From premium coolants to pure distilled water - we keep your vehicles running stronger, longer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:mb-12 mb-5">
            <a href="#products" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white lg:px-8 px-4 lg:py-4 py-3 rounded-lg font-semibold md:text-lg text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-105">
              <i className="fas fa-rocket mr-2"></i>
              Discover Products
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm text-white lg:px-8 px-4 lg:py-4 py-3 rounded-lg font-semibold md:text-lg text-base border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-handshake mr-2"></i>
              Partner With Us
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:gap-6 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-white mb-1">600+</div>
              <div className="text-white text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-white mb-1">10+</div>
              <div className="text-white text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-white mb-1">99.9%</div>
              <div className="text-white text-sm">Purity Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-white mb-1">24/7</div>
              <div className="text-white text-sm">Support</div>
            </div>
          </div>
     
        </div>
      </div>
    </section>
  );
}

// Color classes mapping
const colorClasses = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  gray: { bg: "bg-gray-100", text: "text-gray-600" },
};

// Benefits Section Component
function BenefitsSection() {
  const benefits = [
    {
      icon: "medal",
      color: "blue",
      title: "Premium Quality",
      description: "Our coolants and battery water meet the highest industry standards for performance and reliability."
    },
    {
      icon: "leaf",
      color: "green",
      title: "Eco-Friendly",
      description: "Environmentally conscious formulations that minimize impact while maximizing performance."
    },
    {
      icon: "fire-alt",
      color: "red",
      title: "Engine Protection",
      description: "Advanced formulations that protect against corrosion, overheating, and freezing."
    },
    {
      icon: "battery-full",
      color: "purple",
      title: "Battery Longevity",
      description: "Our distilled water extends battery life by preventing mineral buildup and maintaining optimal performance."
    },
    {
      icon: "bolt",
      color: "yellow",
      title: "Increased Efficiency",
      description: "Improved thermal management for better fuel economy and reduced emissions."
    },
    {
      icon: "rupee-sign",
      color: "gray",
      title: "Cost Effective",
      description: "Quality products at competitive prices that save you money in the long run."
    }
  ];

  return (
    <section id="benefits" className="py-10 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Boss Coolant
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium automotive cooling solutions designed for maximum performance and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Benefit Card Component
function BenefitCard({ benefit }) {
  const color = colorClasses[benefit.color] || colorClasses.gray;

  return (
    <div className="bg-white sm:p-6 p-4 rounded-lg shadow-md text-center">
      <div className={`mx-auto w-16 h-16 flex items-center justify-center ${color.bg} rounded-full mb-4`}>
        <i className={`fas fa-${benefit.icon} ${color.text} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
}



function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default Home;