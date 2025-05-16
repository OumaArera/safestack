import React from 'react';
import { Building2, Users, Globe, BrainCircuit, BarChart3, Activity, Database, Lock, BookOpen, GraduationCap, Video, Lightbulb } from 'lucide-react';
import Contacts from '../services/Contacts';
import { useOverlay } from '../hooks/useOverlay';

const projects = [
  {
    name: "1st Edmonds AFH LLC & Bothel Serenity CORP",
    location: "USA",
    category: "Adult Family Home",
    description: "Enterprise system managing resident welfare (health, behavior, vitals), staff management, resource management, and budgeting.",
    icon: <Building2 className="w-10 h-10 text-emerald-500" />,
    highlights: [
      { icon: <Users className="w-5 h-5 text-emerald-400" />, text: "Resident Management" },
      { icon: <Activity className="w-5 h-5 text-emerald-400" />, text: "Health Monitoring" },
      { icon: <Database className="w-5 h-5 text-emerald-400" />, text: "Resource Planning" }
    ],
    gradientFrom: "from-emerald-600",
    gradientTo: "to-teal-500",
    bgFrom: "from-emerald-950/40",
    bgTo: "to-teal-900/20"
  },
  {
    name: "E-Limu Educational Platform",
    location: "Kenya",
    category: "AI-Powered Learning Management System",
    description: "Advanced LMS tailored to support Kenya's CBC curriculum using AI, providing digital resources, tracking learner progress, and facilitating virtual classes.",
    icon: <GraduationCap className="w-10 h-10 text-cyan-500" />,
    highlights: [
      { icon: <Lightbulb className="w-5 h-5 text-cyan-400" />, text: "AI Learning" },
      { icon: <BookOpen className="w-5 h-5 text-cyan-400" />, text: "Digital Library" },
      { icon: <Video className="w-5 h-5 text-cyan-400" />, text: "Virtual Classes" }
    ],
    gradientFrom: "from-cyan-600",
    gradientTo: "to-sky-500",
    bgFrom: "from-cyan-950/40",
    bgTo: "to-sky-900/20"
  },
  {
    name: "KDUAH & DAVIDS CONSULT",
    location: "USA",
    category: "Business Consultancy",
    description: "Digital platform providing robust online presence with client engagement tools and service showcasing.",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    highlights: [
      { icon: <Globe className="w-5 h-5 text-blue-400" />, text: "Web Presence" },
      { icon: <Users className="w-5 h-5 text-blue-400" />, text: "Client Portal" },
      { icon: <BarChart3 className="w-5 h-5 text-blue-400" />, text: "Analytics" }
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-indigo-500",
    bgFrom: "from-blue-950/40",
    bgTo: "to-indigo-900/20"
  },
  {
    name: "Arkad Family",
    location: "Kiambu County",
    category: "Web Application & Admin Dashboard",
    description: "Interactive platform enabling community engagement through event coordination and activity management.",
    icon: <Users className="w-10 h-10 text-purple-500" />,
    highlights: [
      { icon: <BarChart3 className="w-5 h-5 text-purple-400" />, text: "Event Management" },
      { icon: <Users className="w-5 h-5 text-purple-400" />, text: "Community Portal" },
      { icon: <Database className="w-5 h-5 text-purple-400" />, text: "Admin Controls" }
    ],
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-500",
    bgFrom: "from-purple-950/40",
    bgTo: "to-pink-900/20"
  },
  {
    name: "Serenity Pathways",
    location: "Harare, Zimbabwe",
    category: "Psychotherapy Clinic",
    description: "Secure telehealth platform connecting patients with providers, enabling prescription management and encrypted health data access.",
    icon: <BrainCircuit className="w-10 h-10 text-rose-500" />,
    highlights: [
      { icon: <Users className="w-5 h-5 text-rose-400" />, text: "Patient Portal" },
      { icon: <Activity className="w-5 h-5 text-rose-400" />, text: "Health Monitoring" },
      { icon: <Lock className="w-5 h-5 text-rose-400" />, text: "Data Encryption" }
    ],
    gradientFrom: "from-rose-600",
    gradientTo: "to-orange-500",
    bgFrom: "from-rose-950/40",
    bgTo: "to-orange-900/20"
  }
];

export default function ProjectShowcase() {
  const { isVisible, show, hide, overlayRef } = useOverlay(false);
  return (
    <section className="-top-3 py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of custom solutions that solve real business challenges and create exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative h-full">
              {/* Animated border gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
              
              {/* Project Card */}
              <div className={`relative h-full bg-gradient-to-br ${project.bgFrom} ${project.bgTo} backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 flex flex-col`}>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 mb-3">
                      {project.location}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{project.name}</h3>
                    <p className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}>
                      {project.category}
                    </p>
                  </div>
                  <div className={`bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} p-3 rounded-lg`}>
                    {project.icon}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-8 flex-grow">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="bg-gray-900/40 rounded-lg p-4 mt-auto">
                  <div className="flex flex-wrap gap-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg">
                        {highlight.icon}
                        <span className="text-sm font-medium text-gray-200">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View Project Button */}
                {/* <div className="mt-6">
                  <button className={`text-sm group flex items-center gap-2 font-medium bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text text-transparent transition-all duration-300`}>
                    View Project Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`group-hover:translate-x-1 transition-transform duration-300 stroke-current bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text`}>
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
            <button 
              className="bg-gray-900 text-white hover:bg-gray-800 transition-colors px-8 py-4 rounded-lg font-medium"
              onClick={show}
            >
              Discuss Your Project With Us
            </button>
          </div>
          <p className="mt-4 text-gray-400">Let's transform your ideas into impactful digital solutions</p>
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
          animation: blob 20s infinite alternate;
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