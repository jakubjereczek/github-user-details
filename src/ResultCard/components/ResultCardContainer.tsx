import { User } from "src/common/types";

type UserCardProps = Partial<User>;

const ResultCardContainer = ({
  login,
  avatar_url,
  html_url,
  name,
  bio,
  public_repos,
  public_gists,
}: UserCardProps) => {
  const handleOnClick = () => {
    window.open(html_url);
  };

  return (
    <div className="col d-flex justify-content-center text-dark">
      <div className="card mb-4 w-100">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>user github profile details</span>
          <span className="fw-bold">{login}</span>
        </div>
        <div className="bg-light p-4 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="iconImage"
              style={{
                backgroundImage: `url('${avatar_url}')`,
              }}
            ></div>
            <b className="h5 ms-2 mb-0">{login}</b>
          </div>
          <button className="button btn-dark" onClick={handleOnClick}>
            Show Github profile
          </button>
        </div>
        <div className="card-body">
          <h4 className="card-title weight-400">{name}</h4>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCardContainer;
