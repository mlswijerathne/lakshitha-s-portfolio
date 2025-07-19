import React from 'react';
import { personalInfo, skills, education, achievements } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="scroll-hidden-left" data-scroll="fade-left">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personalInfo.objective}
              </p>
            </div>
            <div className="space-y-4 scroll-hidden-right" data-scroll="fade-right">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400"><strong>Email:</strong> {personalInfo.email}</p>
                <p className="text-gray-600 dark:text-gray-400"><strong>Phone:</strong> {personalInfo.phone}</p>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Connect with me</h4>
                <SocialIcons iconSize={24} showLabels={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm scroll-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-700/50 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
                data-scroll="fade-up"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</h4>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>{edu.duration}</span>
                  {edu.gpa && (
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer">
                      Current GPA: {edu.gpa}
                    </span>
                  )}
                  {edu.result && (
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer">
                       {edu.result}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="scroll-hidden" data-scroll="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills.categories).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm scroll-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-700/50 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
                data-scroll="fade-up"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Achievements & Activities</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{achievement.organization}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.achievement}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
