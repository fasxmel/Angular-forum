import { Theme } from "./theme";
import { UserData } from "./user";

export interface Post {
      id: string;
      postName: string;
      postText: string;
      themes: Theme[];
      users: UserData[];
}   
      
