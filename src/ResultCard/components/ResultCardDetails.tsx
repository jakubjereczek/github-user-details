import { sortRepositoriesByCreatedAt } from "../ResultCard.utils";
import { UserCardProps } from "./ResultCardContainer";

const ResultCardDetails = ({ user, repos }: UserCardProps) => {
  const { name, blog, bio } = user;
  const sortedRepos = sortRepositoriesByCreatedAt(repos);

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
          <small>{repo.language}</small>
        </a>
      )
    );
  });

  return (
    <>
      <h4 className="card-title weight-400">{name}</h4>
      {blog && <h6>{blog}</h6>}
      {bio && (
        <div>
          <h2>About</h2>
          <p>{bio}</p>
        </div>
      )}
      {repos.length > 0 && (
        <div>
          <h2>Projects</h2>
          <div className="list-group">{RepositoryItems}</div>
        </div>
      )}
    </>
  );
};

export default ResultCardDetails;
