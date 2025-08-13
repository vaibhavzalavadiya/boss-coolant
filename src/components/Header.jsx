import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="logo-col max-w-[120px] w-full">
            <a href="/" className="block">
              <img src={logo} alt="BossCoolant" className="w-full h-auto object-contain" />
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="font-semibold hover:text-blue-600 transition-colors">Home</a>
            <a href="/products" className="font-semibold hover:text-blue-600 transition-colors">Products</a>
            <a href="/about" className="font-semibold hover:text-blue-600 transition-colors">About Us</a>
            <a href="#benefits" className="font-semibold hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#contact" className="font-semibold hover:text-blue-600 transition-colors">Contact</a>
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
              <a href="/" onClick={closeMobileMenu} className="hover:text-blue-600 py-2 border-b border-gray-200">Home</a>
              <a href="/products" onClick={closeMobileMenu} className="hover:text-blue-600 py-2 border-b border-gray-200">Products</a>
              <a href="/about" onClick={closeMobileMenu} className="hover:text-blue-600 py-2 border-b border-gray-200">About Us</a>
              <a href="#benefits" onClick={closeMobileMenu} className="hover:text-blue-600 py-2 border-b border-gray-200">Benefits</a>
              <a href="#contact" onClick={closeMobileMenu} className="hover:text-blue-600 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;