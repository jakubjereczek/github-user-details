import { changeLanguage, LANGUAGES } from "src/i18n";

const LanguageSwitch = () => {
  const LanguageItems = LANGUAGES.map((lang) => {
    const handleOnClick = () => changeLanguage(lang.key);

    return (
      <button
        key={lang.key}
        type="button"
        className="btn btn-dark"
        onClick={handleOnClick}
      >
        {lang.key.toUpperCase()}
      </button>
    );
  });

  return <div className="d-flex justify-content-end">{LanguageItems}</div>;
};

export default LanguageSwitch;
