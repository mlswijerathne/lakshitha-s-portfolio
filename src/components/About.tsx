import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { ABOUT } from '../data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="relative md:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#FAFAFA]">
            <img
              src={ABOUT.image}
              alt={ABOUT.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 left-2 select-none text-[110px] font-bold leading-none tracking-tight text-white/85 md:text-[140px]"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
            >
              {ABOUT.year}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="flex flex-col justify-center md:col-span-7 md:pl-4 lg:pl-12"
        >
          <h2 className="text-section text-[#0A0A0A]">{ABOUT.heading}</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#6B6B6B] md:text-[16px]">
            {ABOUT.intro}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ABOUT.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-[14px] text-[#0A0A0A]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#FF4D2E]/10 text-[#FF4D2E]">
                  <Check size={12} strokeWidth={3} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={ABOUT.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-3 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              {ABOUT.ctaLabel}
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
