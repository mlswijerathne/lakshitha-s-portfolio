import { motion } from 'motion/react';
import { Sparkles, Code2, Smartphone, Bot, Workflow } from 'lucide-react';
import { SERVICES } from '../data';

const ease = [0.22, 1, 0.36, 1] as const;

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
          <span className="text-eyebrow text-[#6B6B6B]">What I do</span>
          <h2 className="text-section mt-3 text-[#0A0A0A]">Services I offer</h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#E5E5E5] bg-[#E5E5E5] lg:grid-cols-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="group bg-white p-7 md:p-8"
              >
                <Icon
                  size={30}
                  strokeWidth={1.4}
                  className="text-[#0A0A0A] transition-colors duration-300 group-hover:text-[#FF4D2E]"
                />
                <h3 className="mt-8 text-[16px] font-semibold tracking-tight text-[#0A0A0A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#6B6B6B]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
