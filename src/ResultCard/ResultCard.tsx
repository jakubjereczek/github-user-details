import { RouteComponentProps } from "@reach/router";
import qs from "qs";
import { FC, useEffect } from "react";
import { useState } from "react";
import { history } from "src/common/history";
import { User } from "src/common/types";
import ErrorMessage from "./components/ErrorMessage";
import LoadingIndicator from "./components/LoadingIndicator";
import ResultCardContainer from "./components/ResultCardContainer";
import { fetchUser } from "./ResultCard.api";

enum ResultCardState {
  Idle = "idle",
  Loading = "loading",
  Succeeded = "succeeded",
  Failed = "failed",
}

interface ResultCardProps extends RouteComponentProps {
  userName?: string;
}

const ResultCard: FC<ResultCardProps> = ({}) => {
  const [resultCardState, setResultCardState] = useState<ResultCardState>(
    ResultCardState.Idle
  );
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  history.listen(() => {
    const { name } = qs.parse(history.location.search, {
      ignoreQueryPrefix: true,
    });
    setUserName(`${name}`);
  });

  useEffect(() => {
    const loadUser = async () => {
      setResultCardState(ResultCardState.Loading);
      if (!userName) {
        setResultCardState(ResultCardState.Idle);
        return;
      }
      fetchUser(userName)
        .then((user) => {
          setUser(user);
          setResultCardState(ResultCardState.Succeeded);
        })
        .catch(() => {
          setResultCardState(ResultCardState.Failed);
        });
    };

    loadUser();
  }, [userName]);

  switch (resultCardState) {
    case ResultCardState.Idle: {
      return null;
    }
    case ResultCardState.Loading: {
      return <LoadingIndicator />;
    }
    case ResultCardState.Failed: {
      return <ErrorMessage />;
    }
    case ResultCardState.Succeeded: {
      return <ResultCardContainer {...user} />;
    }
  }
};

export default ResultCard;
