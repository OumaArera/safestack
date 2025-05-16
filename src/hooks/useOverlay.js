// Hook for managing overlay visibility
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to manage overlay/modal visibility with click-outside detection
 * @param {boolean} initialState - Initial visibility state
 * @returns {Array} - [isVisible, show, hide, ref]
 */
export const useOverlay = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const overlayRef = useRef(null);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible(prev => !prev);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isVisible && overlayRef.current && !overlayRef.current.contains(event.target)) {
        hide();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return { isVisible, show, hide, toggle, overlayRef };
};