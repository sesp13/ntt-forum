import { User } from './user.interface';

export interface ForumQuestion {
  question?: string;
  user?: User;
  answers?: ForumAnwser[];
  featuredAnswers?: ForumAnwser[];
  reactions?: number;
  image?: string;
  categories?: string[];
}

export interface ForumAnwser {
  answer?: string;
  user?: User;
  replies?: ForumAnwser[];
}
