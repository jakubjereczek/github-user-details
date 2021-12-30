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

  return (
    <div
      className="position-absolute"
      style={{
        zIndex: 1,
      }}
    >
      <div className="row">{LanguageItems}</div>
    </div>
  );
};

export default LanguageSwitch;
