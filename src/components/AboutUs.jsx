import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { teamMembers, values } from "../data/aboutUsData";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="relative -top-3 bg-white items-center min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center text-center">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>
                <p className="text-lg text-slate-200 leading-relaxed mb-4">
                Founded in 2025, SafeStack Technologies emerged from a shared vision to elevate how businesses use technology.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed mb-4">
                Our team of experts blends deep knowledge in software engineering, cybersecurity, and data science to deliver scalable, impactful digital solutions.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                We believe in purposeful technology—tools that simplify, empower, and transform the way organizations grow and operate.
                </p>
            </div>
            </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -translate-y-1/2 rounded-tl-full"></div>
        </div>


      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center flex-wrap border-b border-gray-200 mb-8">
          <button 
            onClick={() => setActiveTab("story")}
            className={`mr-8 py-4 text-lg font-medium border-b-2 ${
              activeTab === "story" ? "border-slate-700 text-slate-700" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Our Story
          </button>
          <button 
            onClick={() => setActiveTab("team")}
            className={`mr-8 py-4 text-lg font-medium border-b-2 ${
              activeTab === "team" ? "border-slate-700 text-slate-700" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Our Team
          </button>
          <button 
            onClick={() => setActiveTab("values")}
            className={`mr-8 py-4 text-lg font-medium border-b-2 ${
              activeTab === "values" ? "border-slate-700 text-slate-700" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Our Values
          </button>
        </div>

        {/* Our Story Content */}
        {activeTab === "story" && (
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-700 mb-6 text-lg">
            SafeStack Innovation was founded in 2025 as a collaboration of seasoned professionals
            determined to redefine digital transformation for African and global businesses.
            </p>
            <p className="text-gray-700 mb-12 text-lg">
            Our core belief is that technology should empower, not complicate. In that spirit,
            we've successfully delivered impactful solutions across industries and geographies.
            </p>

            <div className="text-left">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Milestones</h3>
            <ul className="space-y-6">
                <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                    <div className="bg-slate-100 rounded-full p-2">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                    </div>
                </div>
                <div>
                    <span className="text-lg font-bold text-indigo-700">2025</span>
                    <p className="text-gray-700">Delivered a comprehensive ERP system for an American AFH.</p>
                </div>
                </li>
                <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                    <div className="bg-slate-100 rounded-full p-2">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                    </div>
                </div>
                <div>
                    <span className="text-lg font-bold text-indigo-700">2025</span>
                    <p className="text-gray-700">Launched two custom web applications for fintech and logistics startups in Ghana.</p>
                </div>
                </li>
                <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                    <div className="bg-slate-100 rounded-full p-2">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                    </div>
                </div>
                <div>
                    <span className="text-lg font-bold text-indigo-700">2025</span>
                    <p className="text-gray-700">Developed E-Limu, an LMS tailored to support Kenya's CBC curriculum using AI.</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        )}


        {/* Our Team Content */}
        {activeTab === "team" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our dedicated founding duo brings deep experience in software engineering, strategy,
                and design to help your business grow smarter and faster.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Values Content */}
        {activeTab === "values" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex-shrink-0 mr-6">
                      <Icon className="w-10 h-10 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl p-10 shadow-xl border border-slate-100">
  <div className="max-w-4xl mx-auto text-center relative">
    <svg
      className="w-12 h-12 text-slate-400 absolute -top-6 left-1/2 -translate-x-1/2"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.17 5.59C5.58 7.2 5 9.48 5 12H2c0-3.31 1.11-6.07 3.17-8.13C7.22 1.81 10 1 13 1v3c-2.21 0-4 .79-5.83 2.59zM19.17 5.59C17.58 7.2 17 9.48 17 12h-3c0-3.31 1.11-6.07 3.17-8.13C19.22 1.81 22 1 25 1v3c-2.21 0-4 .79-5.83 2.59z" />
    </svg>

    <h3 className="text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">
      Our Inspiration
    </h3>

    <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
      At SafeStack Technologies, we believe that technology should be an extension of intention—
      intuitive, invisible, and deeply empowering. What inspires us is not just building tools,
      but designing experiences that anticipate needs, simplify complexity, and enable bold progress
      for every client we serve.
    </p>
  </div>
</div>


          </div>
        )}
      </div>
    </div>
  );
}