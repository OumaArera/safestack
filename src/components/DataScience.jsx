import React from 'react';
import { BarChart3, Database, LineChart, Brain, MessageSquare, Lightbulb, PieChart, Network } from 'lucide-react';
import Contacts from '../services/Contacts';
import { useOverlay } from '../hooks/useOverlay';

const services = [
  {
    icon: <BarChart3 className="w-8 h-8 text-violet-600" />,
    title: "Business Intelligence & Analytics",
    text: 'Interactive dashboards and analytics solutions that transform raw data into actionable business insights',
  },
  {
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    title: "Data Warehousing & Engineering Pipelines",
    text: 'Robust data infrastructure and pipelines that ensure efficient collection, processing, and storage of your data',
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-600" />,
    title: "Predictive Analytics & Forecasting",
    text: 'Advanced statistical modeling to identify trends and predict future outcomes for informed business decisions',
  },
  {
    icon: <Brain className="w-8 h-8 text-teal-600" />,
    title: "Machine Learning Model Development",
    text: 'Custom ML models designed to solve your specific business challenges with continuous improvement cycles',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
    title: "Natural Language Processing (NLP)",
    text: 'Text analysis solutions that extract insights from unstructured data, enabling advanced automation and intelligence',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
    title: "AI Strategy & Implementation",
    text: 'Strategic consulting and implementation support to maximize the value of AI investments for your organization',
  },
  {
    icon: <PieChart className="w-8 h-8 text-fuchsia-600" />,
    title: "Data Visualization & Reporting",
    text: 'Clear and compelling visual representations of complex data that drive understanding and decision-making',
  },
  {
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    title: "Deep Learning & Computer Vision",
    text: 'Neural network solutions for image recognition, pattern detection, and solving complex perceptual problems',
  },
];

export default function DataScience() {
  const { isVisible, show, hide, overlayRef } = useOverlay(false);
  return (
    <section className="-top-20 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">
            Data & AI Solutions
          </h2>
          <div className="h-1 w-24 bg-violet-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of your data with our advanced analytics and AI solutions—turning information
            into competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
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
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-violet-500 to-indigo-600">
            <button 
              className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-8 py-4 rounded-lg font-medium"
              onClick={show}
            >
              Explore Data Transformation
            </button>
          </div>
          <p className="mt-4 text-slate-400">Free data assessment and solution roadmap</p>
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