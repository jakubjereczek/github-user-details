import jsonConfig from "src/config/config.json";

interface Config {
  API_URL: string;
  AUTHOR_GITHUB_ACCOUNT: string;
}

export const getConfig = (): Config => {
  const config = JSON.parse(JSON.stringify(jsonConfig));
  return config as Config;
};
