import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO, HERO_STATS, AVAILABILITY, SITE } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';
import { Counter } from './Counter';
import { UpworkIcon } from './UpworkIcon';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[#E5E5E5] bg-[#FAFAFA] pt-24 md:pt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16 lg:px-12">
        <div className="flex max-w-3xl flex-col">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE }}
            className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:mb-5"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-3 py-1.5 text-[12px] font-medium text-[#0A0A0A]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14A800] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14A800]" />
              </span>
              {AVAILABILITY.status}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#FF4D2E] md:text-[12px]">
              {HERO.tagline}
            </span>
          </motion.div>

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
            className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6B6B6B] md:mt-5 md:text-[16px]"
          >
            {HERO.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.55 }}
            className="mt-5 flex flex-wrap items-center gap-3 md:mt-6"
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
            <a
              href={SITE.upwork}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-5 py-3 text-[14px] font-medium text-[#0A0A0A] transition-colors duration-300 ease-out hover:border-[#14A800] hover:text-[#14A800]"
            >
              <UpworkIcon size={16} />
              Hire on Upwork
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.7 }}
            className="mt-6 grid grid-cols-2 gap-6 border-t border-[#E5E5E5] pt-5 md:mt-8 md:gap-12 md:pt-6"
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
      </div>
    </section>
  );
}
