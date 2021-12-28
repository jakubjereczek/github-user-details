import Layout from "src/Layout/Layout";
import Api from "./api/Api";
import { Router, LocationProvider } from "@reach/router";
import { history } from "src/common/history";
import ResultCard from "./ResultCard/ResultCard";

const App = () => {
  const init = () => {
    Api.init();
  };
  init();

  return (
    <Layout>
      <LocationProvider history={history}>
        <Router>
          <ResultCard path="/user" />
        </Router>
      </LocationProvider>
    </Layout>
  );
};

export default App;
