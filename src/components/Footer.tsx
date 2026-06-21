import { Github, Linkedin, BookOpen, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';
import { UpworkIcon } from './UpworkIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h3 className="text-section text-[#0A0A0A]">
              <Reveal>Let&apos;s build something</Reveal>
              <Reveal delay={0.1}>
                <span className="text-[#FF4D2E]">together</span>.
              </Reveal>
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: DURATION.enter, ease: EASE, delay: 0.3 }}
              className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#0A0A0A]"
              >
                <Mail size={16} strokeWidth={1.8} />
                <span className="relative">
                  {SITE.email}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#0A0A0A] transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.25}
                  className="text-[#FF4D2E] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={SITE.upwork}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#14A800] px-4 py-2 text-[14px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <UpworkIcon size={16} />
                Hire me on Upwork
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease: EASE, delay: 0.4 }}
            className="flex items-center gap-3 md:col-span-5 md:justify-end"
          >
            <SocialLink href={SITE.github} label="GitHub">
              <Github size={16} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href={SITE.linkedin} label="LinkedIn">
              <Linkedin size={16} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href={SITE.medium} label="Medium">
              <BookOpen size={16} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href={SITE.upwork} label="Upwork">
              <UpworkIcon size={16} />
            </SocialLink>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#E5E5E5] pt-6 text-[13px] text-[#6B6B6B] sm:flex-row sm:items-center">
          <span>© {year} {SITE.name} Wijerathne. All rights reserved.</span>
          <span>Designed and built with care.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#E5E5E5] text-[#0A0A0A] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
    >
      {children}
    </a>
  );
}
