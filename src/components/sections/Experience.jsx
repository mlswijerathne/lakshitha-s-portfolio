import React from 'react';
import { experience } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { calcDuration, calcTotalTenure } from '../../utils/helpers';

const typeBadgeColors = {
  'Full-time': 'bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-800',
  'Internship': 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  'Part-time': 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
};

const workModeBadgeColors = {
  'Hybrid': 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  'Remote': 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  'On-site': 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700',
};

const CompanyIcon = ({ name }) => {
  const abbr = name.split(' ').slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  return (
    <div className="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{abbr}</div>
  );
};

const RoleCard = ({ role, isLast }) => (
  <div className={`relative pl-6 ${!isLast ? 'pb-8' : ''}`}>
    {!isLast && <span className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />}
    <span className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-accent-500 ring-2 ring-white dark:ring-slate-900 flex-shrink-0" />

    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
      <h4 className="text-base font-semibold text-gray-900 dark:text-white">{role.title}</h4>
      <div className="flex flex-wrap items-center gap-2 mt-1.5 mb-3">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeBadgeColors[role.type] || typeBadgeColors['Full-time']}`}>{role.type}</span>
        <span className="text-sm text-gray-400 dark:text-gray-500">{role.startDate} - {role.endDate} · {calcDuration(role.startDate, role.endDate)}</span>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${workModeBadgeColors[role.workMode] || workModeBadgeColors['On-site']}`}>{role.workMode}</span>
      </div>
      {role.description && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{role.description}</p>}
      {role.skills && role.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span key={skill} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg font-medium hover:bg-accent-50 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-300 transition-colors cursor-default">{skill}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Experience = () => {
  useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="watermark-text text-[8rem] md:text-[14rem]">Experience</span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 scroll-hidden" data-scroll="fade-up">
          <p className="text-accent-600 dark:text-accent-400 font-medium text-sm uppercase tracking-wider mb-2">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"><span className="section-heading">Work Experience</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {experience.map((company, cIdx) => (
            <div key={company.company} className="scroll-hidden" data-scroll="fade-up" style={{ transitionDelay: `${cIdx * 100}ms` }}>
              <div className="flex items-start gap-4 mb-5">
                <CompanyIcon name={company.company} />
                <div className="flex-1 min-w-0">
                  <a href={company.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-gray-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">{company.company}</a>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{calcTotalTenure(company.companyStart, company.companyEnd)}{company.roles.length > 1 && ` · ${company.roles.length} roles`}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">· {company.location}</span>
                  </div>
                </div>
              </div>

              {company.roles.length === 1 ? (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mr-1">{company.roles[0].title}</h4>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeBadgeColors[company.roles[0].type] || typeBadgeColors['Full-time']}`}>{company.roles[0].type}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{company.roles[0].startDate} - {company.roles[0].endDate} · {calcDuration(company.roles[0].startDate, company.roles[0].endDate)}</span>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${workModeBadgeColors[company.roles[0].workMode] || workModeBadgeColors['On-site']}`}>{company.roles[0].workMode}</span>
                  </div>
                  {company.roles[0].description && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{company.roles[0].description}</p>}
                  {company.roles[0].skills && company.roles[0].skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {company.roles[0].skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg font-medium hover:bg-accent-50 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-300 transition-colors cursor-default">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
                  {company.roles.map((role, rIdx) => (
                    <RoleCard key={`${role.title}-${rIdx}`} role={role} isLast={rIdx === company.roles.length - 1} />
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
