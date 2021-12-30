import React, { useCallback } from "react";
import { navigate } from "src/common/history";
import { debounce } from "lodash";
import { showTranslation } from "src/common/helpers";
import { TranslationKeys } from "src/i18n";

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
    <form className="py-4">
      <div className="form-group">
        <label htmlFor="searchInput">
          {showTranslation(TranslationKeys.LayoutSearchBarSearchInputLabel)}
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder={showTranslation(
            TranslationKeys.LayoutSearchBarSearchInputPlaceholder
          )}
          onChange={debounceOnChange}
        ></input>
      </div>
    </form>
  );
};

export default SearchBar;
