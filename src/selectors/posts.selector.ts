import { Post } from '../models/post.model';
import { AppState } from '../store/AppState';

export const getPosts = (state: AppState): Post[] => state.posts;

export const getPost = (state: AppState, id: string): Post => {
  return state.posts.filter((post) => post.id === id)[0];
};
