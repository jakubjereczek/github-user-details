import jsonConfig from "src/config/config.json";

interface Config {
  API_URL: string;
  AUTHOR_GITHUB: string;
}

export const getConfig = (): Config => {
  const config = JSON.parse(JSON.stringify(jsonConfig));
  return config as Config;
};

export const openWindow = (url: string) => window.open(url);
