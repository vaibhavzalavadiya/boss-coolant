import { useParams } from 'react-router-dom';
import { ArrowLeft, Shield, Truck, Award, CheckCircle } from 'lucide-react';
import yellowFront from '../assets/images/boss-coolant-yellow-front.png';
import brownFront from '../assets/images/boss-coolant-brown-front.png';
import greenFront from '../assets/images/boss-coolant-green-front.png';
import redFront from '../assets/images/boss-coolant-red-front.png';
import bottle1ltr from '../assets/images/1ltr bottle.png';
import bottle5ltr from '../assets/images/5ltr bottle.png';
import can5ltr from '../assets/images/5ltr-can.png';
import tank1000ltr from '../assets/images/1000ltr tank.png';

function ProductDetails() {
  const { id } = useParams();
  
  const productImages = [yellowFront, brownFront, greenFront, redFront, bottle1ltr, bottle5ltr, can5ltr, tank1000ltr];
  
  const products = [
    { 
      name: "Yellow Coolant", 
      description: "Premium yellow coolant for superior engine protection with advanced heat transfer properties.",
      image: yellowFront,
      features: ["Long-lasting protection", "All engine types", "Temperature resistant", "Corrosion prevention"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "Ethylene Glycol Based",
        "Color": "Yellow",
        "Freezing Point": "-37°C",
        "Boiling Point": "108°C",
        "pH Level": "8.0 - 11.0"
      }
    },
    { 
      name: "Brown Coolant", 
      description: "Advanced brown formula for heavy-duty applications and commercial vehicles.",
      image: brownFront,
      features: ["High-performance formula", "Extended life", "Superior protection", "Racing approved"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "OAT Technology",
        "Color": "Brown",
        "Freezing Point": "-40°C",
        "Boiling Point": "110°C",
        "pH Level": "7.5 - 11.0"
      }
    },
    { 
      name: "Green Coolant", 
      description: "Classic green coolant for all vehicle types with proven reliability.",
      image: greenFront,
      features: ["Commercial grade", "Heavy duty protection", "Extended intervals", "Fleet approved"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "Hybrid Technology",
        "Color": "Green",
        "Freezing Point": "-42°C",
        "Boiling Point": "112°C",
        "pH Level": "8.5 - 11.5"
      }
    },
    { 
      name: "Red Coolant", 
      description: "High-performance red coolant for modern engines and extreme conditions.",
      image: redFront,
      features: ["All-weather protection", "Year-round use", "Versatile formula", "Cost-effective"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "Universal",
        "Color": "Red",
        "Freezing Point": "-38°C",
        "Boiling Point": "109°C",
        "pH Level": "8.0 - 10.5"
      }
    },
    { 
      name: "1 Liter Bottle", 
      description: "Convenient 1L bottle perfect for personal vehicles and easy storage.",
      image: bottle1ltr,
      features: ["Racing grade", "Maximum cooling", "High-temp stable", "Competition approved"],
      specifications: {
        "Volume": "1 Liter",
        "Type": "Distilled Water",
        "Packaging": "Bottle",
        "Material": "PET Plastic",
        "Usage": "Personal Vehicles",
        "Shelf Life": "2 Years"
      }
    },
    { 
      name: "5 Liter Bottle", 
      description: "Economy 5L bottle for multiple refills and cost-effective maintenance.",
      image: bottle5ltr,
      features: ["Biodegradable", "Non-toxic", "Eco-certified", "Safe disposal"],
      specifications: {
        "Volume": "5 Liters",
        "Type": "Distilled Water",
        "Packaging": "Bottle",
        "Material": "PET Plastic",
        "Usage": "Multiple Refills",
        "Shelf Life": "2 Years"
      }
    },
    { 
      name: "5 Liter Can", 
      description: "Industrial 5L can designed for commercial and workshop use.",
      image: can5ltr,
      features: ["5-year protection", "Extended service", "Low maintenance", "Cost savings"],
      specifications: {
        "Volume": "5 Liters",
        "Type": "Distilled Water",
        "Packaging": "Metal Can",
        "Material": "Steel",
        "Usage": "Commercial Use",
        "Shelf Life": "3 Years"
      }
    },
    { 
      name: "1000 Liter Tank", 
      description: "Bulk 1000L tank for fleet operations and large-scale industrial applications.",
      image: tank1000ltr,
      features: ["Bulk supply", "Fleet operations", "Cost-effective", "Industrial grade"],
      specifications: {
        "Volume": "1000 Liters",
        "Type": "Bulk Tank",
        "Material": "Industrial Grade",
        "Freezing Point": "-37°C",
        "Boiling Point": "108°C",
        "pH Level": "8.0 - 11.0"
      }
    }
  ];

  const product = products[id - 1] || products[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6">
            {/* Product Image */}
            <div className="p-8">
              <div className="bg-gray-50 rounded-xl p-8 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Premium Quality</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
              
              {/* Quality Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-2 rounded-full flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  Premium Quality
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full">
                  ISO Certified
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-2 rounded-full">
                  Eco-Friendly
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <Shield size={18} className="mr-2" />
                  Request Quote
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+918980211051" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    📞 Call Now
                  </a>
                  <a href="mailto:bossandcoolant@gmail.com" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    📧 Email Us
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Quality Assured</p>
                  <p className="text-xs text-gray-800">Premium Grade</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Fast Delivery</p>
                  <p className="text-xs text-gray-800">Within 150km</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">ISO Certified</p>
                  <p className="text-xs text-gray-800">International Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t border-gray-200 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <div className="bg-white rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-gray-500 block mb-1">{key}</span>
                    <span className="text-lg font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;