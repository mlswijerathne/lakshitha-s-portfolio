import { motion } from 'motion/react';
import { Sparkles, Code2, Smartphone, Bot, Workflow } from 'lucide-react';
import { SERVICES } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';

const ICONS = {
  ai: Sparkles,
  web: Code2,
  mobile: Smartphone,
  agent: Bot,
  n8n: Workflow,
} as const;

export default function Services() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="text-eyebrow block text-[#6B6B6B]"
          >
            What I do
          </motion.span>
          <h2 className="text-section mt-3 text-[#0A0A0A]">
            <Reveal delay={0.1}>Services I offer</Reveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#E5E5E5] bg-[#E5E5E5] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: DURATION.enter, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="group relative bg-white p-7 md:p-8"
              >
                <Icon
                  size={30}
                  strokeWidth={1.4}
                  className="text-[#0A0A0A] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#FF4D2E]"
                />
                <h3 className="mt-8 text-[16px] font-semibold tracking-tight text-[#0A0A0A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-[#FF4D2E] transition-transform duration-500 ease-out group-hover:scale-x-100 md:inset-x-8"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
