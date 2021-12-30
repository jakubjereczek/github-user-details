import { Repository } from "src/common/types";
import {
  FaInfoCircle,
  FaSearchLocation,
  FaLaptop,
  FaRocketchat,
  FaRegStar,
} from "react-icons/fa";
import { DescriptionKeysList } from "src/ResultCard/components/ResultCardDetails";
import { asDate, showTranslation } from "src/common/helpers";
import { TranslationKeys } from "src/i18n";

export const sortRepositoriesByCreatedAt = (repos: Repository[]) => {
  const sortedRepos: Repository[] = repos.sort(
    (rep1, rep2) =>
      asDate(rep2.created_at).getTime() - asDate(rep1.created_at).getTime()
  );
  return sortedRepos;
};

export const getUserPropertyIcon = (key: DescriptionKeysList): JSX.Element => {
  switch (key) {
    case "company":
      return <FaLaptop />;
    case "bio":
      return <FaInfoCircle />;
    case "location":
      return <FaSearchLocation />;
    case "blog":
      return <FaRocketchat />;
  }
  return <FaRegStar />;
};

export const handleErrorByErrorCode = (code: number) => {
  let translationKey;

  switch (code) {
    case 404:
      translationKey = TranslationKeys.LayoutResultCardFetchErrorUserNotFound;
      break;
    default:
      translationKey = TranslationKeys.LayoutResultCardFetchError;
      break;
  }
  return showTranslation(translationKey);
};
