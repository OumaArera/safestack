import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLinks = () => {
  
  
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="lg:col-span-2">
      <h3 className="text-lg font-semibold mb-6 flex items-center">
        Quick Links
      </h3>
      <ul className="space-y-3">
        {/* Main links */}
        {mainLinks.map((item, index) => (
          <li key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
            <a 
              href={item.path}
              className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center group"
            >
              <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.name}
            </a>
          </li>
        ))}
        
        
      </ul>
    </div>
  );
};

export default QuickLinks;