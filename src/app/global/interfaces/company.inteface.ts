import { ForumQuestion } from "./forum.interface";
import { User } from "./user.interface";

export interface Company {
  name?: string;
  description?: string;
  users?: User[];
  questions?: ForumQuestion[];
  rate?: number;
  image?: string;
}