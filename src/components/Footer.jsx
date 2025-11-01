

// Footer Component
function Footer() {
    return (
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          {/* Top Section with Logo and Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6 lg:mb-10 mb-6">
            {/* Company Info */}
            <div className="text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center sm:items-start">
                {/* Logo */}
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <svg viewBox="0 0 60 60" className="w-10 h-10 text-white">
                    <path d="M30,10 L40,20 L40,45 C40,47.2 38.2,49 36,49 L24,49 C21.8,49 20,47.2 20,45 L20,20 L30,10 Z"
                      fill="currentColor" opacity="0.3" />
                    <path d="M30,5 L45,20 L45,50 C45,52.2 43.2,54 41,54 L19,54 C16.8,54 15,52.2 15,50 L15,20 L30,5 Z"
                      fill="currentColor" />
                    <path d="M30,20 C31.1,20 32,19.1 32,18 C32,16.9 31.1,16 30,16 C28.9,16 28,16.9 28,18 C28,19.1 28.9,20 30,20 Z M30,24 C26.7,24 24,21.3 24,18 C24,14.7 26.7,12 30,12 C33.3,12 36,14.7 36,18 C36,21.3 33.3,24 30,24 Z"
                      fill="white" />
                    <path d="M25,32 L35,32 L35,38 L25,38 Z" fill="white" />
                  </svg>
                </div>
  
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Boss Coolant
                </h3>
  
                <p className="text-white text-sm  max-w-xs mx-auto sm:mx-0">
                  Premium automotive cooling solutions and battery distilled water serving Surat and 100km radius.
                </p>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-white hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Home</a></li>
                <li><a href="/products" className="text-white hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Products</a></li>
                <li><a href="/about" className="text-white hover:text-blue-400 transition-colors duration-300 block sm:inline-block">About</a></li>
                <li><a href="/#contact" className="text-white hover:text-blue-400 transition-colors duration-300 block sm:inline-block">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 sm:justify-start justify-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a href="tel:+919876543210" className="text-white hover:text-blue-400 transition-colors duration-300">
                    +91 8980211051
                  </a>
                </li>
                <li className="flex items-center gap-2 sm:justify-start justify-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href="mailto:bossandcoolant@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                    bossandcoolant@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 sm:justify-start justify-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/20 text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <address className="text-gray-300 not-italic">
                    Surat, Gujarat, India
                  </address>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500 after:w-10 after:mx-auto sm:after:mx-0">
                Stay Updated
              </h4>
              <p className="text-white text-sm mb-4">
                Subscribe to our newsletter for the latest products and offers.
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 sm:mb-0 sm:mr-2 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
                  
  
          {/* Bottom Section with Copyright and Extra Links */}
          <div className="lg:pt-6 pt-4 border-t border-gray-800 flex justify-between items-center gap-4 sm:flex-row flex-col-reverse">
              <p className="text-white text-sm text-center">&copy; 2025 Boss Coolant. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
           
          </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer