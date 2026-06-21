import { motion } from 'motion/react';
import { PROCESS, PROCESS_META } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';

export default function Process() {
  return (
    <section className="bg-[#FAFAFA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="text-eyebrow block text-[#6B6B6B]"
          >
            {PROCESS_META.eyebrow}
          </motion.span>
          <h2 className="text-section mt-3 text-[#0A0A0A]">
            <Reveal delay={0.1}>{PROCESS_META.heading}</Reveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B6B6B] md:text-[16px]"
          >
            {PROCESS_META.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#E5E5E5] bg-[#E5E5E5] sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: DURATION.enter, ease: EASE, delay: 0.1 + i * 0.08 }}
              className="group relative bg-white p-7 md:p-8"
            >
              <span className="font-mono text-[13px] font-medium tracking-widest text-[#FF4D2E]">
                {item.step}
              </span>
              <h3 className="mt-5 text-[16px] font-semibold tracking-tight text-[#0A0A0A]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#6B6B6B]">
                {item.description}
              </p>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-[#FF4D2E] transition-transform duration-500 ease-out group-hover:scale-x-100 md:inset-x-8"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
