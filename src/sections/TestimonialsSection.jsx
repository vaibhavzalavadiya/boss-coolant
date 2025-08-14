import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
      </svg>
    ));
  };

  return (
    <div className="group bg-white lg:p-6 p-4 rounded-lg border border-gray-200 transition-all duration-300 h-full flex flex-col hover:border-blue-200 relative overflow-hidden">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={40} className="text-blue-600" />
      </div>
      
      {/* Content */}
      <div className="flex-1 mb-4">
        <p className="text-gray-700 text-base leading-relaxed italic line-clamp-3">
          "{testimonial.text}"
        </p>
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
        <span className="ml-2 text-sm text-gray-600">({testimonial.rating})</span>
      </div>
      
      {/* Customer Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Transport Owner, Surat",
      rating: 5,
      text: "Been using BossCoolant products for my fleet of trucks for 5 years. Their coolant has protected our engines in the harshest conditions. Excellent quality and service!",
    },
    {
      name: "Priya Singh",
      location: "Car Owner, Vadodara",
      rating: 5,
      text: "The battery distilled water has significantly extended the life of my car battery. Great value for money and the delivery is always on time.",
    },
    {
      name: "Amit Sharma",
      location: "Mechanic, Rajkot",
      rating: 5,
      text: "As a mechanic, I recommend BossCoolant to all my customers. Their products consistently deliver superior performance and protection for all vehicle types.",
    },
    {
      name: "Vikash Patel",
      location: "Fleet Manager, Ahmedabad",
      rating: 4,
      text: "Outstanding coolant quality! Our commercial vehicles run smoother and cooler. The technical support team is very knowledgeable and helpful.",
    },
    {
      name: "Sunita Joshi",
      location: "Car Enthusiast, Bharuch",
      rating: 5,
      text: "Premium quality products at reasonable prices. My car's engine temperature stays optimal even in Gujarat's extreme heat. Highly recommended!",
    },
    {
      name: "Kiran Modi",
      location: "Auto Dealer, Navsari",
      rating: 5,
      text: "We use BossCoolant products for all our vehicles. The consistency in quality and reliable supply chain makes them our preferred choice.",
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center md:mb-10 mb-6">
          <div className="section-badge">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Customer Testimonials
          </div>
          <h2 className="section-title">
            What Our<span className="section-highlight">Customers Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our satisfied customers across Gujarat have to say about our products and services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper className="!px-5"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial-next-btn",
              prevEl: ".testimonial-prev-btn"
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-green-600 !opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active !opacity-100"
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="testimonial-prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button className="testimonial-next-btn absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
