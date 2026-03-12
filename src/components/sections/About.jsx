import React from 'react';
import { personalInfo, skills, education, services } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionHeading = ({ subtitle, title }) => (
  <div className="text-center mb-14">
    <p className="text-accent-600 dark:text-accent-400 font-medium text-sm uppercase tracking-wider mb-2">{subtitle}</p>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      <span className="section-heading">{title}</span>
    </h2>
  </div>
);

const About = () => {
  useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gray-50/60 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="watermark-text text-[8rem] md:text-[14rem]">About</span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Me */}
        <div className="mb-24">
          <div className="scroll-hidden" data-scroll="fade-up">
            <SectionHeading subtitle="Who I Am" title="About Me" />
          </div>
          <div className="max-w-3xl mx-auto text-center scroll-hidden" data-scroll="fade-up">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{personalInfo.objective}</p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I'm passionate about creating innovative solutions and continuously learning new technologies
              to solve real-world problems. My journey in software development has been driven by curiosity
              and a desire to make a meaningful impact through code.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <div className="scroll-hidden" data-scroll="fade-up">
            <SectionHeading subtitle="What I Do" title="My Services" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-700 hover:shadow-lg hover:shadow-accent-50 dark:hover:shadow-accent-900/10 transition-all duration-300 group scroll-hidden"
                data-scroll="fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/30 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-accent-100 dark:group-hover:bg-accent-900/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-24">
          <div className="scroll-hidden" data-scroll="fade-up">
            <SectionHeading subtitle="Academic Background" title="Education" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 scroll-hidden" data-scroll="fade-up">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 ml-6 mb-2">{edu.institution}</p>
                    <span className="ml-6 text-sm text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full inline-block">{edu.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                    {edu.gpa && (
                      <span className="bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-4 py-2 rounded-xl font-semibold text-sm border border-accent-100 dark:border-accent-800">GPA: {edu.gpa}</span>
                    )}
                    {edu.result && (
                      <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-xl font-medium text-sm border border-green-100 dark:border-green-800">{edu.result}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="scroll-hidden" data-scroll="fade-up">
            <SectionHeading subtitle="Technical Expertise" title="Skills & Technologies" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Object.entries(skills.categories).map(([category, skillList], index) => (
              <div key={category} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-700 hover:shadow-md transition-all duration-300 scroll-hidden" data-scroll="fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                <h3 className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-3">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg font-medium hover:bg-accent-50 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-300 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
