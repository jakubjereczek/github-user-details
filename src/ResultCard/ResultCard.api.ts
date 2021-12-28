import Api from "src/api/Api";
import { User } from "src/common/types";

const fetchUser = async (userName: string) => {
  const { data } = await Api.get<User>(`/users/${userName}`);

  console.log(data);

  return data;
};

export { fetchUser };
