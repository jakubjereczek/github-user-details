import { useEffect, useState } from "react";
import { fetchRepos, fetchUser } from "src/ResultCard/ResultCard.api";
import { ErrorResponse, Repository, User } from "../types";

export enum FetchStatus {
  Idle = "idle",
  Loading = "loading",
  Succeeded = "succeeded",
  Failed = "failed",
}

interface UseFetchResults {
  user: User | undefined;
  repos: Repository[];
}

const initalFetchResults: UseFetchResults = {
  user: undefined,
  repos: [],
};

const useFetchGithubProfile = (userName: string | null) => {
  const [fetchState, setFetchState] = useState<FetchStatus>(FetchStatus.Idle);
  const [results, setResults] = useState<UseFetchResults>(initalFetchResults);
  const [error, setError] = useState<ErrorResponse>();

  useEffect(() => {
    if (!userName) {
      return setFetchState(FetchStatus.Idle);
    }
    setFetchState(FetchStatus.Loading);

    Promise.all([fetchUser(userName), fetchRepos(userName)])
      .then((results) => {
        setResults({
          user: results[0],
          repos: results[1],
        });
        setFetchState(FetchStatus.Succeeded);
      })
      .catch((err: ErrorResponse) => {
        setFetchState(FetchStatus.Failed);
        setError({
          message: err.message,
          code: err.code,
        });
      });
  }, [userName]);

  return {
    results,
    fetchState,
    error,
  };
};

export default useFetchGithubProfile;
