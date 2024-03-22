import { Post } from "./post";
import { Theme } from "./theme";

export interface User {
  themes: Theme;
  posts: Post;
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}
