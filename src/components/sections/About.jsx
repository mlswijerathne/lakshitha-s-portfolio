import React from 'react';
import { personalInfo, skills, education, achievements } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="mb-20">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main About Content - Takes up 2/3 of the space */}
            <div className="lg:col-span-2 scroll-hidden-left" data-scroll="fade-left">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Hello, I'm Lakshitha</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-8 text-lg mb-6">
                  {personalInfo.objective}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-8">
                  I'm passionate about creating innovative solutions and continuously learning new technologies 
                  to solve real-world problems. My journey in software development has been driven by curiosity 
                  and a desire to make a meaningful impact through code.
                </p>
              </div>
            </div>

            {/* Contact Information Panel - Takes up 1/3 of the space */}
            <div className="lg:col-span-1 scroll-hidden-right" data-scroll="fade-right">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                
                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                  <div className="flex flex-col space-y-3">
                    <SocialIcons iconSize={20} showLabels={true} className="justify-start" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm scroll-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-700/50 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
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
                      <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-medium text-sm border border-blue-200 dark:border-blue-800 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-105 cursor-pointer">
                        Current GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.result && (
                      <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg font-medium text-sm border border-green-200 dark:border-green-800 transition-all duration-200 hover:bg-green-100 dark:hover:bg-green-900/30 hover:scale-105 cursor-pointer">
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills.categories).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm scroll-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-700/50 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group"
                data-scroll="fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer font-medium"
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