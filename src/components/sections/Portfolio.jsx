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

  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (selectedImage) setSelectedImage(null);
        else if (selectedProject) setSelectedProject(null);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [selectedImage, selectedProject]);

  const getProjectImage = (project) => {
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

  const isMobileProject = (project) => project.category === 'mobile' || project.title === 'Food Order App';

  const filterCategories = [
    { id: 'all', name: 'All', count: projects.length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50/60 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="watermark-text text-[8rem] md:text-[14rem]">Projects</span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-accent-600 dark:text-accent-400 font-medium text-sm uppercase tracking-wider mb-2">Recent Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="section-heading">My Projects</span></h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills in web development, mobile applications, and full-stack solutions.</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-12 scroll-hidden" data-scroll="fade-up">
          {filterCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveFilter(cat.id)} className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${activeFilter === cat.id ? 'bg-accent-600 text-white shadow-md shadow-accent-200 dark:shadow-accent-900/30' : 'bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-600'}`}>
              {cat.name}<span className={`ml-1.5 text-xs ${activeFilter === cat.id ? 'text-white/70' : 'text-gray-400 dark:text-gray-500'}`}>{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-accent-100 dark:hover:border-accent-700 scroll-hidden" data-scroll="fade-up">
              <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-gray-800 cursor-pointer" onClick={() => setSelectedImage(getProjectImage(project))}>
                <img src={getProjectImage(project)} alt={project.title} className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isMobileProject(project) ? 'object-contain p-4' : 'object-cover'}`} />
                <div className="absolute inset-0 bg-accent-900/0 group-hover:bg-accent-900/10 transition-colors duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm">{project.year}</span>
                </div>
                {project.type && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm">{project.type}</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2 flex-1">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 p-1.5 text-gray-300 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg transition-colors ml-2" aria-label="View on GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

                {project.contribution && (
                  <div className="bg-accent-50 dark:bg-accent-900/20 border-l-3 border-accent-400 p-2.5 mb-4 rounded-r-lg">
                    <p className="text-xs text-accent-700 dark:text-accent-300 font-medium">My Contribution:</p>
                    <p className="text-xs text-accent-600 dark:text-accent-400 mt-0.5">{project.contribution}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-medium">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <button onClick={() => setSelectedProject(project)} className="px-2 py-0.5 bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs rounded-md font-medium hover:bg-accent-100 dark:hover:bg-accent-900/50 transition-colors">+{project.technologies.length - 4}</button>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-50 dark:border-gray-700">
                  {project.demo ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setSelectedProject(project)} className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">Details</button>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-white bg-accent-600 py-2 px-4 rounded-xl text-sm font-medium hover:bg-accent-700 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Live Demo
                      </a>
                    </div>
                  ) : (
                    <button onClick={() => setSelectedProject(project)} className="w-full text-white bg-accent-600 py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-accent-700 transition-colors">View Details</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16"><p className="text-gray-400 dark:text-gray-500 text-lg">No projects found in this category.</p></div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <img src={selectedImage} alt="Project screenshot" className={`max-w-full max-h-[85vh] rounded-xl shadow-2xl ${selectedImage === FoodImg ? 'object-contain max-w-sm' : 'object-contain'}`} onClick={(e) => e.stopPropagation()} />
            </div>
          </div>
        )}

        {selectedProject && (
          <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${selectedProject.category === 'web' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' : 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'}`}>
                        {selectedProject.category === 'web' ? 'Web App' : 'Mobile App'}
                      </span>
                      <span className="bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">{selectedProject.year}</span>
                      {selectedProject.type && <span className="bg-accent-50 dark:bg-accent-900/30 px-3 py-1 rounded-full text-xs font-medium text-accent-600 dark:text-accent-400">{selectedProject.type}</span>}
                    </div>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="mb-6 cursor-pointer rounded-xl overflow-hidden" onClick={() => setSelectedImage(getProjectImage(selectedProject))}>
                  <img src={getProjectImage(selectedProject)} alt={selectedProject.title} className={`w-full h-72 ${isMobileProject(selectedProject) ? 'object-contain bg-gray-50 dark:bg-gray-700 p-4' : 'object-cover'} hover:scale-[1.02] transition-transform duration-300`} />
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Overview</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProject.contribution && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">My Contribution</h4>
                    <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-400 p-4 rounded-r-xl">
                      <p className="text-accent-700 dark:text-accent-300">{selectedProject.contribution}</p>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-lg font-medium border border-gray-100 dark:border-gray-600">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-600 text-white px-6 py-2.5 rounded-xl hover:bg-accent-700 transition-colors font-medium text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Live Demo
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
