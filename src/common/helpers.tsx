import jsonConfig from "src/config/config.json";
import { useTranslation as i18useTranslation } from "react-i18next";
import { TranslationKeys } from "src/i18n";

interface Config {
  API_URL: string;
  AUTHOR_GITHUB: string;
}

export const getConfig = (): Config => {
  const config = JSON.parse(JSON.stringify(jsonConfig));
  return config as Config;
};

export const openWindow = (url: string) => window.open(url);

export const showTranslation = (key: TranslationKeys, obj?: {}) => {
  const { t } = i18useTranslation();

  return t(key, obj);
};

export const asDate = (dateString: string) => new Date(dateString);
