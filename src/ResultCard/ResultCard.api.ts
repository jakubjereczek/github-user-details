import Api from "src/api/Api";
import { User, Repository } from "src/common/types";

const fetchUser = async (userName: string) => {
  const { data } = await Api.get<User>(`/users/${userName}`);
  return data;
};

const fetchRepos = async (userName: string) => {
  const { data } = await Api.get<Repository[]>(`/users/${userName}/repos`);
  return data;
};

export { fetchUser, fetchRepos };
