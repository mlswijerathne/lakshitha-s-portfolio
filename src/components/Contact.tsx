import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Check, Clock } from 'lucide-react';
import { SITE, CONTACT_META, AVAILABILITY } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';
import { UpworkIcon } from './UpworkIcon';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0E0E0E] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Left — pitch */}
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/80"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14A800] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14A800]" />
              </span>
              {AVAILABILITY.status}
            </motion.span>

            <h2 className="text-section mt-6 text-white">
              <Reveal>{CONTACT_META.heading}</Reveal>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: DURATION.enter, ease: EASE, delay: 0.15 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-[16px]"
            >
              {CONTACT_META.intro}
            </motion.p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONTACT_META.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.25 + i * 0.06 }}
                  className="flex items-center gap-3 text-[14px] text-white/85"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#FF4D2E]/15 text-[#FF4D2E]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — action card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-white/40">
                {CONTACT_META.eyebrow}
              </p>

              <a
                href={SITE.upwork}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#14A800] px-6 py-4 text-[15px] font-semibold text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <UpworkIcon size={18} />
                {CONTACT_META.upworkCtaLabel}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="group mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-[15px] font-medium text-white transition-colors duration-300 ease-out hover:bg-white hover:text-[#0E0E0E]"
              >
                <Mail size={16} strokeWidth={1.8} />
                {CONTACT_META.emailCtaLabel}
              </a>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-[13px] text-white/55">
                <Clock size={14} strokeWidth={1.8} className="text-[#FF4D2E]" />
                {CONTACT_META.responseTime}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
