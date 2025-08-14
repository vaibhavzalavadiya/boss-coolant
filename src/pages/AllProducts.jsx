import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
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

function AllProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: "Standard Coolant", category: "coolant", description: "Reliable formula for everyday vehicles.", image: product1 },
    { id: 2, name: "Premium Coolant", category: "coolant", description: "Enhanced formula for high-performance engines.", image: product2 },
    { id: 3, name: "Heavy Duty Coolant", category: "coolant", description: "Maximum protection for commercial vehicles.", image: product3 },
    { id: 4, name: "All-Season Coolant", category: "coolant", description: "Protection in all climates.", image: product4 },
    { id: 5, name: "Racing Formula", category: "coolant", description: "Optimized for high-performance and racing engines.", image: product5 },
    { id: 6, name: "Eco-Friendly Coolant", category: "coolant", description: "Biodegradable and low environmental impact.", image: product6 },
    { id: 7, name: "Long-Life Coolant", category: "coolant", description: "Service intervals up to 5 years.", image: product7 },
    { id: 8, name: "Factory Pre-Mixed", category: "coolant", description: "Pre-mixed with purified water, ready to use.", image: product8 },
    { id: 9, name: "High-Mileage Coolant", category: "coolant", description: "Designed for vehicles with 75K+ miles.", image: product9 },
    { id: 10, name: "Pure Distilled Water", category: "battery", description: "99.9% pure for maximum battery life.", image: product10 },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coolant', name: 'Engine Coolants' },
    { id: 'battery', name: 'Battery Water' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center lg:mb-12 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of premium automotive cooling solutions and battery maintenance products.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="relative bg-gray-50 pt-[60%] overflow-hidden">
                <img
                  src={product.image}
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
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
                
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.category === 'coolant' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {product.category === 'coolant' ? 'Engine Coolant' : 'Battery Water'}
                  </span>
                </div>
                
                {/* Action Button - Always at bottom */}
                <div className="mt-auto">
                  <button 
                    onClick={() => window.location.href = `/product/${product.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 mt-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="mb-6 opacity-90">
            Can't find what you're looking for? Contact us for custom automotive cooling solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;