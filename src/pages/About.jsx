import { useState, useEffect, useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import aboutBanner from '../assets/images/IMG-20240813-WA0006.jpg';

// Animated Counter Component
function StatCard({ stat, index }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(stat.value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  const formatValue = (value) => {
    if (stat.value.includes('+')) return `${value}+`;
    if (stat.value.includes('/')) return `24/7`;
    if (stat.value.includes('%')) return `${value}%`;
    return value;
  };

  return (
    <div ref={ref} className="text-center group">
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
          <i className={`fas fa-${stat.icon} text-white text-3xl`}></i>
        </div>
        <div className="absolute -inset-2 bg-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-3 tabular-nums">
        {isVisible ? formatValue(count) : '0'}
      </div>
      <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
    </div>
  );
}

// Countdown Component
function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (e.g., 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:mb-16 mb-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Special Launch Offer</h3>
        <p className="text-blue-100">Limited time offer on our premium coolant range</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
          <div className="text-blue-200 text-sm uppercase tracking-wide">Days</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
          <div className="text-blue-200 text-sm uppercase tracking-wide">Hours</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
          <div className="text-blue-200 text-sm uppercase tracking-wide">Minutes</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.seconds}</div>
          <div className="text-blue-200 text-sm uppercase tracking-wide">Seconds</div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const stats = [
    { value: "10+", label: "Years in Business", icon: "calendar" },
    { value: "5000+", label: "Happy Customers", icon: "users" },
    { value: "15+", label: "Premium Products", icon: "award" },
    { value: "24/7", label: "Customer Support", icon: "headphones" }
  ];

  const achievements = [
    { title: "ISO Certified", description: "Quality management system certified", icon: "certificate" },
    { title: "Eco-Friendly", description: "Environmentally conscious formulations", icon: "leaf" },
    { title: "Fast Delivery", description: "Quick delivery across Gujarat", icon: "truck" },
    { title: "Expert Support", description: "Technical assistance available", icon: "tools" }
  ];

  const leadership = [
    { 
      name: "Rajesh Patel", 
      role: "Chief Executive Officer", 
      experience: "15+ years in automotive industry",
      description: "Visionary leader driving Boss Coolant's growth and innovation in automotive cooling solutions.",
      expertise: ["Strategic Planning", "Business Development", "Industry Relations"],
      image: "/src/assets/images/ceo-rajesh.jpg"
    },
    { 
      name: "Priya Shah", 
      role: "Co-Founder & CTO", 
      experience: "12+ years in chemical engineering",
      description: "Technical expert ensuring product quality and driving research & development initiatives.",
      expertise: ["Product Development", "Quality Assurance", "Technical Innovation"],
      image: "/src/assets/images/cto-priya.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutBanner} 
            alt="Boss Coolant About" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-building mr-2"></i>
              Our Story
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About <span className="text-blue-400">Boss Coolant</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Your trusted partner for premium automotive cooling solutions since 2014. 
              Leading Gujarat's automotive industry with innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Company Story */}
          <div className="lg:mb-16 mb-10">
            <div className="bg-white rounded-2xl p-4 md:p-12 shadow-xl border border-gray-100">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2014, Boss Coolant has been Gujarat's trusted partner in automotive excellence. 
                  What started as a vision to provide superior engine protection has grown into a leading 
                  manufacturer of premium coolants and distilled water.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our commitment to innovation, quality, and customer satisfaction has earned us the trust 
                  of over 5,000 customers across Gujarat and beyond.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-blue-50 lg:p-6 p-4 rounded-xl">
                    <i className="fas fa-industry text-blue-600 text-2xl mb-3"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">Manufacturing Excellence</h4>
                    <p className="text-sm text-gray-600">State-of-the-art facility with advanced quality control</p>
                  </div>
                  <div className="bg-green-50 lg:p-6 p-4 rounded-xl">
                    <i className="fas fa-leaf text-green-600 text-2xl mb-3"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h4>
                    <p className="text-sm text-gray-600">Sustainable practices and environmentally safe products</p>
                  </div>
                  <div className="bg-purple-50 lg:p-6 p-4 rounded-xl">
                    <i className="fas fa-handshake text-purple-600 text-2xl mb-3"></i>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer First</h4>
                    <p className="text-sm text-gray-600">24/7 support and personalized service solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with Animated Counters */}
          <div className="relative overflow-hidden rounded-3xl lg:mb-16 mb-10">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
            </div>
            
            <div className="relative z-10 p-4 lg:p-12">
              <div className="text-center lg:mb-12 mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">Numbers that reflect our commitment to excellence and customer satisfaction</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:mb-16 mb-10">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-6 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl lg:p-6 p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`fas fa-${achievement.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mb-16 mb-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide premium quality automotive cooling solutions that ensure optimal vehicle performance, 
                longevity, and reliability while maintaining environmental responsibility and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading provider of automotive cooling solutions in Gujarat and beyond, 
                recognized for innovation, quality, and exceptional customer service in the automotive industry.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="lg:mb-16 mb-10">
            <div className="text-center lg:mb-12 mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the visionary leaders driving Boss Coolant's mission to deliver excellence in automotive cooling solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-200">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                        <i className="fas fa-user-tie text-blue-600 text-3xl"></i>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                    <p className="text-blue-600 font-semibold text-lg mb-2">{leader.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{leader.experience}</p>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-center">{leader.description}</p>
                  <div className="border-t pt-4">
                    <h5 className="font-semibold text-gray-900 mb-3 text-center">Expertise</h5>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Countdown Section */}
          <CountdownSection />

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our premium automotive cooling solutions and how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Get Quote
              </button>
              <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;