import { User } from './user.interface';

export interface ForumQuestion {
  question?: string;
  user?: User;
  answers?: ForumAnwser[];
  featuredAnswers?: ForumAnwser[];
  reactions?: number;
}

export interface ForumAnwser {
  answer?: string;
  user?: User;
}
