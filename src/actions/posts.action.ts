import { Action } from 'redux';
import { User } from '../models/user.model';

export const ADD_POST = 'POST@ADD';
export const LIKE_POST = 'POST@LIKE';

interface AddPostAction extends Action {
  type: typeof ADD_POST;
  payload: {
    text: string;
    user: User;
  };
}

interface LikePostAction extends Action {
  type: typeof LIKE_POST;
  payload: {
    id: string;
  };
}

export const addPost = (user: User, text: string): AddPostAction => {
  return {
    type: ADD_POST,
    payload: { user, text },
  };
};

export const likePost = (id: string): LikePostAction => {
  return {
    type: LIKE_POST,
    payload: { id },
  };
};
