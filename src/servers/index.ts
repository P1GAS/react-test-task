import type { AxiosResponse } from "axios";
import type { Post, User } from "models";

import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<AxiosResponse<Post[]>> =>
  await axios.get("/posts");

const getUser = async (): Promise<AxiosResponse<User>> =>
  await axios.get("/users/1");

export { getPosts, getUser };
