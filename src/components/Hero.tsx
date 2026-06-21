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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[#E5E5E5] bg-[#FAFAFA] pt-24 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-stretch gap-10 px-5 pb-12 md:grid-cols-12 md:gap-8 md:px-8 md:pb-16 lg:px-12">
        <div className="flex flex-col justify-center md:col-span-6 md:py-8 lg:col-span-5 lg:py-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.02 }}
            className="mb-4 text-[11px] font-mono uppercase tracking-[0.3em] text-[#FF4D2E] md:mb-5 md:text-[12px]"
          >
            {HERO.tagline}
          </motion.p>

          <h1 className="text-display">
            <Reveal className="text-[#0A0A0A]" delay={0.05} immediate>
              {HERO.headline1}
            </Reveal>
            <Reveal className="text-[#FF4D2E]" delay={0.18} immediate>
              {HERO.headline2}
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.45 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6B6B6B] md:mt-6 md:text-[16px]"
          >
            {HERO.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.55 }}
            className="mt-6 md:mt-8"
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
            className="mt-7 grid grid-cols-2 gap-6 border-t border-[#E5E5E5] pt-6 md:mt-12 md:gap-12 md:pt-8"
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
          immediate
          delay={0.2}
          className="relative md:col-span-6 lg:col-span-7"
        >
          <div className="relative h-[260px] overflow-hidden sm:h-[380px] md:h-full md:min-h-[520px]">
            <motion.img
              src={HERO.image}
              srcSet={HERO.imageSrcSet}
              sizes={HERO.imageSizes}
              alt={HERO.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
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
