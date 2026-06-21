import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { ABOUT } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal, ImageReveal } from './Reveal';

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8 lg:px-12">
        <ImageReveal className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0]">
            <motion.img
              src={ABOUT.image}
              srcSet={ABOUT.imageSrcSet}
              sizes={ABOUT.imageSizes}
              alt={ABOUT.imageAlt}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              initial={{ scale: 1.06 }}
              animate={{ scale: loaded ? 1 : 1.06, opacity: loaded ? 1 : 0 }}
              transition={{ duration: 1.4, ease: EASE }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <motion.span
              aria-hidden
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              className="pointer-events-none absolute -bottom-3 left-2 select-none text-[110px] font-bold leading-none tracking-tight text-white/85 md:text-[140px]"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
            >
              {ABOUT.year}
            </motion.span>
          </div>
        </ImageReveal>

        <div className="flex flex-col justify-center md:col-span-7 md:pl-4 lg:pl-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease: EASE }}
            className="mb-4 text-[11px] font-mono uppercase tracking-[0.3em] text-[#FF4D2E] md:text-[12px]"
          >
            {ABOUT.tagline}
          </motion.p>

          <h2 className="text-section text-[#0A0A0A]">
            <Reveal>{ABOUT.heading}</Reveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.2 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#6B6B6B] md:text-[16px]"
          >
            {ABOUT.intro}
          </motion.p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ABOUT.bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3 text-[14px] text-[#0A0A0A]"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#FF4D2E]/10 text-[#FF4D2E]">
                  <Check size={12} strokeWidth={3} />
                </span>
                {bullet}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.65 }}
            className="mt-10"
          >
            <a
              href={ABOUT.ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-3 text-[14px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              {ABOUT.ctaLabel}
              <ArrowUpRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
