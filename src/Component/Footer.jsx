export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Workly</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            A trusted marketplace connecting customers and service providers. 
            Fast • Secure • Reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="/add-service" className="hover:text-blue-400 transition-colors">Add Service</a></li>
            <li><a href="/manage-service" className="hover:text-blue-400 transition-colors">Manage Service</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-blue-400 transition-colors">FAQs</a></li>
            <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400 text-sm sm:text-base">📍 Satkhira, Bangladesh</p>
          <p className="text-gray-400 text-sm sm:text-base">📞 +880 1700-000000</p>
          <p className="text-gray-400 text-sm sm:text-base">📧 support@workly.com</p>

          <div className="flex gap-4 mt-4 text-lg sm:text-xl">
            <a href="#" className="hover:text-blue-400 transition-colors">🌐</a>
            <a href="#" className="hover:text-blue-400 transition-colors">📘</a>
            <a href="#" className="hover:text-blue-400 transition-colors">📸</a>
            <a href="#" className="hover:text-blue-400 transition-colors">🐦</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} Workly — All Rights Reserved.
      </div>
    </footer>
  );
}
