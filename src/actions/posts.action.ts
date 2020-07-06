import { Action } from 'redux';
import { User } from '../models/user.model';

export const CREATE_NEW_POST = 'POST@CREATE_NEW_POST';
export const ADD_POST_LIKE = 'POST@ADD_LIKE';

interface AddNewPostAction extends Action {
  type: typeof CREATE_NEW_POST;
  payload: {
    text: string;
    user: User;
  };
}

interface AddPostLIkeAction extends Action {
  type: typeof ADD_POST_LIKE;
  payload: {
    id: string;
  };
}

export const addNewPost = (user: User, text: string): AddNewPostAction => {
  return {
    type: CREATE_NEW_POST,
    payload: { user, text },
  };
};

export const addPostLike = (id: string): AddPostLIkeAction => {
  return {
    type: ADD_POST_LIKE,
    payload: { id },
  };
};
