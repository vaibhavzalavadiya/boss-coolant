import { useParams } from 'react-router-dom';
import { ArrowLeft, Shield, Truck, Award, CheckCircle } from 'lucide-react';

function ProductDetails() {
  const { id } = useParams();
  
  const products = [
    { 
      name: "Standard Coolant", 
      description: "Reliable formula for everyday vehicles with superior heat transfer properties.",


      features: ["Long-lasting protection", "All engine types", "Temperature resistant", "Corrosion prevention"],
      specifications: {
        "Volume": "1 Liter",
        "Type": "Ethylene Glycol Based",
        "Color": "Blue",
        "Freezing Point": "-37°C",
        "Boiling Point": "108°C",
        "pH Level": "8.0 - 11.0"
      }
    },
    { 
      name: "Premium Coolant", 
      description: "Enhanced formula for high-performance engines with advanced additives.",


      features: ["High-performance formula", "Extended life", "Superior protection", "Racing approved"],
      specifications: {
        "Volume": "1 Liter",
        "Type": "OAT Technology",
        "Color": "Red",
        "Freezing Point": "-40°C",
        "Boiling Point": "110°C",
        "pH Level": "7.5 - 11.0"
      }
    },
    { 
      name: "Heavy Duty Coolant", 
      description: "Maximum protection for commercial vehicles and heavy machinery.",


      features: ["Commercial grade", "Heavy duty protection", "Extended intervals", "Fleet approved"],
      specifications: {
        "Volume": "1 Liter",
        "Type": "Hybrid Technology",
        "Color": "Green",
        "Freezing Point": "-42°C",
        "Boiling Point": "112°C",
        "pH Level": "8.5 - 11.5"
      }
    }
  ];

  const product = products[id - 1] || products[0];
  const imagePath = `/images/product-${id}.png`;

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
                  src={imagePath} 
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-2 cursor-pointer hover:bg-gray-200 transition-colors">
                    <img src={imagePath} alt="" className="w-full h-16 object-contain" />
                  </div>
                ))}
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
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
                    📞 Call Now
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm">
                    📧 Email Us
                  </button>
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