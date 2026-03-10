import React from 'react';
import { experience } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { calcDuration, calcTotalTenure } from '../../utils/helpers';

const typeBadgeColors = {
  'Full-time': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  'Internship': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  'Part-time': 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
};

const workModeBadgeColors = {
  'Hybrid': 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  'Remote': 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  'On-site': 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
};

// Company icon placeholder — a simple styled abbreviation badge
const CompanyIcon = ({ name }) => {
  const abbr = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
  return (
    <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 text-sm font-bold flex-shrink-0">
      {abbr}
    </div>
  );
};

const RoleCard = ({ role, isLast }) => (
  <div
    className={`relative pl-6 ${!isLast ? 'pb-8' : ''}`}
  >
    {/* Vertical connector line */}
    {!isLast && (
      <span className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
    )}
    {/* Dot on timeline */}
    <span className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white dark:ring-gray-900 flex-shrink-0" aria-hidden="true" />

    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h4>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeBadgeColors[role.type] || typeBadgeColors['Full-time']}`}
            >
              {role.type}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {role.startDate} – {role.endDate} · {calcDuration(role.startDate, role.endDate)}
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${workModeBadgeColors[role.workMode] || workModeBadgeColors['On-site']}`}
            >
              {role.workMode}
            </span>
          </div>
        </div>
      </div>

      {role.description && (
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
          {role.description}
        </p>
      )}

      {role.skills && role.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Experience = () => {
  useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-hidden" data-scroll="fade-up">
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            <div className="h-px flex-1 max-w-[80px] bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {experience.map((company, cIdx) => (
            <div
              key={company.company}
              className="scroll-hidden"
              data-scroll="fade-up"
              style={{ transitionDelay: `${cIdx * 100}ms` }}
            >
              {/* Company header */}
              <div className="flex items-start gap-4 mb-6">
                <CompanyIcon name={company.company} />
                <div className="flex-1 min-w-0">
                  <a
                    href={company.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {company.company}
                  </a>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {company.roles.length > 1 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {company.roles.length} roles · {calcTotalTenure(company.companyStart, company.companyEnd)}
                      </span>
                    )}
                    {company.roles.length === 1 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{calcTotalTenure(company.companyStart, company.companyEnd)}</span>
                    )}
                    <span className="text-sm text-gray-500 dark:text-gray-400">· {company.location}</span>
                  </div>
                </div>
              </div>

              {/* Roles */}
              {company.roles.length === 1 ? (
                /* Single role — flat card, no timeline */
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mr-1">
                      {company.roles[0].title}
                    </h4>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeBadgeColors[company.roles[0].type] || typeBadgeColors['Full-time']}`}
                    >
                      {company.roles[0].type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {company.roles[0].startDate} – {company.roles[0].endDate} · {calcDuration(company.roles[0].startDate, company.roles[0].endDate)}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${workModeBadgeColors[company.roles[0].workMode] || workModeBadgeColors['On-site']}`}
                    >
                      {company.roles[0].workMode}
                    </span>
                  </div>
                  {company.roles[0].description && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
                      {company.roles[0].description}
                    </p>
                  )}
                  {company.roles[0].skills && company.roles[0].skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {company.roles[0].skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Multi-role: vertical timeline */
                <div className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
                  {company.roles.map((role, rIdx) => (
                    <RoleCard
                      key={`${role.title}-${rIdx}`}
                      role={role}
                      isLast={rIdx === company.roles.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
