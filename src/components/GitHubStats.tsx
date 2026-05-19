import { motion } from 'motion/react';
import { Github, FolderGit2, Star, Activity, GitCommitHorizontal, BarChart3 } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { GITHUB_USERNAME } from '../data';
import { useGitHubStats } from '../hooks/useGitHubStats';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const STATS_CONFIG = [
  { icon: FolderGit2, label: 'Repositories', key: 'totalRepos' as const },
  { icon: Star, label: 'Stars Earned', key: 'totalStars' as const },
  { icon: Activity, label: 'Forks', key: 'totalForks' as const },
  { icon: GitCommitHorizontal, label: 'Followers', key: 'followers' as const },
];

interface GitHubStatsProps {
  isDark: boolean;
}

export default function GitHubStats({ isDark }: GitHubStatsProps) {
  const { stats, loading } = useGitHubStats(GITHUB_USERNAME);

  return (
    <section className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          <motion.div variants={fadeUp} className="mb-16 flex items-center gap-4">
            <Github size={28} style={{ color: 'var(--accent)' }} />
            <h2
              className="text-section font-display font-black"
              style={{ color: 'var(--text-primary)' }}
            >
              GitHub Ecosystem
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          >
            {STATS_CONFIG.map(({ icon: Icon, label, key }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 text-center transition-colors duration-300 hover:bg-[var(--bg-card-hover)] md:p-8"
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="mb-2 text-3xl font-extrabold md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                  {loading ? (
                    <span className="inline-block h-8 w-12 animate-pulse rounded bg-[var(--bg-input)]" />
                  ) : (
                    stats?.[key] ?? '\u2014'
                  )}
                </p>
                <p
                  className="text-[10px] font-mono uppercase tracking-[0.2em]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 md:p-8"
          >
            <h3
              className="mb-6 flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <BarChart3 size={14} style={{ color: 'var(--accent)' }} />
              Contribution Activity
            </h3>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme={isDark ? 'dark' : 'light'}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ['#111111', '#333333', '#666666', '#999999', '#ffffff'],
                light: ['#f0f0f0', '#d0d0d0', '#999999', '#555555', '#000000'],
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
