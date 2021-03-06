import { FetchStatus } from "src/common/hooks/useFetchGithubProfile";
import { ErrorResponse } from "src/common/types";
import { handleErrorByErrorCode } from "src/ResultCard/ResultCard.utils";

interface ResultCardLoadingIndicatorProps {
  type: FetchStatus;
  error?: ErrorResponse;
}

const ResultCardLoadingIndicator = ({
  type,
  error,
}: ResultCardLoadingIndicatorProps) => {
  if (![FetchStatus.Loading, FetchStatus.Failed].includes(type)) {
    return null;
  } else {
    return (
      <div className="d-flex justify-content-center">
        {type === FetchStatus.Loading && (
          <div className="spinner-border" role="status" />
        )}
        {type === FetchStatus.Failed && (
          <h3>{error && handleErrorByErrorCode(error.code)}</h3>
        )}
      </div>
    );
  }
};

export default ResultCardLoadingIndicator;
