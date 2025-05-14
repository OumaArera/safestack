import React from 'react';
import { Phone, Mail, Send, MapPin, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react';
import logo from '/src/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative text-white">
      {/* Angled background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 skew-y-1 origin-top-right transform -z-10"></div>
      
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center space-x-2">
              <img src={logo} alt="SafeStack Technologies Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">
                SafeStack <span className="font-light">Technologies</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering innovative solutions in software engineering, cybersecurity, and data science that transform how businesses operate in East Africa and beyond.
            </p>
            <div className="flex space-x-4 mb-8">
              {/* Social media icons with hover effects */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            
            {/* Newsletter subscription with improved styling */}
            {/* <div className="mt-8 p-6 rounded-xl bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50 shadow-xl">
              <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">Get the latest tech insights right in your inbox</p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full border border-gray-700"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 rounded-lg py-3 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center">
                  Subscribe <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div> */}
          </div>
          
          {/* Spacer column for larger screens */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Case Studies', 'Insights', 'Careers'].map((item, index) => (
                <li key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <a 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Software Engineering', path: '/services/software' },
                { name: 'Cybersecurity', path: '/services/cybersecurity' },
                { name: 'Data Science & AI', path: '/services/data-science' },
                { name: 'Cloud Solutions', path: '/services/cloud' },
                { name: 'Training Programs', path: '/services/training' }
              ].map((service, index) => (
                <li key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <a 
                    href={service.path} 
                    className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Get In Touch
            </h3>
            <ul className="space-y-5">
              <li className="group">
                <a href="tel:+254748800714" className="flex items-start space-x-3 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Phone className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-white group-hover:text-indigo-400 transition-colors">+254 748 800 714</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href="mailto:info@safestack.com" className="flex items-start space-x-3 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-white group-hover:text-indigo-400 transition-colors">info@safestack.com</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href="https://wa.me/254748800714" className="flex items-start space-x-3 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Send className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-white group-hover:text-indigo-400 transition-colors">Send a Message</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-white">Nairobi, Kenya</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal divider */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
        
        {/* Copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-indigo-400">SafeStack Technologies</span>. All rights reserved.
          </p>
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li><a href="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;