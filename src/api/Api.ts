import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getConfig } from "src/common/helpers";

interface PostArgs<T> {
  url: string;
  data: T;
}

class Api {
  private static axiosInstance: AxiosInstance;

  static init() {
    const config = getConfig();
    console.log(config, config.API_URL);

    this.axiosInstance = axios.create({
      baseURL: config.API_URL,
    });
  }

  static async get<ResponseType>(url: string) {
    return this.axiosInstance.get<ResponseType>(url);
  }

  static async post<ResponseType, DataType = undefined>({
    url,
    data,
  }: PostArgs<DataType>) {
    return this.axiosInstance.post<DataType, AxiosResponse<ResponseType>>(
      url,
      data
    );
  }
}

export default Api;
