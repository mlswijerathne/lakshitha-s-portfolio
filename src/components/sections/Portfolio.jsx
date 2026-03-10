import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';

import AuctionImg from '../../assets/Auction.png';
import InventryImg from '../../assets/Inventry.png';
import WasteImg from '../../assets/Waste.png';
import FinanceImg from '../../assets/Finance.png';
import FoodImg from '../../assets/Food.png';
import OasisImg from '../../assets/Oasis.png';
import LexicalImg from '../../assets/lexical.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  // Close modal on ESC key press
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage, selectedProject]);

  const getProjectImage = (project) => {
    // Map project titles to imported image files
    const imageMap = {
      'Online Auction Management System': AuctionImg,
      'Inventory Management System': InventryImg,
      'Waste Management System': WasteImg,
      'Finance Management System': FinanceImg,
      'Food Order App': FoodImg,
      'Oasis Protocol Platform': OasisImg,
      'Lexical Analyzer': LexicalImg
    };
    return imageMap[project.title] || OasisImg;
  };


  const isMobileProject = (project) => {
    return project.category === 'mobile' || project.title === 'Food Order App';
  };

  const filterCategories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Applications', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Applications', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          </div>
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, 
              mobile applications, and full-stack solutions.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-hidden" data-scroll="fade-up">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'text-white shadow-lg border-transparent'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600'
              }`}
              style={activeFilter === category.id ? {
                backgroundColor: '#222831'
              } : {}}
            >
              <span className="inline-flex items-center gap-2">
                {category.name}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 scroll-hidden"
              data-scroll="fade-up"
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 cursor-pointer group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={getProjectImage(project)}
                  alt={project.title}
                  className={`w-full h-full cursor-pointer ${
                    isMobileProject(project) 
                      ? 'object-contain bg-gray-100 dark:bg-gray-800 p-2' 
                      : 'object-cover bg-white dark:bg-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedImage(getProjectImage(project));
                  }}
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg">
                    {project.year}
                  </span>
                </div>
                {project.type && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/90 px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg">
                      {project.type}
                    </span>
                  </div>
                )}
                {/* Enhanced View Image Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage(getProjectImage(project));
                    }}
                    className="p-3 bg-white/95 dark:bg-gray-800/95 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="View full image"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 15l6 6m-6-6v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
                
                {/* Full View Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="bg-white/20 rounded-full p-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                {/* Project Category */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'web' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                  }`}>
                    {project.category === 'web' ? '🌐 Web App' : '📱 Mobile App'}
                  </span>
                  {project.demo && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Live Demo
                    </span>
                  )}
                </div>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Special Contribution */}
                {project.contribution && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-3 mb-4 rounded-r-lg">
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">My Contribution:</p>
                    <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">{project.contribution}</p>
                  </div>
                )}
                
                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-md font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors hover:scale-105"
                      >
                        +{project.technologies.length - 4} more
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Project Features */}
                <div className="space-y-1">
                  {project.category === 'web' && (
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Responsive Design
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Modern UI/UX
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        API Integration
                      </span>
                    </div>
                  )}
                  {project.category === 'mobile' && (
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Cross-platform
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Real-time Features
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Location Services
                      </span>
                    </div>
                  )}
                </div>

                {/* View Project Button */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.demo ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
                      >
                        Details
                      </button>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl"
                        style={{
                          backgroundColor: '#222831'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1a1f25';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#222831';
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl"
                      style={{
                        backgroundColor: '#222831'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1a1f25';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#222831';
                      }}
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-500">Try selecting a different category.</p>
          </div>
        )}

        {/* Enhanced Image Modal for Full View */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 animate-fadeIn" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex items-center justify-center">
              {/* Close Button */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-gray-300 transition-all duration-300 backdrop-blur-sm"
                aria-label="Close full view"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation Instructions */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm z-10">
                Click anywhere to close • ESC key to close
              </div>
              
              {/* Full Size Image Container */}
              <div className="w-full h-full flex items-center justify-center p-4">
                {/* Check if this is a mobile app based on the image name */}
                <div className={`relative ${
                  selectedImage && selectedImage === FoodImg ? 'max-w-sm sm:max-w-md' : 'max-w-full'
                } max-h-full`}>
                  <img 
                    src={selectedImage}
                    alt="Project screenshot - Full view"
                    className={`max-w-full max-h-full rounded-xl shadow-2xl ring-1 ring-white/20 ${
                      selectedImage && selectedImage === FoodImg 
                        ? 'object-contain bg-gradient-to-b from-gray-800 to-gray-900 p-6' 
                        : 'object-contain'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                    }}
                  />
                  
                  {/* Mobile App Frame Indicator */}
                  {selectedImage && selectedImage === FoodImg && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      📱 Mobile Application Preview
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.category === 'web' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                          : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                      }`}>
                        {selectedProject.category === 'web' ? '🌐 Web Application' : '📱 Mobile Application'}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                        {selectedProject.year}
                      </span>
                      {selectedProject.type && (
                        <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm font-medium text-blue-700 dark:text-blue-400">
                          {selectedProject.type}
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Enhanced Project Image */}
                <div className="mb-6 group cursor-pointer" onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedImage(getProjectImage(selectedProject));
                }}>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                    <img 
                      src={getProjectImage(selectedProject)}
                      alt={selectedProject.title}
                      className={`w-full h-80 ${
                        isMobileProject(selectedProject) 
                          ? 'object-contain bg-gray-100 dark:bg-gray-800 p-4' 
                          : 'object-cover bg-white dark:bg-gray-800'
                      }`}
                    />
                    {/* Overlay with view indicator */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Click to expand hint */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        Click to expand
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Special Contribution */}
                {selectedProject.contribution && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Contribution</h4>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-r-lg">
                      <p className="text-blue-700 dark:text-blue-300">{selectedProject.contribution}</p>
                    </div>
                  </div>
                )}

                {/* All Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
                      style={{
                        backgroundColor: '#222831'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1f25';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#222831';
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
