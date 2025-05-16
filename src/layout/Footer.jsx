import React from 'react';
import { Phone, Mail, Send, MapPin, Facebook, Twitter, Instagram, ChevronRight, ArrowRight } from 'lucide-react';
import QuickLinks from '../services/QuickLinks';
import logo from '/src/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative text-white mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-900"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start">
            <div className="mb-8 flex items-center space-x-3 group">
              <div className="relative p-2 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={logo} alt="SafeStack Technologies Logo" className="h-10 w-auto relative z-10" />
              </div>
              <span className="text-2xl font-bold">
                SafeStack <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Technologies</span>
              </span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg text-center md:text-left">
              Delivering innovative solutions in software engineering, cybersecurity, and data science that transform how businesses operate in East Africa and beyond.
            </p>
            <div className="flex space-x-4 mb-8">
              {/* Social media icons with hover effects */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Spacer column for larger screens */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-3">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 w-8 h-1 rounded-full"></span>
              <span>Quick Links</span>
            </h3>
            <div className="w-full flex justify-center md:justify-start">
              <QuickLinks />
            </div>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-3">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 w-8 h-1 rounded-full"></span>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: 'Software Engineering', path: '/services/software' },
                { name: 'Cybersecurity', path: '/services/cybersecurity' },
                { name: 'Data Science & AI', path: '/services/data-science' },
                { name: 'UI/UX & Design Services', path: '/services/ui-ux-design' },
                { name: 'IT Consulting & Advisory', path: '/services/it-consulting' }
              ].map((service, index) => (
                <li key={index} className="transform hover:-translate-x-1 transition-transform duration-300">
                  <a 
                    href={service.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group justify-center md:justify-start"
                  >
                    <div className="w-0 bg-blue-500 h-1 mr-0 rounded group-hover:w-4 group-hover:mr-2 transition-all duration-300"></div>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-3">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 w-8 h-1 rounded-full"></span>
              <span>Get In Touch</span>
            </h3>
            <ul className="space-y-1 md:space-y-2 w-full">
              <li className="group">
                <a 
                    href="tel:+254748800714"
                    className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3 hover:bg-slate-800/50 p-2 md:p-3 rounded-xl transition-all duration-300"
                  >
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-800 rounded-full border-2 border-blue-500 hidden group-hover:flex"></div>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-white group-hover:text-blue-400 transition-colors font-medium">+254 748 800 714</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a 
                  href="mailto:info@safestack.com"
                  className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-4 hover:bg-slate-800/50 p-2 md:p-3 rounded-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-800 rounded-full border-2 border-blue-500 hidden group-hover:flex"></div>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-white group-hover:text-blue-400 transition-colors font-medium">info@safestack.com</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://wa.me/254748800714"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-4 hover:bg-slate-800/50 p-2 md:p-3 rounded-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300">
                      <Send className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-800 rounded-full border-2 border-blue-500 hidden group-hover:flex"></div>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-white group-hover:text-blue-400 transition-colors font-medium">WhatsApp</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-4 p-2 md:p-3">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-white font-medium">Nairobi, Kenya</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal divider */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>
        
        {/* Copyright section */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-slate-400 mb-4 md:mb-0 text-center">
            © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-medium">SafeStack Technologies</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.2); }
          66% { transform: translate(-20px, 20px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;