export interface CommentModel {
  id: string;
  photoUrl: string;
  minutesAgo: number;
  name: string;
  role: string;
  message: string;
  numberLikes: number;
}
