import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import yellowFront from '../assets/images/boss-coolant-yellow-front.png';
import brownFront from '../assets/images/boss-coolant-brown-front.png';
import greenFront from '../assets/images/boss-coolant-green-front.png';
import redFront from '../assets/images/boss-coolant-red-front.png';
import bottle1ltr from '../assets/images/1ltr bottle.png';
import bottle5ltr from '../assets/images/5ltr bottle.png';
import can5ltr from '../assets/images/5ltr-can.png';
import tank1000ltr from '../assets/images/1000ltr tank.png';

function AllProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: "Yellow Coolant", category: "coolant", description: "Premium yellow coolant for superior engine protection.", image: yellowFront },
    { id: 2, name: "Brown Coolant", category: "coolant", description: "Advanced brown formula for heavy-duty applications.", image: brownFront },
    { id: 3, name: "Green Coolant", category: "coolant", description: "Classic green coolant for all vehicle types.", image: greenFront },
    { id: 4, name: "Red Coolant", category: "coolant", description: "High-performance red coolant for modern engines.", image: redFront },
    { id: 5, name: "1 Liter Bottle", category: "packaging", description: "Convenient 1L bottle for personal vehicles.", image: bottle1ltr },
    { id: 6, name: "5 Liter Bottle", category: "packaging", description: "Economy 5L bottle for multiple refills.", image: bottle5ltr },
    { id: 7, name: "5 Liter Can", category: "packaging", description: "Industrial 5L can for commercial use.", image: can5ltr },
    { id: 8, name: "1000 Liter Tank", category: "packaging", description: "Bulk 1000L tank for fleet and industrial operations.", image: tank1000ltr },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coolant', name: 'Coolant Types' },
    { id: 'packaging', name: 'Packaging Options' }
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
                    {product.category === 'coolant' ? 'Engine Coolant' : 'Distilled Water'}
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
            <a href="mailto:bossandcoolant@gmail.com" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Get Quote
            </a>
            <a href="tel:+918980211051" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;