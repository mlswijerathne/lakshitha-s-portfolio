import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p
              className="mb-4 text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: 'var(--text-muted)' }}
            >
              WHAT PEOPLE SAY
            </p>
            <h2
              className="text-section font-display font-black"
              style={{ color: 'var(--text-primary)' }}
            >
              Testimonials
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-card group relative rounded-2xl p-8 transition-all duration-300 hover:border-[var(--border-hover)] md:p-10"
              >
                <span
                  className="pointer-events-none absolute top-6 left-8 select-none font-display text-7xl font-black leading-none opacity-[0.08] md:text-8xl"
                  style={{ color: 'var(--text-muted)' }}
                >
                  &ldquo;
                </span>

                <div className="relative">
                  <p
                    className="mb-8 text-base italic leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {testimonial.content}
                  </p>

                  <div
                    className="mb-6 h-px w-full"
                    style={{ backgroundColor: 'var(--border-color)' }}
                  />

                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="mt-1 text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
