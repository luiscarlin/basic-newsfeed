import { Action } from 'redux';
import { User } from '../models/user.model';

export const CREATE_NEW_POST = 'NEW_POST@CREATE_NEW_POST';

interface AddNewPostAction extends Action {
  type: typeof CREATE_NEW_POST;
  payload: {
    text: string;
    user: User;
  };
}

export const addNewPost = (user: User, text: string): AddNewPostAction => {
  return {
    type: CREATE_NEW_POST,
    payload: { user, text },
  };
};
