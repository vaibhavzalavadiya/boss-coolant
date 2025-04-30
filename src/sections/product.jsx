import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Featured Product Card
function ProductCard({ title, bgColor, products }) {
  const getIconColor = bgColor === "bg-blue-600" ? "text-blue-600" : "text-green-600";
  const getIconBgColor = bgColor === "bg-blue-600" ? "bg-blue-100" : "bg-green-100";

  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
      <div className={`${bgColor} text-white py-4 px-6`}>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <div className={`rounded-full ${getIconBgColor} p-3 mr-4`}>
                <i className={`fas fa-${product.icon} ${getIconColor} text-xl`}></i>
              </div>
              <div>
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Swiper Product Card
function SimpleProductCard({ product, index }) {
  const imagePath = `/images/product-${index + 1}.png`; // Correct image path

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col h-full">
    {/* Image container with aspect ratio using padding */}
    <div className="bg-gray-200 rounded-md mb-4 relative pt-[80%] overflow-hidden">
      <img
        src={imagePath}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-scale-down rounded-md"
      />
    </div>
  
    {/* Content below the image */}
    <div className="flex-1 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm line-clamp-3 flex-1">{product.description}</p>
    </div>
  </div>
  
  );
}

export default function ProductsSection() {
  const featuredProducts = {
    coolant: {
      title: "Engine Coolants",
      bgColor: "bg-blue-600",
      products: [
        { icon: "tint", name: "Premium Coolant", description: "Long-lasting protection for all engines" },
        { icon: "snowflake", name: "Heavy-Duty Coolant", description: "For commercial vehicles and high-performance engines" },
        { icon: "temperature-low", name: "All-Weather Coolant", description: "Protection in extreme temperatures" }
      ]
    },
    distilledWater: {
      title: "Battery Distilled Water",
      bgColor: "bg-green-600",
      products: [
        { icon: "car-battery", name: "Pure Distilled Water", description: "99.9% pure for maximum battery life" },
        { icon: "industry", name: "Industrial Battery Water", description: "For industrial and commercial applications" },
        { icon: "plus-circle", name: "Enhanced Battery Water", description: "With additives to extend battery performance" }
      ]
    }
  };

  const additionalProducts = [
    { name: "Standard Coolant", description: "Reliable formula for everyday vehicles." },
    { name: "Premium Coolant", description: "Enhanced formula for high-performance engines." },
    { name: "Heavy Duty Coolant", description: "Maximum protection for commercial vehicles." },
    { name: "All-Season Coolant", description: "Protection in all climates." },
    { name: "Racing Formula", description: "Optimized for high-performance and racing engines." },
    { name: "Eco-Friendly Coolant", description: "Biodegradable and low environmental impact." },
    { name: "Long-Life Coolant", description: "Service intervals up to 5 years." },
    { name: "Factory Pre-Mixed", description: "Pre-mixed with purified water, ready to use." },
    { name: "High-Mileage Coolant", description: "Designed for vehicles with 75K+ miles." },
    { name: "Silicate-Free Coolant", description: "Safe for aluminum components." }
  ];

  return (
    <section id="products" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Premium Products</h2>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ProductCard {...featuredProducts.coolant} />
          <ProductCard {...featuredProducts.distilledWater} />
        </div>

        {/* Other Products Slider */}
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6">Other Products</h3>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn"
            }}
           
            loop={true}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {additionalProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <SimpleProductCard product={product} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-4 text-center"></div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#contact" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition duration-300">
            Request Product Details
          </a>
        </div>
      </div>
    </section>
  );
}
