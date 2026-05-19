import { Github, Linkedin, BookOpen, Mail, ArrowUpRight } from 'lucide-react';
import { SITE } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h3 className="text-section text-[#0A0A0A]">
              Let&apos;s build something <span className="text-[#FF4D2E]">together</span>.
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#0A0A0A] underline-offset-4 hover:underline"
            >
              <Mail size={16} strokeWidth={1.8} />
              {SITE.email}
              <ArrowUpRight size={14} strokeWidth={2.25} className="text-[#FF4D2E]" />
            </a>
          </div>

          <div className="flex items-center gap-3 md:col-span-5 md:justify-end">
            <SocialLink href={SITE.github} label="GitHub">
              <Github size={16} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href={SITE.linkedin} label="LinkedIn">
              <Linkedin size={16} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href={SITE.medium} label="Medium">
              <BookOpen size={16} strokeWidth={1.8} />
            </SocialLink>
          </div>
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
      className="grid h-10 w-10 place-items-center rounded-full border border-[#E5E5E5] text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
    >
      {children}
    </a>
  );
}
