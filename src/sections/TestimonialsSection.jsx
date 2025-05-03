import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-500 mr-1"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-500 mr-1"></i>);
    }

    return stars;
  };

  return (
    <div className="bg-white sm:p-6 p-4 rounded-xl shadow-md h-full flex flex-col justify-between touch-pan-y">
      <div>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500"></i>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base capitalize ">{testimonial.name}</h4>
            <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">"{testimonial.text}"</p>
      </div>
    </div>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      rating: 5,
      text: "Been using BossCoolant products for my fleet of trucks for 5 years. Their coolant has protected our engines in the harshest conditions.",
    },
    {
      name: "dev Singh",
      rating: 4.5,
      text: "The battery distilled water has significantly extended the life of my car battery. Great value for money and excellent service.",
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: "As a mechanic, I recommend BossCoolant to all my customers. Their products consistently deliver superior performance and protection.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          loop={false}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
