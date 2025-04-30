import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';
import ProductsSection from "./sections/product";

export default function BossCoolantWebsite() {
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
          Protect your engine with BossCoolant's premium coolants and battery distilled water. 
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
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Why Choose BossCoolant</h2>
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
      text: "Been using BossCoolant products for my fleet of trucks for 5 years. Their coolant has protected our engines in the harshest conditions."
    },
    {
      name: "Priya Singh",
      rating: 4.5,
      text: "The battery distilled water has significantly extended the life of my car battery. Great value for money and excellent service."
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: "As a mechanic, I recommend BossCoolant to all my customers. Their products consistently deliver superior performance and protection."
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
            <p className="text-gray-300">info@BossCoolant.com</p>
            <p className="text-gray-300">sales@BossCoolant.com</p>
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section with Logo and Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center sm:items-start">
              {/* Logo */}
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <svg viewBox="0 0 60 60" className="w-10 h-10 text-white">
                  <path d="M30,10 L40,20 L40,45 C40,47.2 38.2,49 36,49 L24,49 C21.8,49 20,47.2 20,45 L20,20 L30,10 Z" 
                    fill="currentColor" opacity="0.3" />
                  <path d="M30,5 L45,20 L45,50 C45,52.2 43.2,54 41,54 L19,54 C16.8,54 15,52.2 15,50 L15,20 L30,5 Z" 
                    fill="currentColor" />
                  <path d="M30,20 C31.1,20 32,19.1 32,18 C32,16.9 31.1,16 30,16 C28.9,16 28,16.9 28,18 C28,19.1 28.9,20 30,20 Z M30,24 C26.7,24 24,21.3 24,18 C24,14.7 26.7,12 30,12 C33.3,12 36,14.7 36,18 C36,21.3 33.3,24 30,24 Z" 
                    fill="white" />
                  <path d="M25,32 L35,32 L35,38 L25,38 Z" fill="white" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Boss Coolant
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 max-w-xs mx-auto sm:mx-0">
                Premium automotive cooling solutions and battery distilled water serving Surat and 100km radius.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block sm:inline-block">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 mr-0 mb-2 sm:mb-0 sm:mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 mr-0 mb-2 sm:mb-0 sm:mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:info@bosscoolant.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  info@bosscoolant.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 mr-0 mb-2 sm:mb-0 sm:mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <address className="text-gray-300 not-italic">
                  Surat, Gujarat, India
                </address>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 sm:mb-0 sm:mr-2 w-full" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
        
        {/* Bottom Section with Copyright and Extra Links */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">&copy; 2025 Boss Coolant. All rights reserved.</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}