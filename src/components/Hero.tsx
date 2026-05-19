import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO, HERO_STATS } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal, ImageReveal } from './Reveal';
import { Counter } from './Counter';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#FAFAFA] pt-28 md:pt-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24 lg:px-12">
        <div className="md:col-span-6 md:py-10 lg:col-span-5 lg:py-16">
          <h1 className="text-display">
            <Reveal className="text-[#0A0A0A]" delay={0.05}>
              {HERO.headline1}
            </Reveal>
            <Reveal className="text-[#FF4D2E]" delay={0.18}>
              {HERO.headline2}
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.45 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#6B6B6B] md:text-[16px]"
          >
            {HERO.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.55 }}
            className="mt-8"
          >
            <a
              href={HERO.ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-3 text-[14px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              {HERO.ctaLabel}
              <ArrowUpRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-[#E5E5E5] pt-8 md:mt-16 md:gap-12"
          >
            {HERO_STATS.map((stat) => {
              const numeric = Number(stat.value);
              return (
                <div key={stat.label}>
                  <dt className="text-[34px] font-semibold leading-none tracking-tight md:text-[40px]">
                    {Number.isFinite(numeric) ? (
                      <Counter to={numeric} className="text-[#0A0A0A]" />
                    ) : (
                      <span className="text-[#0A0A0A]">{stat.value}</span>
                    )}
                    <span className="text-[#FF4D2E]">{stat.symbol}</span>
                  </dt>
                  <dd className="mt-2 text-[13px] text-[#6B6B6B]">{stat.label}</dd>
                </div>
              );
            })}
          </motion.dl>
        </div>

        <ImageReveal
          delay={0.2}
          className="relative md:col-span-6 lg:col-span-7"
        >
          <div className="relative h-[320px] overflow-hidden sm:h-[420px] md:h-full md:min-h-[520px]">
            <motion.img
              src={HERO.image}
              alt={HERO.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </div>
        </ImageReveal>
      </div>
    </section>
  );
}
