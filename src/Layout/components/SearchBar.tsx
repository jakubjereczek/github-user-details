import React, { useCallback } from "react";
import { navigate } from "src/common/history";
import { debounce } from "lodash";

const SearchBar = () => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    navigate(`/user/${event.target.value}`);

  const debounceOnChange = useCallback(
    debounce((event) => {
      handleOnChange(event);
    }, 1000),
    [handleOnChange]
  );

  return (
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
  );
};

export default SearchBar;
