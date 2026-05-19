import { motion } from 'motion/react';
import { TECH } from '../data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-eyebrow text-[#6B6B6B]">Tools</span>
          <h2 className="text-section mt-3 text-[#0A0A0A]">Tech I work with</h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[#6B6B6B]">
            The everyday stack — frameworks, languages, and platforms I reach for to ship reliable software.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-[#E5E5E5] bg-[#E5E5E5] md:mt-16 md:grid-cols-4">
          {TECH.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease, delay: (i % 4) * 0.05 }}
              className="group flex flex-col items-center justify-center gap-4 bg-white px-6 py-10 transition-colors duration-300 hover:bg-[#FAFAFA]"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                loading="lazy"
                className="h-10 w-10 object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="text-[13px] font-medium tracking-wide text-[#0A0A0A]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
