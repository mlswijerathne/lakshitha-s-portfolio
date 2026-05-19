import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import { PROJECTS, PROJECTS_META } from '../data';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const [index, setIndex] = useState(0);
  const current = PROJECTS[index];

  const prev = () => setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setIndex((i) => (i + 1) % PROJECTS.length);

  return (
    <section id="projects" className="bg-[#0E0E0E] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24 lg:px-12">
        <div className="flex flex-col justify-between md:col-span-5 md:py-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease }}
              className="text-section text-white"
            >
              {PROJECTS_META.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60"
            >
              {PROJECTS_META.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href={PROJECTS_META.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF4D2E] px-5 py-3 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {PROJECTS_META.ctaLabel}
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </a>
            </motion.div>
          </div>

          <div className="mt-12 flex items-end justify-between md:mt-16">
            <div>
              <div className="text-[34px] font-semibold leading-none tracking-tight md:text-[40px]">
                <span className="text-white">{PROJECTS_META.statValue}</span>
                <span className="text-[#FF4D2E]">{PROJECTS_META.statSymbol}</span>
              </div>
              <div className="mt-2 text-[13px] text-white/55">{PROJECTS_META.statLabel}</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-[#0E0E0E] no-tap-highlight"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next project"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-[#0E0E0E] no-tap-highlight"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="relative h-[360px] overflow-hidden bg-black sm:h-[440px] md:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${current.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, ease }}
                className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-sm"
              >
                {current.confidential ? (
                  <div className="flex items-start justify-between gap-4 bg-white p-5 text-[#0A0A0A]">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-sm bg-[#0A0A0A] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                          <Lock size={10} strokeWidth={2.5} />
                          Confidential
                        </span>
                      </div>
                      <div className="mt-3 text-[15px] font-semibold leading-tight">{current.title}</div>
                      <ul className="mt-3 space-y-1.5 text-[13px] text-[#6B6B6B]">
                        {current.company && (
                          <li className="flex gap-2">
                            <span className="text-[#0A0A0A]">›</span>
                            Built at: <span className="text-[#0A0A0A]">{current.company}</span>
                          </li>
                        )}
                        <li className="flex gap-2">
                          <span className="text-[#0A0A0A]">›</span>
                          Stack: <span className="text-[#0A0A0A]">{current.tags.slice(0, 3).join(', ')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    href={current.liveUrl && current.liveUrl !== '#' ? current.liveUrl : current.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-4 bg-white p-5 text-[#0A0A0A] transition-colors hover:bg-[#FAFAFA]"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-semibold leading-tight">{current.title}</div>
                      <ul className="mt-3 space-y-1.5 text-[13px] text-[#6B6B6B]">
                        <li className="flex gap-2">
                          <span className="text-[#0A0A0A]">›</span>
                          Category: <span className="text-[#0A0A0A]">{current.category}</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#0A0A0A]">›</span>
                          Stack: <span className="text-[#0A0A0A]">{current.tags.slice(0, 3).join(', ')}</span>
                        </li>
                      </ul>
                    </div>
                    <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center border border-[#E5E5E5] text-[#0A0A0A]">
                      <ArrowUpRight size={16} strokeWidth={2.25} />
                    </span>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
