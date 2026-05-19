import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)]"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            CAREER
          </p>
          <h2 className="text-section font-display font-bold text-[var(--text-primary)]">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-10">
          <div className="timeline-line" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true, margin: '-80px' }}
              className="relative mb-14 last:mb-0"
            >
              <div
                className={`timeline-dot ${exp.isCurrent ? 'timeline-dot-active' : ''}`}
              />
              {exp.isCurrent && (
                <div className="absolute left-[-6px] top-0 h-3 w-3 animate-ping rounded-full bg-[var(--accent)] opacity-20" />
              )}

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-500 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  {exp.period}
                </p>
                <h3 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">
                  {exp.role}
                </h3>
                <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
                  {exp.company}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-24"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            EDUCATION
          </p>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-500 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]">
            <h3 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">
              NSBM Green University
            </h3>
            <p className="mb-2 text-sm font-medium text-[var(--text-secondary)]">
              BSc (Hons) in Software Engineering
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              2022 — 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
