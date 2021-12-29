import { Repository } from "src/common/types";
import {
  FaInfoCircle,
  FaSearchLocation,
  FaLaptop,
  FaRocketchat,
  FaRegStar,
} from "react-icons/fa";
import { DescriptionKeysList } from "./components/ResultCardDetails";

export const sortRepositoriesByCreatedAt = (repos: Repository[]) => {
  const sortedRepos: Repository[] = repos.sort(
    (rep1, rep2) =>
      new Date(rep2.created_at).getTime() - new Date(rep1.created_at).getTime()
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
