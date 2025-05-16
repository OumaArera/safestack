import React, { forwardRef } from 'react';
import { Phone, Mail, X, MessageSquare } from 'lucide-react';

const Contacts = forwardRef(({ isVisible, onClose }, ref) => {
  const contacts = [
    {
      name: "John",
      position: "Director",
      phone: "+254748800714",
      whatsapp: "https://wa.me/254748800714"
    },
    {
      name: "Elisha",
      position: "Director",
      phone: "+254746525873",
      whatsapp: "https://wa.me/254746525873"
    }
  ];

  const handleClose = () => {
    if (onClose) onClose();
  };

  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50" ref={ref}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
        <div className="relative bg-slate-800 text-white rounded-lg shadow-xl overflow-hidden max-w-xs">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 flex justify-between items-center">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <button onClick={handleClose} className="text-white hover:text-slate-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4">
            {/* Directors */}
            <div className="space-y-3 mb-4">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-slate-300">{contact.position}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={contact.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 transition-colors rounded-full p-2"
                      title="WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                    <a 
                      href={`tel:${contact.phone}`} 
                      className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full p-2"
                      title="Call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Email */}
            <div className="pt-3 border-t border-slate-700">
              <a 
                href="mailto:safestacktechnologies@gmail.com" 
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">safestacktechnologies@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contacts;