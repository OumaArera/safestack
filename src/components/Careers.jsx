import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CalendarDays, 
  DollarSign, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Tag,
  Building2,
  GraduationCap
} from "lucide-react";
import { careerData } from "../data/careerData";
import Pagination from "../services/Pagination";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocationType, setSelectedLocationType] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Load job data
  useEffect(() => {
    setJobs(careerData);
  }, []);

  // Get unique departments for filter
  const departments = ["All", ...new Set(jobs.map(job => job.department))];
  
  // Get unique location types for filter
  const getLocationType = (location) => {
    if (location.toLowerCase().includes("remote")) return "Remote";
    if (location.toLowerCase().includes("hybrid")) return "Hybrid";
    return "On-site";
  };
  
  const locationTypes = ["All", ...new Set(jobs.map(job => getLocationType(job.location)))];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    
    const locationType = getLocationType(job.location);
    const matchesLocationType = selectedLocationType === "All" || locationType === selectedLocationType;
    
    return matchesSearch && matchesDepartment && matchesLocationType;
  });

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / itemsPerPage));
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment, selectedLocationType]);
  
  // Get current page jobs
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of careers section
    window.scrollTo({
      top: document.getElementById('careers-section').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // Toggle job expansion
  const toggleJobExpansion = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("All");
    setSelectedLocationType("All");
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="careers-section" className="-top-20 py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-emerald-600/20 to-blue-600/20 mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-3">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
            Join Our Team
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're always looking for talented individuals to help us build the future of technology. 
            Explore our open positions and find your next career opportunity.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2">
            <Building2 className="w-5 h-5 text-gray-400" />
            <select
              className="bg-transparent text-gray-300 focus:outline-none w-full"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((department, index) => (
                <option key={index} value={department} className="bg-gray-800 text-gray-300">
                  {department === "All" ? "All Departments" : department}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <select
              className="bg-transparent text-gray-300 focus:outline-none w-full"
              value={selectedLocationType}
              onChange={(e) => setSelectedLocationType(e.target.value)}
            >
              {locationTypes.map((locationType, index) => (
                <option key={index} value={locationType} className="bg-gray-800 text-gray-300">
                  {locationType === "All" ? "All Locations" : locationType}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Current Page Information */}
        {filteredJobs.length > 0 && (
          <div className="text-gray-400 text-sm mb-6 flex justify-between items-center">
            <div>
              <span>Showing {Math.min(filteredJobs.length, (currentPage - 1) * itemsPerPage + 1)}-
              {Math.min(filteredJobs.length, currentPage * itemsPerPage)} of {filteredJobs.length} openings</span>
            </div>
            {(searchTerm || selectedDepartment !== "All" || selectedLocationType !== "All") && (
              <button 
                onClick={resetFilters}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Job Listings */}
        <div className="space-y-6">
          {currentJobs.map((job) => (
            <div 
              key={job.id} 
              className="relative"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-30 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300">
                {/* Job Header - Always Visible */}
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-800/30 transition-colors"
                  onClick={() => toggleJobExpansion(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-emerald-400" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="whitespace-nowrap text-sm text-gray-400">
                        Posted: {formatDate(job.postedDate)}
                      </span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700">
                        {expandedJobId === job.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Job Details */}
                {expandedJobId === job.id && (
                  <div className="p-6 pt-0 border-t border-gray-800 animate-fadeIn">
                    {/* Job Info Badges */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-gray-800/70 rounded-lg px-4 py-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{job.salaryRange}</span>
                      </div>
                      <div className="bg-gray-800/70 rounded-lg px-4 py-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{job.experience}</span>
                      </div>
                    </div>
                    
                    {/* Job Description */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                      <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    </div>
                    
                    {/* Job Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Job Requirements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Preferred Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Nice to Have</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {job.preferred.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tags */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-800/70 rounded-full text-gray-300 text-sm flex items-center gap-1.5">
                            <Tag className="w-3 h-3 text-blue-400" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="mt-8">
                      <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-emerald-500 to-blue-500">
                        <button className="bg-gray-900 hover:bg-gray-800 transition-colors text-white px-8 py-3 rounded-lg font-medium">
                          Apply for this Position
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-gray-800/30 rounded-xl border border-gray-800">
            <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-400 mb-2">No positions match your search criteria.</p>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search terms.</p>
            <button 
              onClick={resetFilters}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
            >
              View All Positions
            </button>
          </div>
        )}
        
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="my-12"
        />
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Don't see a position that fits your skills?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500">
            <button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors px-8 py-4 rounded-lg font-medium">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>

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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Careers;