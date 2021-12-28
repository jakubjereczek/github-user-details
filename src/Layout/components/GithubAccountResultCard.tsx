interface GithubAccountResultCardProps {
  login: string;
  avatarUrl: string;
  accountUrl: string;
  name: string;
  bio: string;
  publicRepos?: number;
  publicGists?: number;
}

const GithubAccountResultCard = ({
  login,
  avatarUrl,
  accountUrl,
  name,
  bio,
  publicRepos,
  publicGists,
}: GithubAccountResultCardProps) => {
  const handleOnClick = () => {
    window.open(accountUrl);
  };

  return (
    <div className="col d-flex justify-content-center text-dark">
      <div className="card mb-4 w-100 ResultCard">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>user github profile details</span>
          <span className="fw-bold">{login}</span>
        </div>
        <div className="bg-light p-4 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="iconImage"
              style={{
                backgroundImage: `url('${avatarUrl}')`,
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

export default GithubAccountResultCard;
