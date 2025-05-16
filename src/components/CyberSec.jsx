import React from 'react';
import { Shield, AlertTriangle, Lock, AreaChart, Activity, Users, FileCheck, Clock } from 'lucide-react';
import Contacts from '../services/Contacts';
import { useOverlay } from '../hooks/useOverlay';

const services = [
  {
    icon: <Shield className="w-8 h-8 text-red-600" />,
    title: "Vulnerability Assessment & Penetration Testing",
    text: 'Comprehensive security testing to identify and address vulnerabilities before they can be exploited',
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
    title: "Cybersecurity Audits & Risk Assessments",
    text: 'Thorough evaluation of your security posture with actionable recommendations to mitigate identified risks',
  },
  {
    icon: <AreaChart className="w-8 h-8 text-blue-600" />,
    title: "Managed Security Services & Monitoring",
    text: '24/7 monitoring and threat detection to safeguard your digital assets and respond to security events in real-time',
  },
  {
    icon: <Activity className="w-8 h-8 text-green-600" />,
    title: "Incident Response & Digital Forensics",
    text: 'Expert handling of security breaches with rapid response and thorough investigation to minimize damage',
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Security Awareness & Training Programs",
    text: 'Customized training solutions to transform employees into your strongest security asset against social engineering',
  },
  {
    icon: <FileCheck className="w-8 h-8 text-indigo-600" />,
    title: "Secure Software Development",
    text: 'Implementation of SSDLC best practices to build security into your applications from the ground up',
  },
  {
    icon: <Lock className="w-8 h-8 text-cyan-600" />,
    title: "Data Protection & Encryption",
    text: 'Advanced encryption strategies and data protection solutions to secure sensitive information at rest and in transit',
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-600" />,
    title: "Continuous Security Monitoring",
    text: 'Proactive threat hunting and vulnerability management to maintain robust security posture over time',
  },
];

export default function CyberSec() {
  const { isVisible, show, hide, overlayRef } = useOverlay(false);
  return (
    <section className="-top-3 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-lg bg-gradient-to-r from-red-500 to-orange-600">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
            Cybersecurity Solutions
          </h2>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Protect your digital assets with our comprehensive cybersecurity services—proactive defense strategies
            for today's evolving threat landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
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
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-red-500 to-orange-600">
            <button 
              className="bg-slate-900 text-white hover:bg-slate-800 transition-colors px-8 py-4 rounded-lg font-medium"
              onClick={show}
            >
              Schedule a Security Assessment
            </button>
          </div>
          <p className="mt-4 text-slate-400">Free initial consultation and security evaluation</p>
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