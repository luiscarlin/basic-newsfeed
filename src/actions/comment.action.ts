import { Action } from 'redux';

export const LIKE_COMMENT = 'COMMENT@LIKE';
export const DELETE_COMMENT = 'COMMENT@DELETE';
export const EDIT_COMMENT = 'COMMENT@EDIT';

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
