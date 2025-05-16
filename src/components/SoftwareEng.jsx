import React from 'react';
import { Code, Smartphone, Server, Cloud, RefreshCw, Layers, CheckCircle2, Settings2 } from 'lucide-react';
import Contacts from '../services/Contacts';
import { useOverlay } from '../hooks/useOverlay';

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Custom Web Development",
    text: 'Bespoke eCommerce platforms, CMS solutions, and web applications built for your specific business needs',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    title: "Mobile App Development",
    text: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
  },
  {
    icon: <Server className="w-8 h-8 text-purple-600" />,
    title: "Enterprise Software",
    text: 'Comprehensive ERP and CRM systems that streamline your business operations and improve productivity',
  },
  {
    icon: <Cloud className="w-8 h-8 text-sky-600" />,
    title: "API & Systems Integration",
    text: 'Seamless integration services that connect your digital ecosystem and maximize data flow efficiency',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-amber-600" />,
    title: "Legacy Modernization",
    text: 'Transform outdated systems into modern, scalable solutions without disrupting your operations',
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-600" />,
    title: "SaaS Development",
    text: 'Cloud-based SaaS products built with scalability, security, and user experience at the forefront',
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
    title: "Quality Assurance",
    text: 'Comprehensive testing strategies including performance, integration, and automated testing frameworks',
  },
  {
    icon: <Settings2 className="w-8 h-8 text-indigo-600" />,
    title: "DevOps Services",
    text: 'End-to-end DevOps solutions featuring CI/CD pipelines, deployment automation, and monitoring systems',
  },
];

export default function SoftwareEng() {
  // Use our custom hook to manage the contacts overlay
  const { isVisible, show, hide, overlayRef } = useOverlay(false);

  return (
    <section className="-top-20 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Software Development Services
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end software engineering solutions tailored to your business needs—scalable, robust,
            and future-ready.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative flex flex-col h-full bg-slate-800 rounded-xl p-8 hover:bg-slate-750 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-slate-700/50 p-3 rounded-lg w-fit mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-blue-500 to-indigo-600">
            <button 
              className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-8 py-4 rounded-lg font-medium"
              onClick={show}
            >
              Get Started With Your Project
            </button>
          </div>
          <p className="mt-4 text-slate-400">Free consultation and project estimation</p>
        </div>
      </div>

      {/* Contacts Overlay */}
      <Contacts 
        isVisible={isVisible} 
        onClose={hide} 
        ref={overlayRef} 
      />

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
    </section>
  );
}