// Navigation Component
function Navbar({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
    return (
      <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">DristicCool</div>
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