import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/serviceData';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  
  // Show component with animation after initial render
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Handle service rotation
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedText('');
      setTypingComplete(false);
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 12000);
    return () => clearTimeout(timer);
  }, [typingComplete]);

  // Handle typing animation
  useEffect(() => {
    const activeService = services[activeIndex];
    if (!activeService) return;
    
    const text = activeService.title;
    
    if (typedText.length < text.length) {
      const timer = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else if (!typingComplete) {
      setTypingComplete(true);
    }
  }, [typedText, activeIndex, typingComplete]);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply tilt effect to card based on mouse position
  useEffect(() => {
    if (cardRef.current && isHovering) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (mousePosition.y - centerY) / 25;
      const rotateY = (centerX - mousePosition.x) / 25;
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  }, [mousePosition, isHovering]);

  const activeService = services[activeIndex];
  
  // Generate subdued background gradient based on activeIndex - WARMER COLORS
  const bgGradient = () => {
    const gradients = [
      'from-gray-900 via-stone-900 to-gray-900',
      'from-stone-900 via-neutral-900 to-stone-900',
      'from-neutral-900 via-amber-950 to-neutral-900',
      'from-amber-950 via-gray-900 to-amber-950'
    ];
    
    return gradients[activeIndex % gradients.length];
  };
  
  // Generate accent color based on activeIndex - WARMER COLORS
  const accentColor = () => {
    const colors = [
      'from-amber-500 to-orange-600',
      'from-rose-500 to-red-700',
      'from-orange-500 to-amber-700',
      'from-yellow-600 to-amber-700'
    ];
    
    return colors[activeIndex % colors.length];
  };

  return (
    <div 
      ref={containerRef}
      className={`relative -top-3 min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 ease-in-out bg-gradient-to-br ${bgGradient()}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Moving light particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-30 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Subtle animated rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-white opacity-5 rounded-full animate-ping-slow"></div>
          <div className="w-64 h-64 border border-white opacity-8 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
          <div className="w-32 h-32 border border-white opacity-10 rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Abstract Background Elements - WARM COLORS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Main content */}
      <div className={`z-10 w-full max-w-6xl px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center font-sans tracking-tight">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200 animate-pulse-subtle">
            SafeStack
          </span>
          <span className="inline-block ml-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
            Innovation
          </span>
        </h1>
        
        {/* Service cards */}
        <div className="flex justify-center mb-16">
          <div 
            ref={cardRef}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ease-out bg-stone-800 border border-white border-opacity-5"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ transition: 'transform 0.15s ease-out' }}
          >
            {/* Glow effect behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Card interior glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-3"></div>
            
            {/* Card content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="h-16 mb-8">
                <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  {typedText}
                  {typedText.length < (activeService?.title?.length || 0) && 
                    <span className="inline-block w-2 h-8 ml-1 bg-amber-400 animate-blink"></span>
                  }
                </h2>
              </div>
              
              <div className="space-y-6 text-stone-300 min-h-[220px]">
                {typingComplete && activeService?.details?.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 transition-opacity duration-300 ease-in-out"
                    style={{ 
                      opacity: 1,
                      transform: 'translateY(0)',
                      animation: `fadeInUp 0.5s ease-out ${index * 0.2}s both`
                    }}
                  >
                    <span className="text-amber-400 mt-1 font-mono">⟩</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
              
              {/* Action button */}
              {typingComplete && (
                <div className="mt-10 flex justify-center">
                  <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-amber-500 to-orange-600">
                    <button
                      className="bg-stone-900 text-white hover:bg-stone-800 transition-colors px-8 py-4 rounded-lg font-medium"
                      onClick={() => navigate(activeService?.route)}
                      style={{ 
                        opacity: 1,
                        transform: 'translateY(0)',
                        animation: 'fadeInUp 0.5s ease-out 0.8s both'
                      }}
                    >
                      <span className="relative z-10 flex items-center">
                        Explore {activeService?.title}
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Service indicators */}
        <div className="flex justify-center">
          <div className="flex space-x-3">
            {services.map((service, idx) => (
              <button 
                key={idx}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-amber-500' : 'bg-stone-600'}`}
                onClick={() => {
                  setTypedText('');
                  setTypingComplete(false);
                  setActiveIndex(idx);
                }}
              >
                {idx === activeIndex && (
                  <span className="absolute inset-0 w-full h-full rounded-full bg-amber-400 animate-ping opacity-75"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-30"></div>
      
      {/* Dynamic interaction point - more subtle */}
      <div 
        className="pointer-events-none fixed w-40 h-40 rounded-full bg-amber-500 opacity-3 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transition: 'opacity 0.5s ease',
        }}
      ></div>
      
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;