import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = ""
}) => {
  // Function to generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - 1);
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1);
    
    // Add ellipsis after page 1 if needed
    if (rangeStart > 2) {
      pages.push("...");
    }
    
    // Add pages around current page
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push("...");
    }
    
    // Always show last page if it exists
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className={`flex items-center justify-center gap-1 mt-8 ${className}`}>
      {/* Previous Page Button */}
      <button
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {/* Page Numbers */}
      {pageNumbers.map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === "..." ? (
            <span className="flex items-center justify-center w-10 h-10 text-gray-400">
              ...
            </span>
          ) : (
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                currentPage === pageNumber
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )}
        </React.Fragment>
      ))}
      
      {/* Next Page Button */}
      <button
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;