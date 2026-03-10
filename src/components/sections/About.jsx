import React from 'react';
import { personalInfo, skills, education } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Lakshitha from '../../assets/Lakshitha.jpg';

const About = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="mb-20">
          <div className="scroll-hidden" data-scroll="fade-up">
            <div className="flex items-center gap-4 justify-center mb-12">
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main About Content - Takes up 2/3 of the space */}
            <div className="lg:col-span-2 scroll-hidden-left" data-scroll="fade-left">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Hello, I'm Lakshitha</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-8 text-lg mb-6">
                  {personalInfo.objective}
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-8">
                  I'm passionate about creating innovative solutions and continuously learning new technologies 
                  to solve real-world problems. My journey in software development has been driven by curiosity 
                  and a desire to make a meaningful impact through code.
                </p>
              </div>
            </div>

            {/* Profile Photo Panel - Takes up 1/3 of the space */}
            <div className="lg:col-span-1 scroll-hidden-right" data-scroll="fade-right">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 h-full flex flex-col items-center justify-center">
                
                <div className="relative mb-6">
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/50 transition-all duration-300 hover:ring-blue-200 dark:hover:ring-blue-800">
                    <img 
                      src={Lakshitha}
                      alt="Lakshitha Wijerathne - Profile Photo" 
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                      style={{ objectPosition: 'center 30%' }} // Adjust percentages as needed
                    />
                  </div>
                  
                </div>
                
                {/* Name and Title */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lakshitha Wijerathne</h3>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="scroll-hidden" data-scroll="fade-up">
            <div className="flex items-center gap-4 justify-center mb-12">
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl scroll-hidden transition-all duration-300 border border-gray-200/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600"
                data-scroll="fade-up"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {edu.gpa && (
                      <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-medium text-sm border border-blue-200 dark:border-blue-800 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-105 cursor-pointer transform hover:shadow-md">
                        Current GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.result && (
                      <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg font-medium text-sm border border-green-200 dark:border-green-800 transition-all duration-200 hover:bg-green-100 dark:hover:bg-green-900/30 hover:scale-105 cursor-pointer transform hover:shadow-md">
                        {edu.result}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <div className="flex items-center gap-4 justify-center mb-12">
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
              <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills.categories).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl scroll-hidden transition-all duration-300 border border-gray-200/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 group"
                data-scroll="fade-up"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  animationDelay: `${index * 150}ms`
                }}
              >
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer font-medium transform"
                      style={{
                        transitionDelay: `${(index * 150) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section - Uncomment when needed
        <div>
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Achievements & Activities</h2>
          </div>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/50"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{achievement.organization}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement.achievement}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;