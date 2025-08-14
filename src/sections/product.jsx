import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeader from "../components/SectionHeader";
import { sectionContent } from "../config/sectionContent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import product4 from '../assets/images/product-4.png';
import product5 from '../assets/images/product-5.png';
import product6 from '../assets/images/product-6.png';
import product7 from '../assets/images/product-7.png';
import product8 from '../assets/images/product-8.png';
import product9 from '../assets/images/product-9.png';
import product10 from '../assets/images/product-10.png';
import productDetails01 from '../assets/images/product-details01.jpg';
import productDetails02 from '../assets/images/product-details02.jpg';

// Featured Product Card
function ProductCard({ title, bgColor, products }) {
  const isBlue = bgColor === "bg-blue-600";
  const cardColor = isBlue ? "border-blue-200" : "border-green-200";
  const badgeColor = isBlue ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800";
  const buttonColor = isBlue ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700";

  return (
    <div className={`bg-white lg:p-6 p-4 rounded-lg  transition-all duration-300 border-2 ${cardColor} hover:border-opacity-50 overflow-hidden`}>
      {/* Header */}
      <div className="lg:mb-5 mb-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeColor} mb-3`}>
          {title}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">Premium quality automotive solutions</p>
      </div>

      {/* Products Grid */}
      <div>
        <div className="space-y-3">
          {products.map((product, index) => (
            <div key={index} className="group flex items-center p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 group-hover:shadow-md transition-shadow">
                <i className={`fas fa-${product.icon} text-gray-600 text-sm`}></i>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                <p className="text-xs text-gray-800 mt-1">{product.description}</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`w-full mt-4 ${buttonColor} text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm`}>
          View All Products
        </button>
      </div>
    </div>
  );
}

// Swiper Product Card
function SimpleProductCard({ product, index }) {
  const productImages = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
  const imagePath = productImages[index] || product1;

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Image container */}
      <div className="relative bg-gray-50 pt-[60%] overflow-hidden">
        <img
          src={imagePath}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
          Premium
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{product.description}</p>

        {/* Features */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Eco-Friendly</span>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">ISO Certified</span>
        </div>

        {/* Button - Always at bottom */}
        <button
          onClick={() => window.location.href = `/product/${index + 1}`}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full mt-auto"
        >
          Learn More
        </button>
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
    <>
      {/* Premium Products Section */}
      <section id="products" className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={sectionContent.products.badge}
            title={sectionContent.products.title}
            highlightText={sectionContent.products.highlightText}
            description={sectionContent.products.description}
          />

          {/* Main Products - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


            {/* Pure Distilled Water */}
            <div className="bg-white rounded-2xl xl:p-6 p-4 shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
              {/* Title */}
              <div className="flex md:flex-row flex-col border-b border-gray-200 mb-4 pb-4 gap-3">
                <div className="md:w-1/2">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Industrial Grade</span>
                  <h3 className="text-xl font-bold text-gray-900 my-3">Pure Distilled Water</h3>
                  <p className="text-gray-800 leading-relaxed">
                  Premium grade distilled water with 99.9% purity. Completely free from minerals, salts, and impurities that damage battery performance.
                </p>
                </div>
                  <div className="relative md:w-1/2 md:pt-[30%] pt-[60%]">
                    <img
                      src={productDetails01}
                      alt="Pure Distilled Water"
                      className="size-full absolute inset-0 object-contain"
                    />
                  </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col">
             

                {/* Technical Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specs:</h4>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 sm:gap-3 gap-2 text-xs">
                      <div><span className="font-medium">Purity:</span> 99.9%</div>
                      <div><span className="font-medium">pH:</span> 6.5-7.5</div>
                      <div><span className="font-medium">Conductivity:</span> Less than 5 uS/cm</div>
                      <div><span className="font-medium">TDS:</span> Less than 3 ppm</div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className=" grid sm:grid-cols-2 gap-2 grid-cols-1">
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Zero mineral content
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Prevents sulfation
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Extends battery life
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Temperature stable
                    </li>
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="grid grid-cols-2 sm:gap-3 gap-2">
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-car text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Automotive</p>
                      <p className="text-xs text-gray-800">Cars, Trucks</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-industry text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Industrial</p>
                      <p className="text-xs text-gray-800">UPS, Generators</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-solar-panel text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Renewable</p>
                      <p className="text-xs text-gray-800">Solar, Wind</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-truck text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Commercial</p>
                      <p className="text-xs text-gray-800">Trucks, Tractors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Premium Engine Coolant */}
            <div className="bg-white rounded-2xl xl:p-6 p-4 shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
              {/* Title */}
              <div className="flex md:flex-row flex-col border-b border-gray-200 mb-4 pb-4 gap-3">
                <div className="md:w-1/2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Engine Protection</span>
                <h3 className="text-xl font-bold text-gray-900 my-3">Premium Engine Coolant</h3>
                <p className="text-gray-800 leading-relaxed">
                  Advanced formula engineered for superior heat transfer and engine protection. Long-lasting performance for all vehicle types.
                </p>
                </div>
                <div className="relative md:w-1/2 md:pt-[30%] pt-[60%]">
                    <img
                      src={productDetails02}
                      alt="Premium Engine Coolant"
                      className="size-full absolute inset-0 object-contain"
                    />
                  </div>
              </div>

    
              {/* Product Details */}
              <div className="flex-1 flex flex-col">
              

                {/* Technical Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specs:</h4>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 sm:gap-3 gap-2 text-xs">
                      <div><span className="font-medium">Type:</span> Ethylene Glycol</div>
                      <div><span className="font-medium">Boiling Point:</span> 108°C</div>
                      <div><span className="font-medium">Freezing Point:</span> -37°C</div>
                      <div><span className="font-medium">Service Life:</span> 5 Years</div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className=" grid sm:grid-cols-2 gap-2 grid-cols-1">
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Superior heat properties
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Corrosion and rust protection
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Extended engine life
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      All-weather performance
                    </li>
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="grid grid-cols-2 sm:gap-3 gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-car text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Automotive</p>
                      <p className="text-xs text-gray-800">Cars, Bikes</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-truck text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Commercial</p>
                      <p className="text-xs text-gray-800">Trucks, Buses</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-industry text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Industrial</p>
                      <p className="text-xs text-gray-800">Generators, Machinery</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-tractor text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Agricultural</p>
                      <p className="text-xs text-gray-800">Tractors, Harvesters</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Products Section */}
      <section className="pb-10 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center md:mb-10 mb-6">
            <div className="section-badge">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Complete Product Range
            </div>
            <h3 className="section-title">
              Explore More<span className="section-highlight">Products</span>
            </h3>
            <p className="section-description">
              Browse through our complete collection of specialized automotive solutions designed for every vehicle type and requirement.
            </p>
          </div>

          <div className="relative">
      <Swiper
        className="!px-5"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".products-next-btn",
          prevEl: ".products-prev-btn"
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {additionalProducts.map((product, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <SimpleProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="products-prev-btn absolute -left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        className="products-next-btn absolute -right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>

        </div>
      </section>
    </>
  );
}
