import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';
import ProductsSection from "./sections/product";

export default function DristicCoolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
    <div className="bg-gray-100 text-gray-800">
      {/* Navigation */}
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        closeMobileMenu={closeMobileMenu} 
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation Component
function Navbar({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Bosscoolant</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300 transition">Home</a>
            <a href="#products" className="hover:text-gray-300 transition">Products</a>
            <a href="#benefits" className="hover:text-gray-300 transition">Benefits</a>
            <a href="#about" className="hover:text-gray-300 transition">About Us</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a href="#home" onClick={closeMobileMenu} className="hover:text-gray-300 py-2 border-b border-gray-700">Home</a>
              <a href="#products" onClick={closeMobileMenu} className="hover:text-gray-300 py-2 border-b border-gray-700">Products</a>
              <a href="#benefits" onClick={closeMobileMenu} className="hover:text-gray-300 py-2 border-b border-gray-700">Benefits</a>
              <a href="#about" onClick={closeMobileMenu} className="hover:text-gray-300 py-2 border-b border-gray-700">About Us</a>
              <a href="#contact" onClick={closeMobileMenu} className="hover:text-gray-300 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">Premium Automotive Solutions</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
          Protect your engine with DristicCool's premium coolants and battery distilled water. 
          Engineered for optimal performance and longevity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold text-sm md:text-base">10+ Years Experience</div>
          <div className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold text-sm md:text-base">500+ Satisfied Customers</div>
          <div className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold text-sm md:text-base">10+ Premium Products</div>
        </div>
        
        <a href="#products" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
          View Our Products
        </a>
      </div>
    </section>
  );
}


// Color classes mapping (must be outside to be accessible by both components)
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
    <section id="benefits" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Why Choose DristicCool</h2>
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
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className={`mx-auto w-16 h-16 flex items-center justify-center ${color.bg} rounded-full mb-4`}>
        <i className={`fas fa-${benefit.icon} ${color.text} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
}



// About Us Section Component
function AboutSection() {
  const stats = [
    { value: "10+", label: "Years in Business" },
    { value: "500+", label: "Happy Customers" },
    { value: "10+", label: "Premium Products" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading visible on both mobile and desktop */}
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center ">
          About Boss Coolant
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* SVG Container - larger on mobile */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 w-full h-72 sm:h-96 flex items-center justify-center shadow-md">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full max-h-full"
                aria-label="Boss Coolant Logo"
              >
                {/* Background Elements */}
                <defs>
                  <linearGradient id="coolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#bae6fd" />
                  </linearGradient>
                  <radialGradient id="frostGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#e0f7fa" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#e0f7fa" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Cool Background Effect */}
                <circle cx="200" cy="200" r="160" fill="url(#frostGlow)" />
                
                {/* Service Area Map */}
                <g transform="translate(60, 280) scale(0.6)">
                  <path d="M100,30 C120,10 150,5 180,20 C210,35 250,30 270,60 C290,90 310,80 330,100 C350,120 340,150 320,170 C300,190 310,220 280,240 C250,260 220,250 190,270 C160,290 120,280 100,250 C80,220 50,210 40,180 C30,150 40,120 60,100 C80,80 80,50 100,30z" 
                  fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                  
                  {/* Surat Point */}
                  <circle cx="170" cy="150" r="8" fill="#0369a1" />
                  <text x="170" y="135" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">Surat</text>
                  
                  {/* 100km Range Circle */}
                  <circle cx="170" cy="150" r="70" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" />
                </g>
                
                {/* Coolant Container */}
                <g transform="translate(180, 100) scale(0.9)">
                  {/* Container Glow */}
                  <ellipse cx="0" cy="70" rx="60" ry="20" fill="url(#frostGlow)" />
                  
                  {/* Main Container */}
                  <rect x="-40" y="-40" width="80" height="150" rx="10" fill="#0ea5e9" />
                  <rect x="-35" y="-35" width="70" height="140" rx="8" fill="url(#coolGradient)" />
                  
                  {/* Liquid Levels with Wave Effect */}
                  <path d="M-35,0 C-25,-5 -15,5 -5,0 C5,-5 15,5 25,0 C35,-5 35,105 25,105 C15,105 5,105 -5,105 C-15,105 -25,105 -35,105 Z" fill="#38bdf8" opacity="0.8" />
                  <path d="M-35,30 C-25,25 -15,35 -5,30 C5,25 15,35 25,30 C35,25 35,105 25,105 C15,105 5,105 -5,105 C-15,105 -25,105 -35,105 Z" fill="#0284c7" opacity="0.9" />
                  
                  {/* Cap */}
                  <rect x="-25" y="-60" width="50" height="20" rx="5" fill="#1e40af" />
                  <rect x="-15" y="-50" width="30" height="10" fill="#1e40af" />
                  
                  {/* Temperature Indicator */}
                  <rect x="42" y="-35" width="10" height="140" rx="5" fill="#94a3b8" />
                  <rect x="44" y="25" width="6" height="80" rx="3" fill="#ef4444" />
                  <rect x="44" y="-25" width="6" height="45" rx="3" fill="#22c55e" />
                  
                  {/* Frost Effect */}
                  <path d="M-60,-20 L-70,-30 L-65,-10 L-80,-15 L-70,0" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M60,40 L70,30 L65,50 L80,45 L70,60" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M-50,80 L-60,70 L-55,90 L-70,85 L-60,100" stroke="white" strokeWidth="2" fill="none" />
                </g>
                
                {/* Coolant Droplets with Animation Effect */}
                <g>
                  <circle cx="140" cy="90" r="8" fill="#38bdf8" opacity="0.8" />
                  <circle cx="250" cy="110" r="6" fill="#38bdf8" opacity="0.7" />
                  <circle cx="120" cy="160" r="10" fill="#38bdf8" opacity="0.9" />
                  <circle cx="260" cy="180" r="7" fill="#38bdf8" opacity="0.8" />
                </g>
                
                {/* Company Name and Tagline */}
                <g transform="translate(200, 50)">
                  <text x="0" y="0" textAnchor="middle" fill="#0f172a" fontSize="28" fontWeight="bold">BOSS COOLANT</text>
                  <text x="0" y="25" textAnchor="middle" fill="#475569" fontSize="16">Premium Cooling Solutions</text>
                </g>
                
                {/* Service Area Text */}
                <text x="200" y="360" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">Serving Surat & 100km Range</text>
              </svg>
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-4 text-lg">
                Founded over 10 years ago, Boss Coolant has been committed to providing premium automotive 
                cooling solutions and battery distilled water to customers across the country.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our team of experts works tirelessly to develop products that meet the evolving needs 
                of modern vehicles while maintaining the highest standards of quality and reliability.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We proudly supply across <span className="font-semibold">Surat and surrounding areas within a 100 km radius</span>, 
                ensuring fast delivery and exceptional service to all our customers.
              </p>
            </div>
            
            {/* Stats section - 1 column on smallest screens, 2 columns on larger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      rating: 5,
      text: "Been using DristicCool products for my fleet of trucks for 5 years. Their coolant has protected our engines in the harshest conditions."
    },
    {
      name: "Priya Singh",
      rating: 4.5,
      text: "The battery distilled water has significantly extended the life of my car battery. Great value for money and excellent service."
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: "As a mechanic, I recommend DristicCool to all my customers. Their products consistently deliver superior performance and protection."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <i className="fas fa-user text-gray-500"></i>
          </div>
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <div className="text-yellow-500">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600">"{testimonial.text}"</p>
    </div>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', phone: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500" 
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500" 
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500" 
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          rows="4" 
          className="w-full px-4 py-2 rounded bg-gray-600 border border-gray-500 text-white focus:outline-none focus:border-blue-500" 
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 w-full"
      >
        Send Message
      </button>
    </form>
  );
}

// Contact Info Component
function ContactInfo() {
  const socialLinks = [
    { icon: Facebook, bg: "bg-blue-800", hover: "hover:bg-blue-700" },
    { icon: Twitter, bg: "bg-blue-400", hover: "hover:bg-blue-500" },
    { icon: Instagram, bg: "bg-pink-600", hover: "hover:bg-pink-700" },
    { icon: MessageSquare, bg: "bg-green-600", hover: "hover:bg-green-700" }
  ];

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <MapPin className="text-blue-400" size={18} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Our Location</h4>
            <p className="text-gray-300">123 Industrial Area, Phase 2, New Delhi, India</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Phone className="text-blue-400" size={18} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Call Us</h4>
            <p className="text-gray-300">+91 98765 43210</p>
            <p className="text-gray-300">+91 12345 67890</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Mail className="text-blue-400" size={18} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email Us</h4>
            <p className="text-gray-300">info@dristiccool.com</p>
            <p className="text-gray-300">sales@dristiccool.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Clock className="text-blue-400" size={18} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Business Hours</h4>
            <p className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold mb-3">Follow Us</h4>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href="#" 
              className={`w-10 h-10 ${link.bg} rounded-full flex items-center justify-center ${link.hover} transition`}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">DristicCool</div>
            <p className="text-gray-400 text-sm">Premium Coolant & Battery Water Solutions</p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <div className="flex space-x-4">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#products" className="hover:text-blue-400 transition">Products</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">&copy; 2025 DristicCool. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}