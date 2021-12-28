import React, { ReactNode, useCallback } from "react";
import { getConfig } from "src/common/helpers";
import { navigate } from "src/common/history";
import { debounce } from "lodash";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const config = getConfig();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    navigate(`/user?name=${event.target.value}`);

  const debounceOnChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      handleOnChange(event);
    }, 500),
    [handleOnChange]
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar w-100 pt-5 d-flex justify-content-center">
        <div className="logo" />
      </nav>
      <div
        className="container flex-grow-1"
        style={{
          maxWidth: "800px",
        }}
      >
        <form className="py-5">
          <div className="form-group">
            <label htmlFor="searchInput">Github user account name</label>
            <input
              type="text"
              className="form-control"
              id="searchInput"
              placeholder="Enter the user account name"
              onChange={debounceOnChange}
            ></input>
          </div>
        </form>
        {children}
      </div>
      <footer className="bg-light text-dark text-center p-1">
        created by <a href={config.AUTHOR_GITHUB_ACCOUNT}>jakubjereczek</a>
      </footer>
    </div>
  );
};

export default Layout;
