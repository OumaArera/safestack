import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '/src/assets/logo.png';
import { navItems } from '../data/navigationData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Create refs for each dropdown menu item
  useEffect(() => {
    navItems.forEach(item => {
      if (item.hasDropdown) {
        dropdownRefs.current[item.name] = React.createRef();
      }
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-50 dark:bg-gray-900 shadow-md py-3 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="z-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="SafeStack Logo" className="h-10 w-auto" />
                <span className="text-xl md:text-3xl font-bold text-white">
                  SafeStack <span className="font-light">Technologies</span>
                </span>
              </div>
              <span className="text-sm text-blue-500 font-medium mt-1">
                Innovative. Secure. Relentless.
              </span>
            </div>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? dropdownRefs.current[item.name] : null}
                onMouseEnter={() => item.hasDropdown ? setActiveDropdown(item.name) : null}
              >
                <a
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium flex items-center transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700"
                      >
                        <span className="text-indigo-600 dark:text-indigo-400">
                          <dropdownItem.icon className="w-5 h-5" />
                        </span>
                        <span>{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Slide-in Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-8" alt="SafeStack Logo" />
            <span className="font-bold text-lg text-blue-800">SafeStack</span>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        <nav className="p-5 space-y-4">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.name);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="flex justify-between items-center text-left w-full text-gray-800 dark:text-gray-100 font-medium hover:text-indigo-600"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {item.hasDropdown && activeDropdown === item.name && (
                <div className="ml-4 mt-2 flex flex-col space-y-3">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 space-x-2"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400">
                        <dropdownItem.icon className="w-5 h-5" />
                      </span>
                      <span>{dropdownItem.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;