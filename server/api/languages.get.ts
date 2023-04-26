

// 统计所有仓库信息
export default defineEventHandler(async () => {
  const oct = useOctokit();
  const githubConfig = useAppGithub();
  const { data } = await oct.repos.listForAuthenticatedUser();
  const languages = new Map<string, number>();
  const noLanguage: string[] = githubConfig ? (githubConfig as any).noLanguage : [];

  for await (const repo of data) {
    const { data } = await oct.repos.listLanguages({ owner: repo.owner.login, repo: repo.name });
    for (const [key, value] of Object.entries(data)) {
      if (noLanguage.includes(key)) {
        continue;
      }
      const l = languages.get(key);
      if (l) {
        languages.set(key, l + (value ?? 0));
      } else {
        languages.set(key, value ?? 0);
      }
    }
  }

  return Object.fromEntries(languages);
});
