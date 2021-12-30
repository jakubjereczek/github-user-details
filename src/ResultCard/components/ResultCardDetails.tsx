import {
  getUserPropertyIcon,
  sortRepositoriesByCreatedAt,
} from "../ResultCard.utils";
import { UserCardProps } from "./ResultCardContainer";
import { User } from "src/common/types";
import { showTranslation } from "src/common/helpers";
import { TranslationKeys } from "src/i18n";

export type DescriptionKeysList = keyof Pick<
  User,
  "name" | "blog" | "bio" | "company" | "location"
>;

interface DescriptionKey {
  key: DescriptionKeysList;
  value: string;
}

const ResultCardDetails = ({ user, repos }: UserCardProps) => {
  const { name, blog, bio, company, location } = user;
  const descriptionKeys: DescriptionKey[] = [
    { key: "name", value: name },
    { key: "blog", value: blog },
    { key: "bio", value: bio },
    { key: "company", value: company },
    { key: "location", value: location },
  ];

  const sortedRepos = sortRepositoriesByCreatedAt(repos);

  const DescriptionItems = descriptionKeys.map((value) => {
    const { value: descriptionValue, key } = value;
    return (
      descriptionValue && (
        <div className="d-flex align-items-center py-1">
          <span>{getUserPropertyIcon(key)}</span>
          <span className="px-2">{descriptionValue}</span>
        </div>
      )
    );
  });

  const RepositoryItems = sortedRepos.map((repo) => {
    return (
      repo && (
        <a
          href={repo.html_url}
          className="list-group-item list-group-item-action flex-column align-items-start mt-1"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{repo.name}</h5>
            <small>{new Date(repo.created_at).toLocaleString()}</small>
          </div>
          <p className="mb-1">{repo.description}</p>
          {repo.language && (
            <span className="badge bg-success"> {repo.language}</span>
          )}
        </a>
      )
    );
  });

  return (
    <>
      <h4 className="card-title weight-400">{name}</h4>
      {DescriptionItems}
      {RepositoryItems.length > 0 ? (
        <div className="py-2">
          <h3>
            {showTranslation(
              TranslationKeys.LayoutResultCardBodySectionNameProjects
            )}
          </h3>
          {RepositoryItems}
        </div>
      ) : null}
    </>
  );
};

export default ResultCardDetails;
