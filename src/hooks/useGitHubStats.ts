import { useState, useEffect } from 'react';

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        let allRepos: any[] = [];
        let page = 1;
        while (true) {
          const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`);
          const repos = await res.json();
          if (!Array.isArray(repos) || repos.length === 0) break;
          allRepos = allRepos.concat(repos);
          if (repos.length < 100) break;
          page++;
        }

        const totalStars = allRepos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0);
        const totalForks = allRepos.reduce((sum: number, r: any) => sum + (r.forks_count || 0), 0);

        setStats({
          totalRepos: userData.public_repos || allRepos.length,
          totalStars,
          totalForks,
          followers: userData.followers || 0,
        });
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, [username]);

  return { stats, loading };
}
