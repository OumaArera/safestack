import React from 'react';
import { Briefcase, FileText, GitBranch, Lightbulb, BookOpen, BarChart2, Search, Network } from 'lucide-react';
import Contacts from '../services/Contacts';
import { useOverlay } from '../hooks/useOverlay';

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-teal-600" />,
    title: "Technical Consulting & Digital Strategy",
    text: 'Expert guidance on technology selection and implementation strategies aligned with your business objectives',
  },
  {
    icon: <FileText className="w-8 h-8 text-emerald-600" />,
    title: "Business Requirement Documentation",
    text: 'Comprehensive BRDs that clearly define project scope, functional requirements, and success criteria',
  },
  {
    icon: <Network className="w-8 h-8 text-green-600" />,
    title: "Process Flow & Solution Architecture",
    text: 'Detailed architecture designs that map business processes to technical solutions for optimal performance',
  },
  {
    icon: <GitBranch className="w-8 h-8 text-cyan-600" />,
    title: "Technical Documentation",
    text: 'Clear, precise documentation including sequence diagrams, system maps, and technical specifications',
  },
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "Feasibility Studies & Tech Recommendations",
    text: 'Thorough analysis of technical options with practical recommendations based on ROI and business value',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-lime-600" />,
    title: "Technology Roadmapping",
    text: 'Strategic planning for technology adoption and implementation with clear milestones and deliverables',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-yellow-600" />,
    title: "IT Governance & Compliance",
    text: 'Development of frameworks and policies to ensure your IT operations meet regulatory requirements',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-sky-600" />,
    title: "Legacy System Assessment",
    text: 'Evaluation of existing systems with migration strategies and recommendations for modernization',
  },
];

export default function ITConsulting() {
  const { isVisible, show, hide, overlayRef } = useOverlay(false);
  return (
    <section className="-top-3 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            IT Consulting & Advisory
          </h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Navigate complex technology decisions with our strategic IT consulting services—translating business needs
            into actionable technology roadmaps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
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
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-teal-500 to-emerald-600">
            <button 
              className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-8 py-4 rounded-lg font-medium"
              onClick={show}
            >
              Book a Strategy Session
            </button>
          </div>
          <p className="mt-4 text-slate-400">Free technology assessment and consultation</p>
        </div>
      </div>
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