import { Repository } from "src/common/types";

export const sortRepositoriesByCreatedAt = (repos: Repository[]) => {
  const sortedRepos: Repository[] = repos.sort(
    (rep1, rep2) =>
      new Date(rep2.created_at).getTime() - new Date(rep1.created_at).getTime()
  );
  return sortedRepos;
};
