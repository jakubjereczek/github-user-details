import { ReactNode } from "react";
import { getConfig } from "src/common/helpers";
import SearchBar from "./components/SearchBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const config = getConfig();

  return (
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
        created by <a href={config.AUTHOR_GITHUB}>jakubjereczek</a>
      </footer>
    </div>
  );
};

export default Layout;
