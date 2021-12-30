import { ReactNode } from "react";
import { getConfig } from "src/common/helpers";
import SearchBar from "./components/SearchBar";
import { showTranslation } from "src/common/helpers";
import { TranslationKeys } from "src/i18n";
import LanguageSwitch from "./components/LanguageSwitch";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const config = getConfig();

  return (
    <>
      <LanguageSwitch />
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar w-100 pt-5 d-flex justify-content-center">
          <div className="logo" />
        </nav>
        <div
          className="container flex-grow-1"
          style={{
            maxWidth: "900px",
          }}
        >
          <SearchBar />
          {children}
        </div>
        <footer className="bg-light text-dark text-center p-1">
          <a href={config.AUTHOR_GITHUB}>
            {showTranslation(TranslationKeys.LayoutFooterCreatedby, {
              author: "jakubjereczek",
            })}
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
