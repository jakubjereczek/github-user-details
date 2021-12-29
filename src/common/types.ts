export interface ErrorResponse {
  message: string;
  code: number;
}

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  created_at: string;
  followers: number;
  following: number;
}

export interface Repository {
  name: string;
  full_name: string;
  private: boolean;
  owner: Pick<User, "login" | "avatar_url" | "html_url">;
  html_url: string;
  description: string;
  created_at: string;
  language: string;
  forks_count: number;
  licence: {
    name: string;
  };
  watchers: string;
}
