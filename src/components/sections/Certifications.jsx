import React from 'react';
import { certifications } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Certifications = () => {
  useScrollAnimation();

  return (
    <section id="certifications" className="py-14 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="watermark-text text-[8rem] md:text-[14rem]">Certs</span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="scroll-hidden" data-scroll="fade-up">
            <p className="text-accent-600 dark:text-accent-400 font-medium text-sm uppercase tracking-wider mb-2">Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"><span className="section-heading">Licenses & Certifications</span></h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Professional certifications that enhance my expertise in software development and emerging technologies.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-700 hover:shadow-lg hover:shadow-accent-50/50 dark:hover:shadow-black/10 transition-all duration-300 scroll-hidden group" data-scroll="fade-up" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-accent-50 dark:bg-accent-900/30 rounded-xl flex items-center justify-center group-hover:bg-accent-100 dark:group-hover:bg-accent-900/50 transition-colors">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 px-2.5 py-1 rounded-full font-medium">{cert.issueDate}</span>
                  {cert.expiryDate && <span className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 rounded-full font-medium">Exp: {cert.expiryDate}</span>}
                </div>
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3rem] group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3">{cert.issuer}</p>

              {cert.description && <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed line-clamp-2 mb-3">{cert.description}</p>}

              {cert.credentialId && (
                <div className="mb-3 p-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">Credential ID</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-mono break-all">{cert.credentialId}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs rounded-md font-medium">{skill}</span>
                ))}
              </div>

              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20 py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-accent-100 dark:hover:bg-accent-900/40 transition-colors group/btn">
                  View Credential
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-accent-50 dark:bg-accent-900/20 p-6 rounded-2xl text-center border border-accent-100 dark:border-accent-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-1">{certifications.length}</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Total Certifications</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl text-center border border-green-100 dark:border-green-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-1">{new Set(certifications.flatMap(c => c.skills)).size}</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Skills Validated</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl text-center border border-purple-100 dark:border-purple-800 scroll-hidden" data-scroll="fade-up">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">{new Set(certifications.map(c => c.issuer)).size}</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Issuing Organizations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
