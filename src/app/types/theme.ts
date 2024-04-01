import { Post } from "./post";
import { UserData } from "./user";

export interface Theme {
  id: string;
  themeName: string;
  themeText: string;
  posts: Post[];
  users: UserData[];
}
