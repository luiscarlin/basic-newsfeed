import { Action } from 'redux';
import { User } from '../models/user.model';

export const ADD_COMMENT = 'COMMENT@ADD';
export const LIKE_COMMENT = 'COMMENT@LIKE';
export const DELETE_COMMENT = 'COMMENT@DELETE';
export const EDIT_COMMENT = 'COMMENT@EDIT';

interface AddCommentAction extends Action {
  type: typeof ADD_COMMENT;
  payload: {
    user: User;
    postId: string;
    comment: string;
  };
}

interface LikeCommentAction extends Action {
  type: typeof LIKE_COMMENT;
  payload: {
    postId: string;
    commentId: string;
  };
}

interface DeleteCommentAction extends Action {
  type: typeof DELETE_COMMENT;
  payload: {
    postId: string;
    commentId: string;
  };
}

interface EditCommentAction extends Action {
  type: typeof EDIT_COMMENT;
  payload: {
    postId: string;
    commentId: string;
    comment: string;
  };
}

export const addComment = (user: User, postId: string, comment: string): AddCommentAction => {
  return {
    type: ADD_COMMENT,
    payload: { user, postId, comment },
  };
};

export const likeComment = (postId: string, commentId: string): LikeCommentAction => {
  return {
    type: LIKE_COMMENT,
    payload: { postId, commentId },
  };
};

export const deleteComment = (postId: string, commentId: string): DeleteCommentAction => {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId },
  };
};

export const editComment = (postId: string, commentId: string, comment: string): EditCommentAction => {
  return {
    type: EDIT_COMMENT,
    payload: { postId, commentId, comment },
  };
};
