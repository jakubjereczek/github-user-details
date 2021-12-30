import { RouteComponentProps } from "@reach/router";
import useFetchGithubProfile, {
  FetchStatus,
} from "src/common/hooks/useFetchGithubProfile";
import ResultCardContainer from "src/ResultCard/components/ResultCardContainer";
import ResultCardLoadingIndicator from "src/ResultCard/components/ResultCardLoadingIndicator";

interface ResultCardProps extends RouteComponentProps {
  userName?: string;
}

const ResultCard = ({ userName }: ResultCardProps) => {
  const {
    results: { user, repos },
    fetchState,
    error,
  } = useFetchGithubProfile(userName!);

  if (!user || fetchState === FetchStatus.Idle) {
    return null;
  }

  if ([FetchStatus.Loading, FetchStatus.Failed].includes(fetchState)) {
    return <ResultCardLoadingIndicator type={fetchState} error={error} />;
  }

  return <ResultCardContainer user={user} repos={repos} />;
};

export default ResultCard;
