import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            CREDENTIALS
          </p>
          <h2 className="text-section font-display font-bold text-[var(--text-primary)]">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8 }}
              className="glass-card group relative flex flex-col rounded-2xl p-6 transition-all duration-500 hover:border-[var(--border-hover)] hover:bg-[var(--hover-bg)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--hover-bg)] transition-colors duration-300 group-hover:border-[var(--border-hover)]">
                <Award className="h-5 w-5 text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--text-primary)]" />
              </div>

              <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-[var(--text-primary)]">
                {cert.title}
              </h3>

              <p className="mb-3 text-sm text-[var(--text-muted)]">
                {cert.issuer}
              </p>

              <div className="mb-4 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                <span>{cert.issueDate}</span>
                {cert.expiryDate && (
                  <span className="text-[var(--text-muted)]">
                    &mdash; {cert.expiryDate}
                  </span>
                )}
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border-color)] px-2.5 py-0.5 text-[10px] tracking-wide text-[var(--text-muted)] transition-colors duration-300 group-hover:border-[var(--border-hover)] group-hover:text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-xs text-[var(--text-muted)] opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:text-[var(--text-primary)]">
                View Credential
                <ExternalLink className="h-3 w-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
