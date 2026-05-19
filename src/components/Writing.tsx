import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import type { MediumArticle } from '../data';
import { SITE, WRITING_META } from '../data';
import { EASE, DURATION } from '../lib/motion';
import { Reveal } from './Reveal';

const ease = EASE;

interface WritingProps {
  articles: MediumArticle[];
  loading: boolean;
}

function formatDate(raw: string) {
  if (!raw) return '';
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function SkeletonCard() {
  return (
    <div className="border border-[#E5E5E5] bg-white">
      <div className="aspect-[16/10] animate-pulse bg-[#FAFAFA]" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-1/3 animate-pulse rounded bg-[#FAFAFA]" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-[#FAFAFA]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#FAFAFA]" />
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: MediumArticle }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col border border-transparent bg-white transition-colors duration-300 hover:bg-[#FAFAFA]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#FAFAFA]">
        {article.thumbnail ? (
          <img
            src={article.thumbnail}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-[12px] tracking-[0.2em] text-[#6B6B6B]">
            ARTICLE
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center gap-2 text-[12px] text-[#6B6B6B]">
          <Calendar size={12} strokeWidth={1.8} />
          {formatDate(article.pubDate)}
        </div>

        <h3 className="mt-3 text-[16px] font-semibold leading-snug text-[#0A0A0A] line-clamp-2">
          {article.title}
        </h3>

        {article.description && (
          <p className="mt-3 text-[13px] leading-relaxed text-[#6B6B6B] line-clamp-3">
            {article.description}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2 pt-5 text-[13px] font-medium text-[#0A0A0A]">
          <span>Read article</span>
          <ArrowUpRight
            size={14}
            strokeWidth={2.25}
            className="text-[#FF4D2E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </a>
  );
}

export default function Writing({ articles, loading }: WritingProps) {
  const hasArticles = !loading && articles.length > 0;
  const showCards = loading || hasArticles;

  return (
    <section id="writing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease }}
              className="text-eyebrow block text-[#6B6B6B]"
            >
              Writing
            </motion.span>
            <h2 className="text-section mt-3 text-[#0A0A0A]">
              <Reveal delay={0.1}>{WRITING_META.heading}</Reveal>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: DURATION.enter, ease, delay: 0.25 }}
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B6B6B] md:text-[16px]"
            >
              {WRITING_META.intro}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: DURATION.enter, ease, delay: 0.35 }}
            className="md:col-span-5 md:flex md:justify-end"
          >
            <a
              href={SITE.medium}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-5 py-3 text-[14px] font-medium text-[#0A0A0A] transition-colors duration-300 hover:border-[#0A0A0A]"
            >
              {WRITING_META.ctaLabel}
              <ArrowUpRight
                size={16}
                strokeWidth={2.25}
                className="text-[#FF4D2E] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[#E5E5E5] bg-[#E5E5E5] md:mt-16 md:grid-cols-3">
          {showCards
            ? (loading ? Array.from({ length: 3 }) : articles.slice(0, 3)).map((article, i) => (
                <motion.div
                  key={(article as MediumArticle)?.link ?? i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                >
                  {loading ? <SkeletonCard /> : <ArticleCard article={article as MediumArticle} />}
                </motion.div>
              ))
            : (
              <div className="col-span-full bg-white p-10 text-center text-[14px] text-[#6B6B6B]">
                No articles available right now. Check back soon.
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
