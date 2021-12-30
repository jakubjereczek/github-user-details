import Layout from "src/Layout/Layout";
import Api from "./api/Api";
import { Router, LocationProvider } from "@reach/router";
import { history } from "src/common/history";
import ResultCard from "./ResultCard/ResultCard";
import { IconContext } from "react-icons";
import "./i18n";
import { initI18next } from "./i18n";

const App = () => {
  const init = () => {
    Api.init();
    initI18next();
  };
  init();

  return (
    <IconContext.Provider value={{ size: "24px" }}>
      <Layout>
        <LocationProvider history={history}>
          <Router>
            <ResultCard path="/user/:userName" />
          </Router>
        </LocationProvider>
      </Layout>
    </IconContext.Provider>
  );
};

export default App;
