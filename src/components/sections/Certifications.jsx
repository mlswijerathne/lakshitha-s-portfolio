import React from 'react';
import { certifications } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Certifications = () => {
  useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Licenses & Certifications</h2>
          </div>
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and courses that enhance my expertise in software development and emerging technologies.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-[1.02] scroll-hidden"
              data-scroll="fade-up"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Certificate Icon/Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <svg 
                    className="w-8 h-8 text-blue-600 dark:text-blue-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full font-medium">
                  {cert.issueDate}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 mb-4">
                <svg 
                  className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{cert.issuer}</p>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-mono break-all">
                    {cert.credentialId}
                  </p>
                </div>
              )}

              {/* Skills */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential Button */}
              {cert.credentialUrl && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl group"
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
                    <span>View Credential</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center border border-blue-200 dark:border-blue-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {certifications.length}
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Total Certifications
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl text-center border border-green-200 dark:border-green-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {new Set(certifications.flatMap(c => c.skills)).size}
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Skills Validated
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl text-center border border-purple-200 dark:border-purple-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {new Set(certifications.map(c => c.issuer)).size}
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Issuing Organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
