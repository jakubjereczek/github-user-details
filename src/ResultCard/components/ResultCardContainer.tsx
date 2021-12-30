import { openWindow } from "src/common/helpers";
import { Repository, User } from "src/common/types";
import ResultCardDetails from "src/ResultCard/components/ResultCardDetails";
import { showTranslation } from "src/common/helpers";
import { TranslationKeys } from "src/i18n";

export interface UserCardProps {
  user: User;
  repos: Repository[];
}

const ResultCardContainer = ({ user, repos }: UserCardProps) => {
  const { login, avatar_url, html_url, followers, following } = user;
  const handleOnClick = () => openWindow(html_url!);

  return (
    <div className="col d-flex justify-content-center text-dark">
      <div className="card mb-4 w-100">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>{showTranslation(TranslationKeys.LayoutResultCardTitle)}</span>
          <span className="fw-bold">{login}</span>
        </div>
        <div className="bg-light p-4 d-flex justify-content-between align-items-start">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="iconImage"
              style={{
                backgroundImage: `url('${avatar_url}')`,
              }}
            />
            <div className="d-flex flex-column">
              <b className="h5 ms-2 mb-0">{login}</b>
              <span className="ms-2 mb-0">
                {showTranslation(
                  TranslationKeys.LayoutResultCardBodyFollowers,
                  {
                    followers,
                  }
                )}
              </span>
              <span className="ms-2 mb-0">
                {showTranslation(
                  TranslationKeys.LayoutResultCardBodyFollowing,
                  {
                    following,
                  }
                )}
              </span>
            </div>
          </div>
          <button className="button btn-dark" onClick={handleOnClick}>
            {showTranslation(TranslationKeys.LayoutResultCardButton)}
          </button>
        </div>
        <div className="card-body">
          <ResultCardDetails user={user} repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default ResultCardContainer;
