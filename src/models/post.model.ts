import { CommentModel } from './comment.model';

export interface Post {
  id: string;
  photoUrl: string;
  name: string;
  location: string;
  minutesAgo: number;
  postMessage: string;
  numberLikes: number;
  numberComments: number;
  comments: CommentModel[];
}
