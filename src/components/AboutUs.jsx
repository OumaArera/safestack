import React, { useState, useEffect } from "react";
import { ChevronRight, Dot } from "lucide-react";
import { teamMembers, values } from "../data/aboutUsData";
import Contacts from "../services/Contacts";
import { useOverlay } from "../hooks/useOverlay";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");
  const [animatedItems, setAnimatedItems] = useState([]);
  const { isVisible, show, hide, overlayRef } = useOverlay(false);

  // Animation for elements as they appear in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <div className="relative -top-28 bg-slate-50">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" id="hero-content">
              <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 backdrop-blur-sm mb-6 border border-indigo-500/30">
                <span className="text-indigo-200 font-medium text-sm">Established 2024</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                About SafeStack
              </h1>
              <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-8"></div>
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                Founded with a vision to elevate how businesses use technology, SafeStack Technologies combines deep expertise in software engineering, cybersecurity, and data science.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We believe in purposeful technology—tools that simplify, empower, and transform the way organizations grow and operate.
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur-lg transform -rotate-6 scale-105 opacity-30"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className="w-3 h-3 rounded-full bg-slate-600 mr-1.5"></div>
                      ))}
                    </div>
                    <div className="h-5 w-40 bg-slate-700 rounded"></div>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((line) => (
                      <div key={line} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="h-4 w-full bg-slate-700/80 rounded"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((btn) => (
                      <div key={btn} className="h-10 rounded bg-slate-700/70"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-16">
          <div className="flex justify-center flex-wrap gap-4">
            {[
              { id: "story", label: "Our Story" },
              { id: "team", label: "Our Team" },
              { id: "values", label: "Our Values" }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 text-lg font-medium transition-all duration-300 rounded-xl ${
                  activeTab === tab.id 
                    ? "text-white shadow-md" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {activeTab === tab.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl -z-10"></span>
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Our Story Content */}
        {activeTab === "story" && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll" id="story-title">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700">Our Journey</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                SafeStack Technologies was founded in 2024 as a collaboration of seasoned professionals
                determined to redefine digital transformation for African and global businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 mb-20">
              <div className="md:col-span-5">
                <div className="sticky top-24 animate-on-scroll" id="story-sidebar">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">Our Mission</h3>
                    <p className="text-slate-700 mb-6">
                      We empower organizations to harness the full potential of technology through solutions that are
                      secure, scalable, and aligned with their strategic goals.
                    </p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-indigo-300 to-transparent mb-6"></div>
                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">Our Vision</h3>
                    <p className="text-slate-700">
                      To be the trusted technology partner at the forefront of digital innovation, building solutions
                      that drive meaningful change and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7">
                <div className="relative pl-8 border-l-2 border-indigo-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-8">Key Milestones</h3>
                  
                  <div className="space-y-12">
                    {[
                      {
                        year: "2025",
                        title: "ERP Implementation Success",
                        description: "Delivered a comprehensive ERP system for an American AFH."
                      },
                      {
                        year: "2025",
                        title: "FinTech & Logistics Solutions",
                        description: "Launched two custom web applications for fintech and logistics startups in Ghana."
                      },
                      {
                        year: "2024",
                        title: "E-Limu Educational Platform",
                        description: "Developed E-Limu, an LMS tailored to support Kenya's CBC curriculum using AI."
                      }
                    ].map((milestone, index) => (
                      <div 
                        key={index} 
                        className={`relative animate-on-scroll ${animatedItems.includes(`milestone-${index}`) ? 'fade-in' : 'opacity-0'}`}
                        id={`milestone-${index}`}
                      >
                        <div className="absolute -left-[37px] w-6 h-6 rounded-full bg-indigo-500 border-4 border-white"></div>
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                            {milestone.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h4>
                        <p className="text-slate-600">{milestone.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Team Content */}
        {activeTab === "team" && (
          <div>
            <div className="text-center mb-16 animate-on-scroll" id="team-title">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700">Meet Our Team</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                Our dedicated founding duo brings deep experience in software engineering, strategy,
                and design to help your business grow smarter and faster.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`group relative animate-on-scroll ${animatedItems.includes(`team-${index}`) ? 'fade-in' : 'opacity-0'}`}
                  id={`team-${index}`}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <div className="h-72 flex items-center justify-center bg-slate-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-slate-900">{member.name}</h3>
                      <div className="flex items-center mb-4">
                        <div className="h-0.5 w-12 bg-indigo-500 mr-3"></div>
                        <p className="text-indigo-600 font-medium">{member.role}</p>
                      </div>
                      <p className="text-slate-600">{member.bio}</p>
                      
                      <div className="mt-6 flex space-x-3">
                        {['linkedin', 'twitter', 'email'].map((social) => (
                          <a 
                            key={social} 
                            href="#" 
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-indigo-100 transition-colors"
                          >
                            <span className="text-slate-600 text-sm">{social[0].toUpperCase()}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Values Content */}
        {activeTab === "values" && (
          <div>
            <div className="text-center mb-16 animate-on-scroll" id="values-title">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700">Our Core Values</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className={`group animate-on-scroll ${animatedItems.includes(`value-${index}`) ? 'fade-in' : 'opacity-0'}`}
                    id={`value-${index}`}
                  >
                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-slate-100 hover:border-indigo-100">
                      <div className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative max-w-5xl mx-auto px-8 py-16 animate-on-scroll" id="values-quote">
              {/* Abstract design elements */}
              <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
                <div className="w-40 h-40 rounded-full bg-indigo-100 opacity-60 blur-xl"></div>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-40 h-40 rounded-full bg-blue-100 opacity-60 blur-xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-10 border border-indigo-50">
                <div className="absolute -top-6 left-10">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.17 5.59C5.58 7.2 5 9.48 5 12H2c0-3.31 1.11-6.07 3.17-8.13C7.22 1.81 10 1 13 1v3c-2.21 0-4 .79-5.83 2.59zM19.17 5.59C17.58 7.2 17 9.48 17 12h-3c0-3.31 1.11-6.07 3.17-8.13C19.22 1.81 22 1 25 1v3c-2.21 0-4 .79-5.83 2.59z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-8 mt-4">Our Inspiration</h3>
                
                <p className="text-slate-700 text-xl leading-relaxed font-medium mb-6">
                  At SafeStack Technologies, we believe that technology should be an extension of intention—
                  intuitive, invisible, and deeply empowering.
                </p>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  What inspires us is not just building tools, but designing experiences that anticipate needs,
                  simplify complexity, and enable bold progress for every client we serve.
                </p>
                
                <div className="mt-8 flex items-center">
                  <div className="h-0.5 w-12 bg-indigo-500 mr-4"></div>
                  <span className="text-indigo-600 font-medium">The SafeStack Team</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your digital transformation?</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Let's discuss how our expertise can help your business reach its full potential.
          </p>
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
              <button 
                className="relative bg-white text-slate-900 font-medium px-8 py-4 rounded-full hover:bg-opacity-95 transition-all duration-300"
                onClick={show}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contacts 
        isVisible={isVisible} 
        onClose={hide} 
        ref={overlayRef} 
      />
      
      {/* CSS for animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}