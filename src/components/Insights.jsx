import React from "react";
import { 
    Shield, 
    User, 
    Calendar, 
    Tag, 
    ArrowRight, 
    Search, 
    Filter,
    Database,
    HeartPulse,
    Users,
    Code2
 } from "lucide-react";
import { insights } from "../data/eduData";
import { getCategoryColors } from "../utils/categoryColors";
import Pagination from "../services/Pagination";

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'software engineering':
      return <Code2 className="w-5 h-5" />; 
    case 'cybersecurity':
      return <Shield className="w-5 h-5" />;
    case 'data science':
      return <Database className="w-5 h-5" />;
    case 'education technology':
      return <Tag className="w-5 h-5" />;
    case 'healthcare it':
      return <HeartPulse className="w-5 h-5" />;
    case 'community tech':
      return <Users className="w-5 h-5" />;
    default:
      return <Tag className="w-5 h-5" />; 
  }
};

const Insight = () => {
  const insightsData = insights;
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  
  // Get unique categories for filter
  const categories = ["All", ...new Set(insightsData.map(insight => insight.category))];
  
  // Filter insights based on search and category
  const filteredInsights = insightsData.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          insight.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredInsights.length / itemsPerPage));
  
  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);
  
  // Get current page insights
  const currentInsights = filteredInsights.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.getElementById('insights-section').offsetTop - 100,
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="insights-section" className="-top-20 py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Industry Insights
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest thoughts on technology, education, healthcare, and community building in the digital age.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 placeholder-gray-400"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              className="bg-transparent text-gray-300 focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category} className="bg-gray-800 text-gray-300">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Current Page Information */}
        {filteredInsights.length > 0 && (
          <div className="text-gray-400 text-sm mb-6">
            Showing {Math.min(filteredInsights.length, (currentPage - 1) * itemsPerPage + 1)}-
            {Math.min(filteredInsights.length, currentPage * itemsPerPage)} of {filteredInsights.length} results
          </div>
        )}

        {/* Insights Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentInsights.map((insight, idx) => {
            const colors = getCategoryColors(insight.category);
            return (
              <div key={idx} className="group relative h-full">
                {/* Animated border gradient */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.from} ${colors.to} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
                
                {/* Insight Card */}
                <div className={`relative h-full bg-gradient-to-br ${colors.bgFrom} ${colors.bgTo} backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 flex flex-col`}>
                  {/* Category Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${colors.from} ${colors.to}`}>
                      {getCategoryIcon(insight.category)}
                    </div>
                    <span className={`text-sm font-medium ${colors.text}`}>
                      {insight.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {insight.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-gray-300 mb-6 flex-grow">
                    {insight.summary}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{insight.publishDate}</span>
                      </div>
                    </div>
                    
                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {insight.keywords.slice(0, 3).map((keyword, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-gray-800/70 rounded-full text-gray-300">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More Button */}
                    <div className="mt-4">
                      <button className={`text-sm group flex items-center gap-2 font-medium bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent transition-all duration-300`}>
                        Read Full Article
                        <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${colors.text}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* No Results Message */}
        {filteredInsights.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No insights match your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
              className="mt-4 text-blue-400 hover:text-blue-300"
            >
              Clear filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mb-12"
        />
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-xl overflow-hidden p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
            <button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors px-8 py-4 rounded-lg font-medium">
              Subscribe to Our Newsletter
            </button>
          </div>
          <p className="mt-4 text-gray-400">Get the latest insights delivered directly to your inbox</p>
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
      `}</style>
    </section>
  );
};

export default Insight;